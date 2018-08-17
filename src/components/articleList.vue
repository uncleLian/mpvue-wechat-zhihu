<template>
    <div class="article-list">
        <div class="list-date" v-if="date">{{date}}</div>
        <div class="list-item" v-for="item in json" :key="item.id" @click="url(item)">
            <!-- 有图 -->
            <div class="item-container images" v-if="item.images">
                <div class="item-title">{{item.title}}</div>
                <div class="item-images">
                    <img :src="item.images" mode="widthFix">
                </div>
            </div>
            <!-- 无图 -->
            <div class="item-container text" v-else>
                <div class="item-title"></div>
            </div>
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
        position: relative;
        padding: 0 16px;
        margin: 15px 0;
        .item-container {
            &.images {
                display: flex;
                .item-title {
                    width: 67%;
                    color: $titleText;
                    font-size: $titleSize;
                    padding-right: 15px;
                    margin-bottom: 15px;
                    -webkit-line-clamp: 3;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .item-images {
                    width: 33%;
                    max-height: 80px;
                    border-radius: 5px;
                    overflow: hidden;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
