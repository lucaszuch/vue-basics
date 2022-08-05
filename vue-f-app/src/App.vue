<template>
  <section>
    <h2>Friends List</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'

export default {
  name: 'App',
  components: {
    FriendContact
  }
}
</script>