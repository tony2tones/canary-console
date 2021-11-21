import axios from 'axios';

const state = {
    deviceInfo: []
};

const getters = {
    deviceInfo: (state) => state.deviceInfo
};

const actions = {
    async fetchDevicesAndAlerts({ commit }) {
        const response = await axios.get('https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json')
        let newArr = [];
        // get some data stored to work with
        let alerts = response.data.alerts;
        let devices = response.data.device_list;
        // get a list of the devices, note the node_id as an identifier
        for (let i = 0; i < devices.length; i++) {
            let nodeCheck = devices[i].node_id;

            for (let j = 0; j < alerts.length; j++) {
                let idLink = alerts[j].node_id;
                if (idLink === nodeCheck) {
                    let newAlert = alerts.filter(alert => alert.node_id === devices[i].node_id);
                    newArr.push(newAlert);
                    devices[i]['alerts'] = newAlert;
                }
            }
        }
        commit('setDevices', devices);
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