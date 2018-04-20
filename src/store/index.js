import Vue from 'vue'
import Vuex from 'vuex'
import * as graphql from '../graphql/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card',
    cards: [],
  },
  mutations: {
    // changeImageUrl(state, newImageUrl) {
    //   state.imageUrl = newImageUrl
    // },
    changeCards(state, payload) {
      state.cards = payload.cards
    },
  },
  actions: {
    // fetchNewImage({ commit }) {
    //   const query = '{ cards { imageUrl } }'
    //   graphqlQuery(query)
    //     .then((data) => commit('changeImageUrl', data.imageUrl))
    // },
    fetchNewCards({ commit }) {
      graphql.fetchCards()
        .then((data) => commit('changeCards', data))
    }
  },
})
