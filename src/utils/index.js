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
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/figure/g, 'div').replace(/figcaption/g, 'blockquote').replace(/<blockquote/g, '<blockquote class="info-text"')
    content = content.replace(/<a/g, '<a class="link-text"')
    content = content.replace(/<img/g, '<img class="content-image avatar"')
    return content
}
// 格式化时间
export function formatTime(dateTimeStamp) {
    // linux时间戳 -> js时间戳
    dateTimeStamp = dateTimeStamp * 1000
    var result
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var month = day * 30
    var now = new Date().getTime()
    // 时间差
    var diffValue = now - dateTimeStamp
    if (diffValue < 0) { return }
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute

    // 数值补0方法
    var zero = function (value) {
        if (value < 10) {
            return '0' + value
        }
        return value
    }

    if (monthC > 12) {
        var date = new Date(dateTimeStamp)
        result = date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日'
        console.log('result', result)
    } else if (monthC >= 1) {
        result = parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
        result = parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
        result = parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
        result = parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
        result = parseInt(minC) + '分钟前'
    } else {
        result = '刚刚'
    }
    return result
}
