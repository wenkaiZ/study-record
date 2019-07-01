Vue.component('todo-item', {
    template: '\
      <li>\
        <input type="checkbox" v-on:click="finishTask($event)" v-bind:value="task.done" v-model="task.done">\
        <input type="text" v-model="task.task" v-bind:disabled="!task.edit">\
        <button v-on:click="edit" >Edit</button>\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['task','todos'],
    methods: {
        finishTask: function(event){
            console.log(event.target.value);
            console.log(this.task.done);
            this.task.done = !this.task.done;
            localStorage.setItem("todos",JSON.stringify(this.todos));
        },
        edit: function(event){
            event.target.innerHTML=="Save"?event.target.innerHTML="Edit":event.target.innerHTML="Save";
            this.task.edit = !this.task.edit;
            localStorage.setItem("todos",JSON.stringify(this.todos));
            console.log(this.task.edit);
            console.log(this.task.task);
        }
    }
  })

var app = new Vue({ 
    el: '#todo-list',
    data: {
        newTodoText: '',
        todos:[],
        nextTodoId: 1
    },
    methods:{
        addNewTodo: function(){
            this.todos.push({
                id: this.nextTodoId++,
                task: this.newTodoText,
                done: false,
                edit: false
              });
              this.newTodoText = '';
              localStorage.setItem("todos",JSON.stringify(this.todos));
              localStorage.setItem("id",JSON.stringify(this.nextTodoId))
              console.log(this.todos)
        }
    },
    mounted(){
        let list = JSON.parse(localStorage.getItem('todos'));
        let currentId = JSON.parse(localStorage.getItem('id'));
        if(list){
            this.todos = list;
        }
        if(currentId){
            this.nextTodoId = currentId;
        }
        
    }
});