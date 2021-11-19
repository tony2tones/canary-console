import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Users from './Users.vue';
import Home from './Home.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './app.scss'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  { path: '/users/:teamId', component: Users },
  { path: '/', component: Home },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
}).$mount('#app')
