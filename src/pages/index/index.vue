<template>
    <div id="index">
        <!-- tabs -->
        <div class="index-tabs">
            <div class="tabs-item" v-for="(item, index) in tabsOption" :key="index" :class="[activeIndex === index? 'active': '']" @click="activeIndex = index">{{item}}</div>
        </div>
        <div class="index-tips" :animation="AniData" @transitionend="AniData = ''">已为你拉取最新内容</div>
        <!-- swiper -->
        <swiper class="index-swiper" :current="activeIndex" @change="pageChange">
            <!-- 最新消息 -->
            <swiper-item class="swiper-item">
                <scroll-view scroll-y :enable-back-to-top="true" @scrolltolower="getBeforeArticle" :style="{'height': winHeight + 'px'}">
                    <article-list :id="'articleList-' + index" v-for="(item, index) in articles" :key="index" :json="item.stories" :date="item.formatDate"></article-list>
                    <div class="list-bottomLoad" v-if="articles.length > 0 && articleBottomLoading">
                        <div class="loading" v-if="articleBottomLoading === 'loading'">加载中...</div>
                        <div class="nothing" v-if="articleBottomLoading === 'nothing'">刷完了，休息一下吧</div>
                        <div class="error" v-if="articleBottomLoading === 'error'">出错了，刷新试试</div>
                    </div>
                </scroll-view>
            </swiper-item>
            <!-- 主题日报 -->
            <swiper-item class="swiper-item">
                <scroll-view scroll-y :enable-back-to-top="true" :style="{'height': winHeight + 'px'}">
                    <theme-list :json="themes" :bottomLoading="themeBottomLoading"></theme-list>
                </scroll-view>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { getLatestArticle, getBeforeArticle, getThemes } from '@/api'
import { formatDate } from '@/utils'
export default {
    data() {
        return {
            winHeight: 0,
            tabsOption: ['日报', '推荐主题'],
            activeIndex: 0,
            articles: [],
            themes: [],
            articleBottomLoading: true,
            themeBottomLoading: 'loading',
            AniData: ''
        }
    },
    mounted() {
        wx.showLoading({ title: '加载中', mask: true })
        this.getSystemInfo()
        this.getLatestArticle()
    },
    methods: {
        // 最新消息
        getLatestArticle() {
            getLatestArticle().then(res => {
                wx.hideLoading()
                if (res) {
                    res.formatDate = formatDate(res.date)
                    this.articles = []
                    this.articles.push(res)
                }
            }).catch(() => {
                wx.showToast({ title: '请求失败，请检查网络', icon: 'none', duration: 3000 })
            })
        },
        // 过往消息
        getBeforeArticle() {
            if (this.articleBottomLoading !== 'nothing' && this.articleBottomLoading !== 'error') {
                this.articleBottomLoading = 'loading'
                let lastDate = this.articles[this.articles.length - 1].date
                getBeforeArticle(lastDate).then(res => {
                    if (res) {
                        this.articleBottomLoading = true
                        res.formatDate = formatDate(res.date)
                        this.articles.push(res)
                    } else {
                        this.articleBottomLoading = 'nothing'
                    }
                }).catch(() => {
                    this.articleBottomLoading = 'error'
                })
            }
        },
        // 主题列表
        getThemes() {
            this.themeBottomLoading = 'loading'
            getThemes().then(res => {
                if (res) {
                    this.themes = res.others
                }
                this.themeBottomLoading = 'nothing'
            }).catch(() => {
                this.themeBottomLoading = 'error'
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
        },
        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo() {
            wx.getSystemInfo({
                success: (res) => {
                    this.winHeight = res.windowHeight - 50
                }
            })
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

        let animation = wx.createAnimation({
            duration: 400,
            timingFunction: 'ease'
        })
        animation.translateY(50).step().translateY(-50).step({ delay: 2000 })
        this.AniData = animation.export()
    },
    // 分享
    onShareAppMessage() {
        return {
            'path': `/pages/index/main`
        }
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
    background-color: #e8e8e8;
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
        background-color: #fff;
        .tabs-item {
            position: relative;
            color: $mainText;
            font-size: $titleSize;
            font-weight: 500;
            padding: 8px 0;
            margin: 0 30px 8px;
            &.active {
                color: $appColor;
                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    border-radius: 5px;
                    background-color: $appColor;
                }
            }
        }
    }
    .index-tips {
        flex-center();
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        width: 100%;
        height: 40px;
        color: $appColor;
        font-size: 14px;
        padding: 8px 0;
        background: #fff;
    }
    .index-swiper {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-top: $tabsHeight;
        background-color: #fff;
        .swiper-item {
            overflow: auto;
        }
    }
}
</style>
