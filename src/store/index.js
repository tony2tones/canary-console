import Vuex from 'vuex';
import Vue from 'vue';
import Alerts from './modules/alerts';
import Devices from './modules/devices';
import Home from './modules/home';

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules : {
        Alerts,
        Devices,
        Home
    }
});