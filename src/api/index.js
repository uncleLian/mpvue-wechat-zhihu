import { request } from '@/utils/request'

// 最新消息
export function getLatestArticle() {
    let res = request.get('/4/news/latest')
    return res
}
// 过往消息
export function getBeforeArticle(date) {
    let res = request.get(`/4/news/before/${date}`)
    return res
}

// 主题列表
export function getThemes() {
    let res = request.get('/4/themes')
    return res
}
// 主题文章列表
export function getThemeArticle(themeId) {
    let res = request.get(`/4/theme/${themeId}`)
    return res
}
// 主题文章列表（更多）
export function getBeforeThemeArticle(themeId, lastId) {
    let res = request.get(`/4/theme/${themeId}/before/${lastId}`)
    return res
}

// 文章详情
export function getArticleDetail(id) {
    let res = request.get(`/4/news/${id}`)
    return res
}
// 文章额外信息（赞、评论）
export function getArticleExtra(id) {
    let res = request.get(`/4/story-extra/${id}`)
    return res
}
// 文章短评论
export function getShortComment(id) {
    let res = request.get(`/4/story/${id}/short-comments`)
    return res
}
// 文章短评论（更多）
export function getShortCommentMore(id, lastId) {
    let res = request.get(`/4/story/${id}/short-comments/before/${lastId}`)
    return res
}
