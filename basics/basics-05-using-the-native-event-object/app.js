const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullName: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }

      if(value < 0) {
        this.counter = 0;
      }
    }
    /*name(value) {
      if(value == '') {
        this.fullName = '';
      }
      this.fullName = value + ' ' + 'Zuchinalli';
    }*/
  },
  computed: {
    fullName() {
      if(this.name != '' || this.lastName != '') {
        return this.name + ' ' +  this.lastName;
      }
      return '';
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
