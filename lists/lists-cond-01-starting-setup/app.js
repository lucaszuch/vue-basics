const app = Vue.createApp({
  data() {
    return { 
      enteredValue: '',
      goals: []
    };
  },
  methods: {
    displayGoals() {
      console.log(this.goals);
    },
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
      this.displayGoals();
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
      this.displayGoals();
    }
  }
});

app.mount('#user-goals');
