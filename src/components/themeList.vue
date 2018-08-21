<template>
    <div class="theme-list">
        <div class="list-item" v-for="item in json" :key="item.id" @click="url(item)">
            <div class="item-container">
                <div class="item-image">
                    <img :src="item.thumbnail" mode="widthFix">
                </div>
                <div class="item-text">
                    <div class="item-title">{{item.name}}</div>
                    <div class="item-subTitle">{{item.description}}</div>
                </div>
            </div>
        </div>
        <div class="list-bottomLoad" v-if="bottomLoading">
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
        bottomLoading: {
            type: [Boolean, String],
            default: false
        }
    },
    methods: {
        url(item) {
            wx.navigateTo({
                url: `/pages/theme/main?id=${item.id}`
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.theme-list {
    .list-item {
        box-sizing: border-box;
        position: relative;
        margin: 15px 16px;
        border: 1px solid #ebeef5;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        overflow: hidden;
        .item-container {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 15px 12px;
            .item-image {
                width: 33%;
                height: 78px;
                border-radius: 5px;
                overflow: hidden;
                background-color: #ddd;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .item-text {
                width: 67%;
                padding-left: 15px;
                .item-title {
                    text-ellipsis();
                    color: $titleText;
                    font-size: $titleSize;
                }
                .item-subTitle {
                    color: $titleText;
                    font-size: $subTitleSize;
                }
            }
        }
    }
}
</style>
