<template>
    <div id="index">
        <div class="index-tabs">
            <div class="tabs-item" v-for="(item, index) in tabsOption" :key="index" :class="[activeIndex === index? 'active': '']" @click="activeIndex = index">{{item}}</div>
        </div>
        <swiper class="index-swiper" :current="activeIndex" @change="pageChange">
            <swiper-item class="swiper-item">
                <scroll-view scroll-y @scrolltolower="getBeforeArticle" :style="{'height': winHeight + 'px'}">
                    <article-list v-for="(item, index) in articles" :key="index" :json="item.stories" :date="item.formatDate"></article-list>
                    <div class="list-bottomLoad" v-if="articles.length > 0">
                        <div class="loading" v-if="articlesLoading === 'loading'">加载中...</div>
                        <div class="nothing" v-if="articlesLoading === 'nothing'">刷完了，休息一下吧</div>
                        <div class="error" v-if="articlesLoading === 'error'">出错了，刷新试试</div>
                    </div>
                </scroll-view>
            </swiper-item>
            <swiper-item class="swiper-item">
                <scroll-view scroll-y :style="{'height': winHeight + 'px'}">
                    <theme-list :json="themes"></theme-list>
                </scroll-view>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import articleList from '@/components/articleList'
import themeList from '@/components/themeList'
import { getLatestArticle, getBeforeArticle, getThemes } from '@/api'
import { formatDate } from '@/utils'
export default {
    components: { articleList, themeList },
    data() {
        return {
            winHeight: 0,
            tabsOption: ['最新消息', '主题日报'],
            activeIndex: 0,
            articles: [],
            articlesLoading: 'loading',
            themes: []
        }
    },
    mounted() {
        this.getSystemInfo()
        this.getLatestArticle()
    },
    methods: {
        // 最新消息
        getLatestArticle() {
            getLatestArticle().then(res => {
                if (res) {
                    res.formatDate = formatDate(res.date)
                    this.articles = []
                    this.articles.push(res)
                }
            })
        },
        // 过往消息
        getBeforeArticle() {
            this.articlesLoading = 'loading'
            let dateParams = this.articles[this.articles.length - 1].date
            getBeforeArticle(dateParams).then(res => {
                if (res) {
                    res.formatDate = formatDate(res.date)
                    this.articles.push(res)
                } else {
                    this.articlesLoading = 'nothing'
                }
            }).catch(() => {
                this.articlesLoading = 'error'
            })
        },
        // 主题列表
        getThemes() {
            getThemes().then(res => {
                this.themes = res.others
            })
        },
        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo() {
            wx.getSystemInfo({
                success: (res) => {
                    this.winHeight = res.windowHeight - 50
                }
            })
        },
        // 页面change
        pageChange(e) {
            this.activeIndex = e.mp.detail.current
            if (this.activeIndex === 0 && this.articles.length === 0) {
                this.getLatestArticle()
            } else if (this.activeIndex === 1 && this.themes.length === 0) {
                this.getThemes()
            }
        }
    },
    // 下拉刷新
    async onPullDownRefresh() {
        if (this.activeIndex === 0) {
            await this.getLatestArticle()
        } else {
            await this.getThemes()
        }
        wx.stopPullDownRefresh()
    }
}
</script>

<style lang="stylus">
$tabsHeight = 50px;
#index {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #fff;
    .index-tabs {
        flex-center();
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        width: 100%;
        height: $tabsHeight;
        border-bottom: 1px solid #dcdfe6;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
        backgroun-color: #fff;
        .tabs-item {
            position: relative;
            color: $mainText;
            font-size: $subTitleSize;
            padding: 8px 0;
            margin: 0 30px;
            &.active {
                color: $appColor;
                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    border-radius: 5px;
                    background-color: $appColor;
                }
            }
        }
    }
    .index-swiper {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-top: $tabsHeight;
        .swiper-item {
            overflow: auto;
        }
    }
}
</style>
