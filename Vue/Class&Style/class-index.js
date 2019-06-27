var app = new Vue({ 
    el: '#app',
    data: {
        isActive: true,
        hasError: false
      }
});
//绑定的数据对象不必内联在模板
var app = new Vue({ 
    el: '#app2',
    data: {
        classObject: {
          active: true,
          'text-danger': false
        }
      }
});
//也可以绑定返回对象的计算属性
var app = new Vue({ 
    el: '#app3',
    data: {
        isActive: true,
        error: null
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
});

//数组语法
var app = new Vue({ 
  el: '#app4',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
});
