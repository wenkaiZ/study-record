Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })
  
  var app = new Vue({
    el: '#app'
  })

  // 定义一个名为 button-counter 的新组件
  /* 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，
  例如 data、computed、watch、methods 以及生命周期钩子等。
  仅有的例外是像 el 这样根实例特有的选项。 */

  //一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#components-demo' })