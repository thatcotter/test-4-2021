import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./../node_modules/bulma/css/bulma.css";
import router from './router'
require("@/assets/style.scss");

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
