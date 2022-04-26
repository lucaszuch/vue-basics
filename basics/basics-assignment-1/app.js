// Mounts the Vue component
const app = Vue.createApp({
  data() {
    return {
      name: 'Lucas',
      lastName: 'Zuchinalli',
      age: 30,
      imageLink: 'https://grilloliving.com/wp-content/uploads/2022/03/Grillo-Living-FC-inside_1200.jpg'
    }
  },
  methods: {
    calculateAge() {
      const futureAge = this.age + 5;
      return futureAge;
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
});

app.mount('#assignment');