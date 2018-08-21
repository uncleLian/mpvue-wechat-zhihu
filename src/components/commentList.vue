<template>
    <div class="comment-list">
        <div class="list-item" v-for="item in json" :key="item.id">
            <div class="item-header">
                <div class="item-user">
                    <img class="item-avatar" :src="item.avatar">
                    <div class="item-author">{{item.author}}</div>
                </div>
                <div class="item-time">{{item.time}}</div>
            </div>
            <div class="item-content">{{item.content}}</div>
            <div class="item-footer">
                <div class="footer-item">
                    <div class="item-icon my-icon-zan"></div>
                    <div class="item-value ">{{item.likes}}</div>
                </div>
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
    }
}
</script>
<style lang='stylus' scoped>
.comment-list {
    position: relative;
    width: 100%;
    .list-item {
        box-sizing: border-box;
        position: relative;
        color: $mainText;
        font-size: 15px;
        padding: 15px 0;
        margin: 0 20px;
        border-bottom: 1px solid $borderColor;
        .item-header {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            .item-user {
                display: flex;
                align-items: center;
                .item-avatar {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                    border-radius: 100%;
                    overflow: hidden;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .item-time {
                color: $iconColor;
                font-size: 14px;
                margin-left: auto;
            }
        }
        .item-content {
            margin-bottom: 8px;
        }
        .item-footer {
            display: flex;
            align-items: center;
            .footer-item {
                flex-center();
                color: $iconColor;
                font-size: 14px;
                line-height: 1;
                .item-icon {
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>
