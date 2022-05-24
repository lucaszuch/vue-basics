const app = Vue.createApp({
 data() {
   return {
     enteredTask: '',
     tasks: [],
     displayList: true,
     buttonText: 'Hide'
   }
 },
 methods: {
   logTask() {
     console.log(this.tasks);
   },
   addTask() {
     this.tasks.push(this.enteredTask);
     this.enteredTask = '';
     this.logTask();
   },
   removeTask(index) {
     this.tasks.splice(index, 1);
     alert('Task removed!');
   },
   toggleList() {
     this.displayList = !this.displayList;
     if(this.displayList == true) {
       this.buttonText = 'Hide';
     } else {
       this.buttonText = 'Show';
     }
   }
 }
});

app.mount('#assignment');