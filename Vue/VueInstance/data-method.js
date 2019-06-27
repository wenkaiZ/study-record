/*当一个 Vue 实例被创建时，
它将 data 对象中的所有的属性加入到 Vue 的响应式系统中。
当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。*/

// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    el: '#vm',
    data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3

/*当这些数据改变时，视图会进行重渲染。
值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的。
也就是说如果你添加一个新的属性，比如：*/ 
vm.b = 'hi';
/*那么对 b 的改动将不会触发任何视图的更新。
如果你知道你会在晚些时候需要一个属性，
但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如： */
data =  {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null,
    foo: 'bar'
  }

  var obj = {
    foo: 'bar'
  }
  
  Object.freeze(obj)
  
  new Vue({
    el: '#app',
    data: data
  })