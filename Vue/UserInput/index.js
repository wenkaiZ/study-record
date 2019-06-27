var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      }
    }
  })

  new Vue({
    el: '#example-3',
    data: {
      checkedNames: []
    }
  })

  new Vue({
    el: '#example-4',
    data: {
      picked: '',
      a: '自定义'
    }
  })

  new Vue({
    el: '#example-5',
    data: {
      selected: ''
    }
  })

  new Vue({
    el: '#example-6',
    data: {
      selected: []
    }
  })

  new Vue({
    el: '#example-7',
    data: {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  })