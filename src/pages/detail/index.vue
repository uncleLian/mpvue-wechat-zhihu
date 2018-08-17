<template>
    <div id="detail">
        <div class="detail-cover" v-if="json.image">
            <img class="detail-image" :src="json.image" mode="aspectFill">
            <div class="detail-title">{{json.title}}</div>
            <div class="cover-mask"></div>
            <div class="cover-mask-black"></div>
        </div>
        <div class="detail-content">
            <rich-text :nodes="json.body"></rich-text>
        </div>
    </div>
</template>

<script>
import { getArticleDetail } from '@/api'
import { formatHTML } from '@/utils'
export default {
    data() {
        return {
            id: '',
            json: ''
        }
    },
    mounted() {
        this.id = this.$root.$mp.query.id
        this.getArticleDetail()
    },
    methods: {
        getArticleDetail() {
            getArticleDetail(this.id).then(res => {
                if (res) {
                    res.body = formatHTML(res.body)
                    this.json = res
                    console.log(this.json)
                }
            })
        }
    }
}
</script>

<style lang="stylus">
#detail {
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
            position: absolute;
            right: 5%;
            bottom: 20px;
            z-index: 20;
            width: 60%;
            color: #fff;
            font-size: $titleSize;
            text-align: right;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
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
        padding: 16px;
        .link-text {
            color: $linkColor;
        }
        .headline-background, .view-more {
            display: none;
        }
        .question-title {
            color: $titleColor;
            font-size: 20px;
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
            color: $mainText;
            font-size: 18px;
            text-align: justify;
            line-height: 30px;
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
}
</style>
