<template>
    <div id="comment">
        <scroll-view scroll-y @scrolltolower="getShortCommentMore" :style="{'height': winHeight + 'px'}">
            <comment-list :json="comments" :bottomLoading="bottomLoading"></comment-list>
        </scroll-view>
        <my-loading :loading="loading" :reload="getShortComment"></my-loading>
    </div>
</template>

<script>
import { getShortComment, getShortCommentMore } from '@/api'
import { formatTime } from '@/utils'
export default {
    data() {
        return {
            winHeight: 0,
            id: '',
            comments: [],
            loading: false,
            bottomLoading: true
        }
    },
    mounted() {
        this.id = this.$root.$mp.query.id
        this.getSystemInfo()
        this.getShortComment()
    },
    methods: {
        getShortComment() {
            this.loading = 'loading'
            getShortComment(this.id).then(res => {
                if (res && res.comments.length > 0) {
                    this.loading = false
                    res.comments.forEach(item => {
                        item.time = formatTime(item.time)
                    })
                    this.comments = res.comments
                } else {
                    this.loading = 'nothing'
                }
            }).catch(() => {
                this.loading = 'error'
            })
        },
        getShortCommentMore() {
            if (this.bottomLoading !== 'nothing' && this.bottomLoading !== 'error') {
                this.bottomLoading = 'loading'
                let lastId = this.comments[this.comments.length - 1].id
                getShortCommentMore(this.id, lastId).then(res => {
                    if (res && res.comments.length > 0) {
                        this.bottomLoading = true
                        res.comments.forEach(item => {
                            item.time = formatTime(item.time)
                        })
                        this.comments.push(...res.comments)
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
#comment {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
