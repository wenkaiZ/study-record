// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })

  Vue.directive('pin', {
    bind: function (el, binding, vnode) {
      el.style.position = 'fixed'
      el.style.top = binding.value + 'px'
    }
  })

var vm = new Vue({ 
    el: '#baseexample',
    data: {
        message: 'Hello Vue!'
    },
    directives: {
        focusb: {
            // 指令的定义
            inserted: function (el) {
            el.focus()
            }
        }
    }
});

Vue.directive('pin', {
    bind: function (el, binding, vnode) {
      el.style.position = 'fixed'
      var s = (binding.arg == 'left' ? 'left' : 'top')
      el.style[s] = binding.value + 'px'
    }
  })
  
  new Vue({
    el: '#dynamicexample',
    data: function () {
      return {
        direction: 'left'
      }
    }
  })