import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allfavourites:[]
  },
  actions: {
    setFav({commit}, users){
      commit('set_favourites', users);
    },
  },
  mutations: {
    set_favourites(state, cdata){
      state.allfavourites = cdata;
  },
  },
  modules: {
  }
})
