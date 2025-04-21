import Vue from 'vue';
import App from './App.vue';
import './styles.css';

import UI from 'pxd'

Vue.use(UI)

new Vue({
  el: '#root',
  render: (h) => h(App),
});
