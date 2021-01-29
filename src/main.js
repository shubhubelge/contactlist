import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
// Vue.use(VueRouter)
// const router = new VueRouter({routes, mode: 'history'});
// const router = new VueRouter({routes});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
