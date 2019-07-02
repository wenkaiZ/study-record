<template>
    <li>
        <input type="checkbox" v-on:click="finishTask($event)" v-bind:value="task.done" v-model="task.done">
        <input type="text" v-model="task.task" v-bind:disabled="!task.edit">
        <button v-on:click="edit" >Edit</button>
        <button v-on:click="$emit('remove')">Remove</button>
      </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    task: Object,
    todos: Array
  },
  methods: {
        finishTask: function(event){
            window.console.log(event.target.value);
            window.console.log(this.task.done);
            this.task.done = !this.task.done;
            localStorage.setItem("todos",JSON.stringify(this.todos));
        },
        edit: function(event){
            event.target.innerHTML=="Save"?event.target.innerHTML="Edit":event.target.innerHTML="Save";
            this.task.edit = !this.task.edit;
            localStorage.setItem("todos",JSON.stringify(this.todos));
            window.console.log(this.task.edit);
            window.console.log(this.task.task);
        }
    }
}
</script>