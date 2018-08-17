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
    </div>
</template>

<script>
export default {
    props: ['json'],
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
.theme-list {
    .list-item {
        position: relative;
        padding: 0 16px;
        margin: 15px 0;
        .item-container {
            position: relative;
            width: 100%;
            height: 160px;
            border-radius: 5px;
            background-color: #888;
            overflow: hidden;
            .item-image {
                display: block;
                width: 100%;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .item-text {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                color: #fff;
                font-weight: bold;
                text-shadow: 1px 1px 24px rgba(0, 0, 0, 0.9);
                padding: 8px 15px;
                .item-title {
                    text-ellipsis();
                    font-size: $titleSize;
                }
                .item-subTitle {
                    text-ellipsis();
                    font-size: $subTitleSize;
                }
            }
        }
    }
}
</style>
