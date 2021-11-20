import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Devices from './components/Devices.vue';
import Alerts from './components/Alerts.vue';
import Home from './components/Home.vue';
import DevicePanel from './components/DevicePanel.vue';

import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './app.scss'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  { path: '/', component: Home },
  { path: '/devices', component: Devices },
  { path: '/devices/:node_id', component: DevicePanel },
  { path: '/alerts', component: Alerts },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  router: router,
  render: h => h(App),
}).$mount('#app')
