var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    //计算属性缓存 vs 方法
    //计算属性会缓存，只有相关数据发生改变才会重新计算
    computed: {
      // 计算属性的 getter
      reversedMessageGetter: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      },

      set: function(value){
        this.message = value;
      }
    },
    //方法不会缓存结果，每次都重新计算
    methods: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
  })