;(function(Vue) {
    const dataArray = [
        {
            title:'吃的什么饭',
            subTitle:'火锅'
        }
    ];
    new Vue({
        el:'#app',
        data: {
            dataArray,
            titleArray = ['aaa','bbb','ccc'],
        },
        methods: {

        },
    })
})(Vue)