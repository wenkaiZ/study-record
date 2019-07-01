/*只要在原生的 JavaScript 中可以轻松完成的操作，
Vue 的渲染函数就不会提供专有的替代方法。
比如，在模板中使用的 v-if 和 v-for,
这些都可以在渲染函数中用 JavaScript 的 if/else 和 map 来重写：*/
var componentA = {
    props: ['items'],
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
            return createElement('li', item.text)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    }
}

/*v-model
渲染函数中没有与 v-model 的直接对应——你必须自己实现相应的逻辑： */
var componentB = {
    props: ['value'],
    render: function (createElement) {
        var self = this
        return createElement('input', {
            domProps: {
                value: self.value
            },
            on: {
                input: function (event) {
                    self.$emit('input', event.target.value)
                    console.log(event.target.value)
                    console.log("this is value: "+self.value)
                }
            }
        })
    },
}
var app = new Vue({
    el: '#app',
    data: {
        value : "123okk",
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
    },
    components: {
        'component-a' : componentA,
        'component-b' : componentB
    }
    
  });