var vm = new Vue({
    el: '#app',
    data: {
      message: '123'
    }
  })
  vm.message = 'new message' // 更改数据
  console.log(vm.$el.textContent === 'new message') // false
  Vue.nextTick(function () {
    vm.$el.textContent === 'new message' // true
  })

  Vue.component('example', {
    template: `<div>
    <span>{{ message }}</span> 
    <button @click = "updateMessage">change</button>
    </div>`,
    data: function () {
      return {
        message: '未更新'
      }
    },
    methods: {
      updateMessage: function () {
        this.message = '已更新'
        console.log(this.$el.textContent) // => '未更新'
        this.$nextTick(function () {
          console.log(this.$el.textContent) // => '已更新'
        })
      }
    }
  })

  new Vue({
      el:"#example"
  })