Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })
  
  new Vue({
      el: "#app",
      data: {
          message: "filter"
      },
    // ...
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
      }
  })
  //当全局过滤器和局部过滤器重名时，会采用局部过滤器。