// import axios from 'axios';

const state = {
    alerts: [
        {
            id:1,
            title: 'Alert one'
        },
        {
            id:2,
            title: 'Alert two'
        },
        {
            id:3,
            title: 'Alert three'
        },

    ]
};

const getters = {
    allAlerts: (state) => state.alerts
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};