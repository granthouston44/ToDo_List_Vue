import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

  el: "#app",
  //properties
  data:{

    tasks:[
      {task:"Homework", priority:"High", done: false},
      {task:"Aldi", priority:"High", done: true }
  ],
  newTask: "",
  newPriority: "",
},
methods:{
  saveNewTask: function(){
    let taskObject = {task: this.newTask, priority: this.newPriority, done: false}
    this.tasks.push(taskObject);
    this.newTask = ""
  },
  taskDone: function(index){
    this.tasks[index].done = true;
  }
}

});
});
