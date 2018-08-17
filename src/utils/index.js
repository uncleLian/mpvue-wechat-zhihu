// 日期(20180816 => 2018/08/16)
export function formatDate(date) {
    let year = date.slice(0, 4)
    let mon = date.slice(4, 6)
    let day = date.slice(6, 8)
    return `${year}/${mon}/${day}`
}
// 格式化HTML
export function formatHTML(html) {
    let content = html
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/figure/g, 'div').replace(/figcaption/g, 'blockquote')
    content = content.replace(/<blockquote/g, '<blockquote class="info-text"')
    content = content.replace(/<a/g, '<a class="link-text"')
    return content
}
