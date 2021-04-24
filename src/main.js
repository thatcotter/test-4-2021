import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./../node_modules/bulma/css/bulma.css";
require("@/assets/style.scss");

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
