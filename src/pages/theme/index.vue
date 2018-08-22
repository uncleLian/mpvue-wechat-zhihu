<template>
    <div id="theme">
        <scroll-view scroll-y @scrolltolower="getBeforeThemeArticle" :style="{'height': winHeight + 'px'}">
            <div class="theme-cover" v-if="themeInfo && themeInfo.image">
                <img class="theme-image" :src="themeInfo.image" mode="aspectFill">
                <div class="theme-title">
                    <div class="title-name">{{themeInfo.name}}</div>
                    <div class="title-description">{{themeInfo.description}}</div>
                </div>
            </div>
            <div class="theme-list">
                <article-list :json="themeArticles" :bottomLoading="bottomLoading"></article-list>
            </div>
        </scroll-view>
        <my-loading :loading="loading" :reload="getThemeArticle"></my-loading>
    </div>
</template>

<script>
import { getThemeArticle, getBeforeThemeArticle } from '@/api'
export default {
    data() {
        return {
            winHeight: 0,
            themeId: '',
            themeInfo: '',
            themeArticles: [],
            loading: false,
            bottomLoading: true
        }
    },
    mounted() {
        this.themeId = this.$root.$mp.query.id
        this.getSystemInfo()
        this.getThemeArticle()
    },
    methods: {
        getThemeArticle() {
            this.loading = 'loading'
            getThemeArticle(this.themeId).then(res => {
                if (res && res.stories.length > 0) {
                    this.loading = false
                    this.themeInfo = {
                        'image': res.image,
                        'name': res.name,
                        'description': res.description
                    }
                    this.themeArticles = res.stories
                } else {
                    this.loading = 'nothing'
                }
            }).catch(() => {
                this.loading = 'error'
            })
        },
        getBeforeThemeArticle() {
            if (this.bottomLoading !== 'nothing' && this.bottomLoading !== 'error') {
                this.bottomLoading = 'loading'
                let lastId = this.themeArticles[this.themeArticles.length - 1].id
                getBeforeThemeArticle(this.themeId, lastId).then(res => {
                    if (res && res.stories.length > 0) {
                        this.themeArticles.push(...res.stories)
                        this.bottomLoading = true
                    } else {
                        this.bottomLoading = 'nothing'
                    }
                }).catch(() => {
                    this.bottomLoading = 'error'
                })
            }
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
    background: #fff;
    .theme-cover {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        .theme-image {
            display: block;
            width: 100%;
            background-color: $imgBgColor;
            filter: contrast(50%);
        }
        .theme-title {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            bottom: 15px;
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
                border-bottom: 4px solid $appColor;
            }
            .title-description {
                font-size: 16px;
            }
        }
    }
    .theme-list {
        box-sizing: border-box;
        position: relative;
    }
}
</style>
