<template>
    <div class="pageLoading" v-if="loading">
        <div class="pageLoading-type nothing" v-if="loading === 'nothing'">
            <icon class="type-icon" type="info" :size="70" />
            <div class="type-label">{{nothingText}}</div>
        </div>
        <div class="pageLoading-type error" v-if="loading === 'error'">
            <icon class="type-icon" type="warn" :size="70" />
            <div class="type-label">{{errorText}}</div>
            <button class="type-button" type="primary" hover-class="app-button-hover" @click="reload">重试</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        loading: {
            type: [Boolean, String],
            default: false
        },
        reload: {
            type: Function,
            default: ''
        },
        nothingText: {
            type: String,
            default: '暂时没有内容'
        },
        errorText: {
            type: String,
            default: '出错了，请检查网络'
        }
    },
    watch: {
        loading(val) {
            this.handleLoading(val)
        }
    },
    methods: {
        handleLoading(val) {
            if (val === 'loading') {
                wx.showLoading({
                    title: '加载中',
                    mask: true
                })
            } else {
                wx.hideLoading()
            }
        }
    }
}
</script>
<style lang='stylus'>
.pageLoading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    color: $lessText;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    .pageLoading-type {
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        padding: 0 16px;
        margin-top: 30%;
        .type-label {
            margin-top: 20px;
        }
        .type-button {
            margin-top: 20px;
            background-color: $appColor;
        }
        &.error {
            .app-button-hover {
                background-color: $pressColor;
                opacity: 0.7;
            }
        }
    }
}
</style>
