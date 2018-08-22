<template>
    <div id="detail">
        <div class="detail-container" v-if="json">
            <!-- cover -->
            <div class="detail-cover" v-if="json.image">
                <img class="detail-image" :src="json.image" mode="widthFix">
                <div class="detail-title">{{json.title}}</div>
                <div class="cover-mask"></div>
                <div class="cover-mask-black"></div>
            </div>
            <!-- content -->
            <div class="detail-content">
                <rich-text :nodes="json.body"></rich-text>
            </div>
            <!-- tool -->
            <div class="detail-tool" v-if="extra">
                <div class="tool-item popularity">
                    <div class="item-icon my-icon-vote-up"></div>
                    <div class="item-value">赞同 {{extra.popularity || 0}}</div>
                </div>
                <div class="tool-item comment" @click="url('comment')">
                    <div class="item-icon my-icon-comments"></div>
                    <div class="item-value">评论 {{extra.comments || 0}}</div>
                </div>
                <button class="tool-item share" open-type="share">
                    <div class="item-icon my-icon-share"></div>
                    <div class="item-value">分享</div>
                </button>
                <div class="tool-item home" @click="url('index')">
                    <div class="item-icon my-icon-home"></div>
                    <div class="item-value">首页</div>
                </div>
            </div>
        </div>
        <my-loading :loading="loading" :reload="getArticleDetail"></my-loading>
    </div>
</template>

<script>
import { getArticleDetail, getArticleExtra } from '@/api'
import { formatHTML } from '@/utils'
export default {
    data() {
        return {
            id: '',
            json: '',
            extra: '',
            loading: false
        }
    },
    mounted() {
        this.id = this.$root.$mp.query.id
        this.getArticleDetail()
        this.getArticleExtra()
    },
    methods: {
        getArticleDetail() {
            this.loading = 'loading'
            getArticleDetail(this.id).then(res => {
                if (res) {
                    res.body = formatHTML(res.body)
                    this.json = res
                    this.loading = false
                } else {
                    this.loading = 'nothing'
                }
            }).catch(() => {
                this.loading = 'error'
            })
        },
        getArticleExtra() {
            getArticleExtra(this.id).then(res => {
                if (res) {
                    this.extra = res
                }
            })
        },
        // 跳转至评论页
        url(type) {
            if (type === 'index') {
                wx.navigateTo({
                    url: `/pages/index/main`
                })
            } else if (type === 'comment') {
                wx.navigateTo({
                    url: `/pages/comment/main?id=${this.id}`
                })
            }
        }
    },
    // 分享
    onShareAppMessage() {
        return {
            'title': this.json.title,
            'path': `/pages/detail/main?id=${this.id}`
        }
    }
}
</script>

<style lang="stylus">
#detail {
    position: relative;
    width: 100%;
    padding-bottom: $articleToolHeight;
    background: #fff;
    .detail-container {
        position: relative;
        width: 100%;
        padding-bottom: $articleToolHeight;
        .detail-cover {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
            .detail-image {
                display: block;
                width: 100%;
            }
            .detail-title {
                box-sizing: border-box;
                position: absolute;
                left: 0;
                bottom: 15px;
                z-index: 20;
                width: 100%;
                color: #fff;
                font-size: $titleSize;
                text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                user-select: all
                padding: 0 16px;
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
        .detail-content {
            box-sizing: border-box;
            position: relative;
            width: 100%;
            word-wrap: break-word;
            padding: 16px;
            .link-text {
                color: $linkColor;
                user-select: all
            }
            .headline-background, .view-more {
                display: none;
            }
            .headline-title {
                color: $titleColor;
                font-size: 20px;
                user-select: all
            }
            .question-title {
                color: $titleColor;
                font-size: 20px;
                user-select: all
            }
            .meta {
                display: flex;
                align-items: center;
                font-size: 13px;
                margin: 8px 0;
                .avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 100%;
                    margin-right: 8px;
                }
                .author {
                    color: $appColor;
                    white-space: nowrap;
                }
                .bio {
                    text-ellipsis();
                    color: $lessText;
                }
            }
            .content {
                width: 100%;
                color: $mainText;
                font-size: 18px;
                text-align: justify;
                line-height: 32px;
                .content-image {
                    display: block;
                    width: 100%;
                    height: auto;
                    margin-top: 8px;
                }
                .info-text {
                    display: block;
                    width: 100%;
                    color: $lessText;
                    font-size: 16px;
                    margin: 8px 0;
                    line-height: initial;
                }
            }
        }
        .detail-tool {
            box-sizing: border-box;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            width: 100%;
            height: $articleToolHeight;
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            padding: 10px 16px;
            border-top: 1px solid $borderColor;
            background: #fff;
            overflow-x: auto;
            .tool-item {
                flex-center();
                min-width: fit-content;
                color: $iconColor;
                font-size: 14px;
                font-weight: 500;
                white-space: nowrap;
                line-height: 1;
                padding: 8px 10px;
                margin-right: 6px;
                border-radius: 3px;
                &.popularity {
                    color: $appColor;
                    background-color: $disableColor;
                }
                &.share {
                    border: none;
                    background: transparent;
                    margin-left: 0;
                    &:after {
                        border: none;
                    }
                }
                &:last-child {
                    margin-right: 16px;
                }
                .item-icon {
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
