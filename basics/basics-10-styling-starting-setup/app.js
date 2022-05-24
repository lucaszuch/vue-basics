const app = Vue.createApp({
  data() {
    return {
      divASelected: false,
      divBSelected: false,
      divCSelected: false
    }
  },
  computed: {
    activeDivA() {
      return {active : this.divASelected}
    },
    activeDivB() {
      return {active : this.divBSelected}
    },
    activeDivC() {
      return {active : this.divCSelected}
    }
  },
  methods: {
    select(div) {
      switch(div) {
        case 'A':
          this.divASelected = !this.divASelected;
          break;
        case 'B':
          this.divBSelected = !this.divBSelected;
          break;
        case 'C':
          this.divCSelected = !this.divCSelected;
          break;
        default:
          this.divASelected = this.divASelected;
          this.divBSelected = this.divASelected;
          this.divCSelected = this.divASelected;
          break;
      }
    }
  }
});

app.mount('#styling');