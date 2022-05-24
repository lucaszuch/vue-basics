const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      result: 'Not there yet!'
    }
  },
  watch: {
    counter(value) {
      if(value >= 37) {
        this.result = 'Too much!'
      }
    },
    result(value) {
      if(value != 'Not there yet!') {
        setTimeout(() => {
          this.result = 'Not there yet!';
          this.counter = 0;
        }, 5000);
      }
    }
  },
  methods: {
    add(number) {
      if(number > 0) {
        return this.counter = this.counter + number;
      }
    }
  }
});

app.mount('#assignment');