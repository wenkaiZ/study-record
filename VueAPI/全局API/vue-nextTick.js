var vm = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        change: function(){
            // 修改数据
            vm.message = 'Hello Vue change'
            // DOM 还没有更新
            Vue.nextTick(function () {
            // DOM 更新了

            console.log("DOM updated ");
            })

            // 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
            Vue.nextTick()
            .then(function () {
                // DOM 更新了
                console.log("DOM updated again ");
            })
        }
    }
});

