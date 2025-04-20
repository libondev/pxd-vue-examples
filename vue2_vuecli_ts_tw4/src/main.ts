import Vue from 'vue'
import App from './App.vue'

import UI from 'pxd'

import './styles.css'

Vue.use(UI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
