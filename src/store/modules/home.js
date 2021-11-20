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
        console.log('Alerts', alerts[0]);
        console.log('devices length', devices[1]);
        // get a list of the devices, note the node_id as an identifier
        // let deviceProfile = devices.map((device) => {
        for (let i = 0; i < devices.length; i++) {
            let nodeCheck = devices[i].node_id;

            for (let j = 0; j < alerts.length; j++) {
                let idLink = alerts[j].node_id;
                if (idLink === nodeCheck) {
// gotta check if I already have alerts and if I do I'll need to Add it not replace it

                    devices[i]['alerts'] = [alerts[j]];
                }

            }
        }
        console.log('sorted results', devices);
        // console.log('sorted results', devices[0]['alerts'] = {alerts: [ {alert: 'one'}]});
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