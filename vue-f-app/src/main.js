import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

// Buold the app.
const app = createApp(App);

// Access components.
app.component('friend-content', FriendContact);

// Mount.
app.mount('#app');