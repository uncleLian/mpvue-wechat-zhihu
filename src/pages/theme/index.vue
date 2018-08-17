<template>
    <div id="theme">
        <scroll-view scroll-y @scrolltolower="getBeforeThemeArticle" :style="{'height': winHeight + 'px'}">
            <div class="theme-cover" v-if="themeInfo && themeInfo.image">
                <img class="theme-image" :src="themeInfo.image" mode="aspectFill">
                <div class="theme-title">
                    <div class="title-name">{{themeInfo.name}}</div>
                    <div class="title-description">{{themeInfo.description}}</div>
                </div>
                <div class="cover-mask"></div>
                <div class="cover-mask-black"></div>
            </div>
            <div class="theme-list">
                <article-list :json="themeArticles" :bottomLoading="bottomLoading"></article-list>
            </div>
        </scroll-view>
    </div>
</template>

<script>
import articleList from '@/components/articleList'
import { getThemeArticle, getBeforeThemeArticle } from '@/api'
export default {
    components: { articleList },
    data() {
        return {
            winHeight: 0,
            themeId: '',
            themeInfo: '',
            themeArticles: [],
            bottomLoading: 'loading'
        }
    },
    mounted() {
        this.themeId = this.$root.$mp.query.id
        this.getSystemInfo()
        this.getThemeArticle()
    },
    methods: {
        getThemeArticle() {
            getThemeArticle(this.themeId).then(res => {
                if (res) {
                    this.themeInfo = {
                        'image': res.image,
                        'name': res.name,
                        'description': res.description
                    }
                    this.themeArticles = res.stories
                }
            })
        },
        getBeforeThemeArticle() {
            this.bottomLoading = 'loading'
            let lastId = this.themeArticles[this.themeArticles.length - 1].id
            getBeforeThemeArticle(this.themeId, lastId).then(res => {
                console.log(res)
                if (res) {
                    this.themeArticles.push(...res.stories)
                } else {
                    this.bottomLoading = 'nothing'
                }
            }).catch(() => {
                this.bottomLoading = 'error'
            })
        },
        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo() {
            wx.getSystemInfo({
                success: (res) => {
                    this.winHeight = res.windowHeight
                }
            })
        }
    }
}
</script>

<style lang="stylus">
#theme {
    position: relative;
    width: 100%;
    height: 100%;
    .theme-cover {
        position: relative;
        width: 100%;
        height: 220px;
        overflow: hidden;
        .theme-image {
            display: block;
            width: 100%;
        }
        .theme-title {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            bottom: 20px;
            z-index: 20;
            width: 67%;
            color: #fff;
            text-align: right;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
            padding-right: 16px;
            .title-name {
                align-self: flex-end;
                width: fit-content;
                font-size: $titleSize;
                padding-bottom: 6px;
                margin-bottom: 6px;
                border-bottom: 2px solid $appColor;
            }
            .title-description {
                font-size: 16px;
            }
        }
        .cover-mask {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            height: 100%;
            background-color: rgba(91, 116, 146, 0.5);
        }
        .cover-mask-black {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 11;
            width: 100%;
            height: 25%;
            background-image: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5) 95%);
        }
    }
    .theme-list {
        box-sizing: border-box;
        position: relative;
    }
}
</style>
