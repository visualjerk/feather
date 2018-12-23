// eslint-disable-next-line
import Vue from 'vue'
import Components from './components'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Components)

new Vue({
  render: h => h(App)
}).$mount('#app')
