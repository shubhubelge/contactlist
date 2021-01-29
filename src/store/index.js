import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allfavourites:JSON.parse(localStorage.getItem('allfavourites')) || []
  },
  actions: {
    setFav({commit}, users){
      commit('set_favourites', users);
    },
  },
  mutations: {
    set_favourites(state, cdata){
      state.allfavourites = cdata;
      localStorage.setItem('allfavourites',  JSON.stringify(cdata));
  },
  },
  modules: {
  }
})
