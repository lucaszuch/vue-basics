const app = Vue.createApp({
	data() {
		return {
			courseGoals: 'Learn Vue',
			vueLink : 'https://vuejs.org',
            stringA : 'Rollin\' in the deep',
            stringB : 'Easy on me',
            newString : '<h3 style="color: #FFF;">THAT\'S IT!</h3>'
		};
	},
    methods: {
        randomNumber() {
            const random = Math.random();
            return random;
        },
        returnAdele() {
            const random = this.randomNumber()
            if(random > .5) {
                return this.stringA;
            }
            return this.stringB;
        }
    }
});

app.mount('#user-goal');