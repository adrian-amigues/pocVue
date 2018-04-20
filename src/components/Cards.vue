<template>
  <div id="cards">
    <h1>Here are some cards</h1>
    <button id="getNewCardsButton" v-on:click="fetchNewCards">get new cards</button>
    <div id="cardPlaceholder">
      <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"/>
      <img v-for="image in images" :key="image" v-bind:src="image"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { get } from 'lodash'

export default {
  name: 'Cards',
  data() {
    return {}
  },
  computed: {
    imageUrl() {
      return this.$store.state.imageUrl;
    },
    images() {
      // const cards = get(this.$store.state, 'cards', [])
      const cards = this.$store.state.cards
      const img = this.$store.state.imageUrl
      return cards.slice(0, 5)
        .map(card => card.imageUrl)
    },
  },
  methods: {
    ...mapActions([
      'fetchNewCards',
    ]),
  },
  created() {
    this.fetchNewCards()
  },
}
</script>
