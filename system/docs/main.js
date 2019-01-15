// eslint-disable-next-line
import Vue from 'vue'
import Components from './components'
import App from './App.vue'
import Themer from '@@/plugins/themer'

Vue.config.productionTip = false
Vue.use(Components)
Vue.use(Themer)

new Vue({
  render: h => h(App)
}).$mount('#app')
