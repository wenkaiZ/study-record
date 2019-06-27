var app0 = new Vue({
  el: '#app0',
    data: {
      seen: true
    }
  })
var app = new Vue({
  el: '#app',
    data: {
      type: 'A',
      seen: true,
      loginType: 'username'
    },
    methods: {
      change: function(){
        if(this.loginType === 'username')
          this.loginType = 'admin';
        else
          this.loginType = 'username';
      }
    }

  })

  var app1 = new Vue({
    el: '#app1',
      data: {
        type: 'A',
        seen: true,
        loginType: 'username'
      },
      methods: {
        change: function(){
          if(this.loginType === 'username')
            this.loginType = 'admin';
          else
            this.loginType = 'username';
        }
      }
  
    })

    var app2 = new Vue({
      el: '#app2',
        data: {
          type: 'A',
          seen: true,
          loginType: 'username'
        },
        methods: {
          change: function(){
            if(this.loginType === 'username')
              this.loginType = 'admin';
            else
              this.loginType = 'username';
          }
        }
    
      })