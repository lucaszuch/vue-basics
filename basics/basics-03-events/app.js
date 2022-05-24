const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: '',
      message: ''
    };
  },
  methods: {
    setName(e, lastName) {
      this.userName = e.target.value + ' ' + lastName;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    removeCounter(num) {
      if(this.counter == 0) {
        this.counter = 0;
      } else {
        this.counter = this.counter - num;
      }
    },
    setMessage(ev) {
      this.message = ev.target.value;
    },
    submitForm() {
      alert(this.message);
    }
  }
});

app.mount('#events');
