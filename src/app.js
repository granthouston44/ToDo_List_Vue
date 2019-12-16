import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
  //we want to listen to everything thats inside
  //the app div
  el: "#app",
  //properties
  data:{
    items:[{name:"milk"}]
  }
});
});
