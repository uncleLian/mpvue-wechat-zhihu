# mpvue-wechat-zhihu

![image](https://img.shields.io/badge/mpvue-1.0.11-blue.svg)
![image](https://img.shields.io/badge/flyio-0.6.0-green.svg)

> 知乎日报微信小程序

##### 注：通过mpvue构建的小程序代码在 /dist 目录

## 简介
mpvue-wechat-zhihu 是一个入门级别的微信小程序项目，共4个页面，涉及最新消息、主题日报、文章阅读、文章分享、评论阅读等

## 资源
- [mpvue（基于vue的小程序框架）](https://github.com/Meituan-Dianping/mpvue)
- [flyio（跨端请求库）](https://github.com/wendux/fly)
- [知乎日报Api（感谢提供）](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/)
-  [Stylus（css预处理器）](https://github.com/stylus/stylus)
- [IconFont（阿里图标库）](http://www.iconfont.cn/)

## 扫码体验

> 审核中（2018-08-21 提交） 

## 待优化
1. 【A】下拉刷新加载完成的反馈提示
2. 【F】下拉刷新后页面无法回到顶部
3. 【F】主题页滚动时顶部大图有视差
4. 【F】页面加载时短时间残留上次页面
5. 【F】页面加载提示已结束，但页面渲染缓慢，导致短时间白屏

> 如有其它问题请提 issues，非常感谢

## 运行、开发和发布

##### 前序准备：[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

```bash
# 克隆项目
git clone https://github.com/uncleLian/mpvue-wechat-zhihu.git

# 打开开发者工具，选择小程序项目，点击 + 导入小程序
项目目录：/dist 目录
AppID：选择测试小程序
项目名称：随意

# 打开之后会报错（请求URL不在合法域名列表中）
点击右上角详情，勾上这个选项后就可以看到项目了
[ ] 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书

# 安装依赖
npm install
   
# 启动服务（开发调试）
npm run dev

# 构建正式发布的小程序代码
npm run build
```

## 目录
```js
├── build
├── config
├── dist                        // 小程序代码
├── src
│   ├── api                     // 请求api
│   ├── assets                  // 静态资源
│   ├── components              // 组件
│   ├── pages                   // 页面
│   │   ├── comment         
│   │   ├── detail
│   │   ├── index
│   │   └── theme
│   └── utils                   // 工具
│   ├── app.json                // 小程序配置
│   ├── App.vue
│   ├── main.js
```

## 说明
> 如果对你有帮助，你可以点右上角 "star"支持一下，非常感谢！🌹

> 或者你可以 "follow（关注）" 一下作者，我正在不断开源更多实用的项目

> 你可以从我其他的项目或者star里面找到很多不错的知识点和前端库

> 如有问题可以直接在 Issues 中反馈，或者加入我们下方的Vue群更进一步地交流（请填写获知来源）

## 交流
欢迎热爱学习、忠于分享的朋友一起来交流
- Vue交流群：338241465 —— 广州-小鑫

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present，uncleLian
