<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(*)' : '' }}</h2>
    <button @click="toggleFavorite">Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteContact">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(val) {
      //   return val == 1 || val == 0;
      // }
    }
  },
  emits: ['toggle-favorite', 'delete-contact'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
      // if(this.friendIsFavorite == 1) {
      //   this.friendIsFavorite = 0;
      // } else {
      //   this.friendIsFavorite = 1;
      // }
    },
    deleteContact() {
      this.$emit('delete-contact', this.id);
    }
  }
};
</script>