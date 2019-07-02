<template>
    <div id="todo-list">
        <form v-on:submit.prevent="addNewTodo">
            <label for="new-todo">Add a todo</label>
            <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="New Task"
            >
            <button>Add</button>
        </form>
        <ul v-if="todos.length!==0">
            <li
                is="ToDoItem"
                v-bind:todos="todos"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:task="todo"
                v-on:remove="removeItem(index)"
                ></li>
        </ul>
    </div>
</template>
<script>
import ToDoItem from './ToDoItem.vue'

export default {
  name: 'ToDoList',
  data: function(){
            return{newTodoText: '',
            todos:[],
            nextTodoId: 1
        }
    },
  components:{
      ToDoItem
  },

    methods:{
        removeItem: function(index){
            this.todos.splice(index, 1);
            localStorage.setItem("todos",JSON.stringify(this.todos));
        },
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
              window.console.log(this.todos)
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
}
</script>
