<template>
    <div class="theme-list">
        <div class="list-item" v-for="item in json" :key="item.id" @click="url(item)">
            <div class="item-container">
                <div class="item-image">
                    <img :src="item.thumbnail" mode="aspectFill" lazy-load="true">
                </div>
            </div>
            <div class="item-text">
                <div class="item-title">{{item.name}}</div>
                <div class="item-subTitle">{{item.description}}</div>
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
        overflow: hidden;
        .item-container {
            position: relative;
            width: 100%;
            height: 160px;
            background-color: #ddd;
            border-radius: 5px 5px 0 0;
            overflow: hidden;
            .item-image {
                display: block;
                width: 100%;
                img {
                    display: block;
                    width: 100%;
                }
            }
        }
        .item-text {
            padding: 8px;
            .item-title {
                text-ellipsis();
                color: $titleText;
                font-size: $subTitleSize;
            }
            .item-subTitle {
                text-ellipsis();
                color: $mainText;
                font-size: 13px;
            }
        }
    }
}
</style>
