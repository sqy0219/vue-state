import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,   //挂载的store
  render: h => h(App)
}).$mount('#app')
