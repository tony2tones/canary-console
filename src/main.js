import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Devices from './components/Devices.vue';
import Alerts from './components/Alerts.vue';
import Home from './components/Home.vue';
import DevicePanel from './components/DevicePanel.vue';

import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// tool tip
import VTooltip from 'v-tooltip'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './app.scss'

import VueMoment from 'vue-moment';


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VTooltip);

Vue.use(VueMoment);
// Date formatter
Vue.filter('formatDate', function(value) {
  console.log('time in seconds ', value);
    if (value) {
        return VueMoment(value).format('MM/DD/YYYY hh:mm')
    }
});

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
