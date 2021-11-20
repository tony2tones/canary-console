import axios from 'axios';

const state = {
    deviceInfo: []
};

const getters = {
    deviceInfo: (state) => state.deviceInfo
};

const actions = {
    async fetchDevicesAndAlerts({ commit }) {
        const response  = await axios.get('https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json')
        console.log(response.data.device_list[0]);
        console.log(response.data.alerts[0]);

        commit('setDevices', response.data.device_list);
    }
};

const mutations = {
    setDevices: (state, deviceInfo) => (state.deviceInfo = deviceInfo)
};

export default {
    state,
    getters,
    actions,
    mutations
};