import axios from 'axios';

const state = {
    alerts: []
};

const getters = {
    allAlerts: (state) => state.alerts
};

const actions = {
    async fetchAlerts({ commit }) {
        const response = await axios.get('https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json')
        commit('setAlerts', response.data.alerts);
    },
};

const mutations = {
    setAlerts: (state, alerts) => (state.alerts = alerts)
};

export default {
    state,
    getters,
    actions,
    mutations
};