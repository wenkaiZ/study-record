var vm = new Vue({ 
    el: '#app',
    data: {
        items: ['a', 'b', 'c']
    },
    methods: {
        changeA: function(){
            // 修改数据
            vm.items[0] = 'changByIndex' // 不是响应性的
            vm.items.length = 4 // 不是响应性的
        },
        changeB: function(){
            // Vue.set
            Vue.set(vm.items, 1, 'y')
        },
        changeC: function(){
            // Array.prototype.splice
            vm.items.splice(0, 1, 'x')
        },
        changeD: function(){
            // 你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
            vm.$set(vm.items, 2, 'z')
        },
    }
});