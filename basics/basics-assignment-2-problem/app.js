const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: ''
    }
  },
  methods: {
    displayAlert() {
      alert('Task 1 completed!');
    },
    displayUserInput(e) {
      this.userInput = e.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput; 
    } 
  }
});

app.mount('#assignment');