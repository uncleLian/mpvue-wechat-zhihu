# mpvue-wechat-zhihu

![image](https://img.shields.io/badge/mpvue-1.0.11-blue.svg)
![image](https://img.shields.io/badge/flyio-0.6.0-green.svg)

> mpvue-wechat-zhihu 是一个入门级别的资讯类微信小程序，共4个页面，涉及今日文章、主题文章、文章阅读、文章分享、评论阅读等

## 资源
- [mpvue（基于vue的小程序框架）](https://github.com/Meituan-Dianping/mpvue)
- [flyio（跨端请求库）](https://github.com/wendux/fly)
- [知乎日报Api](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/)
-  [Stylus（css预处理器）](https://github.com/stylus/stylus)
- [IconFont（阿里图标库）](http://www.iconfont.cn/)

## 扫码体验

> 审核结果：小程序当前页面涉及个人小程序未允许内容：文娱-资讯，建议申请企业主体小程序（2018-08-22）

> 审核中（2018-08-21 提交） 

##### 注：如有企业类型账号提供，请查看下方联系方式

## 截图

![image](https://github.com/uncleLian/mpvue-wechat-zhihu/raw/master/screenshots/index.png) ![image](https://github.com/uncleLian/mpvue-wechat-zhihu/raw/master/screenshots/theme.png)

![image](https://github.com/uncleLian/mpvue-wechat-zhihu/raw/master/screenshots/detail.png) ![image](https://github.com/uncleLian/mpvue-wechat-zhihu/raw/master/screenshots/comment.png)

## 运行

##### 前序准备：[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

#### 一、克隆项目
```bash
git clone https://github.com/uncleLian/mpvue-wechat-zhihu.git
```
#### 二、打开微信开发者工具导入小程序
```
项目目录：/dist 目录
AppID：选择测试小程序
项目名称：随意
```

#### 三、勾选以下选项
打开项目报错：请求URL不在合法域名列表中
```bash
[✔] 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
```
#### 四、真机体验
开发者工具上方点击预览按钮，构建出二维码，微信扫码体验

## 开发和发布
```bash
# 安装依赖
npm install
   
# 启动服务（开发调试）
npm run dev

# 构建正式发布的小程序代码
npm run build
```
##### 注：通过mpvue构建的小程序代码在 /dist 目录

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
