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
  newTask: ""
},
methods:{
  taskDone: function(index){
    this.tasks[index].done = true;
  }
}

});
});
