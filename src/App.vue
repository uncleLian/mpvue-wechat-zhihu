<script>
export default {
}
</script>

<style lang="stylus">
/* iconfont */
[class*=' my-icon-'], [class^=my-icon-] {
    font-family: 'iconfont';
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
page {
    height: 100%;
}
.list-bottomLoad {
    flex-center();
    height: 50px;
    color: $infoText;
    font-size: 14px;
    .error {
        color: $errorColor;
    }
}
</style>
