import axios from 'axios';

const state = {
    device_list: []
};

const getters = {
    device_list: (state) => state.device_list
};

const actions = {
    async fetchDevices({ commit }) {
        const response  = await axios.get('https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json')
        commit('setDevices', response.data.device_list);
    }
};

const mutations = {
    setDevices: (state, device_list) => (state.device_list = device_list)
};

export default {
    state,
    getters,
    actions,
    mutations
};