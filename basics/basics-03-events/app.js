const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    removeCounter(num) {
      if(this.counter == 0) {
        this.counter = 0;
      } else {
        this.counter = this.counter - num;
      }
    }
  }
});

app.mount('#events');
