<template>
    <div class="article-list">
        <div class="list-date" v-if="date">{{date}}</div>
        <div class="list-item" v-for="item in json" :key="item.id" @click="url(item)">
            <!-- 有图 -->
            <div class="item-container images" v-if="item.images">
                <div class="item-title">{{item.title}}</div>
                <div class="item-images">
                    <img :src="item.images[0] || item.images" mode="widthFix">
                </div>
            </div>
            <!-- 无图 -->
            <div class="item-container text" v-else>
                <div class="item-title">{{item.title}}</div>
            </div>
        </div>
        <div class="list-bottomLoad" v-if="json.length > 0 && bottomLoading">
            <div class="loading" v-if="bottomLoading === 'loading'">加载中...</div>
            <div class="nothing" v-if="bottomLoading === 'nothing'">刷完了，休息一下吧</div>
            <div class="error" v-if="bottomLoading === 'error'">出错了，刷新试试</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        json: {
            type: Array,
            default: []
        },
        date: {
            type: String,
            default: ''
        },
        bottomLoading: {
            type: [Boolean, String],
            default: false
        }
    },
    methods: {
        url(item) {
            wx.navigateTo({
                url: `/pages/detail/main?id=${item.id}`
            })
        }
    }
}
</script>

<style lang="stylus">
.article-list {
    .list-date {
        flex-center();
        color: #fff;
        font-size: $subTitleSize;
        letter-spacing: 1px;
        width: 40%;
        height: 28px;
        margin-top: 15px;
        border-radius: 50px;
        background-color: $appColor;
    }
    .list-item {
        box-sizing: border-box;
        position: relative;
        padding: 15px 0;
        margin: 0 16px;
        border-bottom: 1px solid $borderColor;
        .item-container {
            .item-title {
                color: $titleText;
                font-size: $titleSize;
                -webkit-line-clamp: 3;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &.images {
                display: flex;
                align-items: center;
                .item-title {
                    width: 67%;
                    padding-right: 15px;
                }
                .item-images {
                    width: 33%;
                    height: 78px;
                    border-radius: 5px;
                    overflow: hidden;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
            }
            &.text {
                width: 100%;
            }
        }
    }
}
</style>
