// Support function
/**
 * Generates a random number that calculates the damaged caused by player or monster.
 * @param {number} min - Minimum attack value.
 * @param {number} max - Maximum attack value.
 * @returns - Random number (attack value).
 */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Mounting component
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0,
      gameWinner: null,
      logMessages: []
    }
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.rounds = 0;
      this.gameWinner = null;
      this.logMessages = [];
    },
    monsterAttack() {
      // Calculate the monster's attack value and execute it.
      // Check if playerHealt isn't under min.
      const monsterAttackValue = generateRandomNumber(8, 14);
      if(this.playerHealth - monsterAttackValue <= 0) {
        this.playerHealth = 0;
      } else {
        this.playerHealth = this.playerHealth - monsterAttackValue;
      }

      // Log the action.
      this.addLogMessage('monster', 'damage', monsterAttackValue);
    },
    playerAttack(min, max) {
      // Update the number of rounds.
      this.rounds++;

      // Calculate the attack values and execute it.
      // Check if monsterHealth isn't under min.
      const playerAttackValue = generateRandomNumber(min, max);
      if(this.monsterHealth - playerAttackValue <= 0) {
        this.monsterHealth = 0;
      } else {
        this.monsterHealth = this.monsterHealth - playerAttackValue;
      }

      // Log the action.
      this.addLogMessage('player', 'damage', playerAttackValue);

      // The monster always react to our attacks.
      this.monsterAttack();
    },
    playerHealing(min, max) {
      // Update the number of rounds.
      this.rounds++;

      // Calculate the healing and execute it.
      // Check if the player heal is not over the max.
      const playerHealingValue = generateRandomNumber(min, max);
      if(this.playerHealth + playerHealingValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + playerHealingValue;
      }

      // Log the action.
      this.addLogMessage('player', 'heal', playerHealingValue);
      
      // After healing, the monster will attack us.
      this.monsterAttack();
    },
    surrender() {
      this.gameWinner = 'monster';
    },
    addLogMessage(npc, action, value) {
      this.logMessages.unshift({
        actionBy: npc,
        actionType: action,
        actionValue: value
      });
    }
  },
  computed: {
    monsterBar() {
      if(this.monsterHealth < 30) {
        return { 
          width: this.monsterHealth + '%',
          backgroundColor: '#e74c3c'
        };
      } else if(this.monsterHealth < 70) {
      return { 
        width: this.monsterHealth + '%',
        backgroundColor: '#f1c40f'
      };
      } else {
        return { 
          width: this.monsterHealth + '%'
        };
      }  
    },
    playerBar() {
      if(this.playerHealth < 30) {
        return { 
          width: this.playerHealth + '%',
          backgroundColor: '#e74c3c'
        };
      } else if(this.playerHealth < 70) {
        return { 
          width: this.playerHealth + '%',
          backgroundColor: '#f1c40f'
        };
      } else {
        return { width: this.playerHealth + '%'};
      }  
    },
    canUseSpecialAttack() {
      return this.rounds % 3 !== 0;
    }
  },
  watch: {
    playerHealth(value) {
      if(value <= 0 && this.monsterHealth <= 0) {
        this.gameWinner = 'draw';
      } else if(value <= 0) {
        this.gameWinner = 'monster';
      }
    },
    monsterHealth(value) {
      if(value <= 0 && this.playerHealth <= 0) {
        this.gameWinner = 'draw';
      } else if(value <= 0) {
        this.gameWinner = 'player';
      }
    }
  }
});

app.mount('#game');