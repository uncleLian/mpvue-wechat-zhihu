import Vue from 'vue'
import App from './App'

import '@/assets/iconfont/iconfont.css'

import articleList from '@/components/articleList'
import commentList from '@/components/commentList'
import themeList from '@/components/themeList'
import loading from '@/components/loading'

// 注册全局组件（不支持动态注册）
Vue.component('articleList', articleList)
Vue.component('commentList', commentList)
Vue.component('themeList', themeList)
Vue.component('my-loading', loading)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
