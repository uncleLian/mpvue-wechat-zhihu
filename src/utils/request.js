import Vue from 'vue'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

fly.config.baseURL = 'https://news-at.zhihu.com/api/'
fly.config.timeout = 10000

fly.interceptors.request.use((config, promise) => {
    return config
})
fly.interceptors.response.use(response => {
    const res = response.data
    return Promise.resolve(res)
}, error => {
    return Promise.reject(error)
})

Vue.prototype.$http = fly

export const request = fly
