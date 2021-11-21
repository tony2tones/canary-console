<template>
  <div id="single-device">
    <div class="device">
      <h1>Device panel overview</h1>
      <hr />
      <p>Device node ID: {{ id }}</p>
      <p>Device name: {{ deviceSelect[0].name || "not found" }}</p>
      <p>Description: {{ deviceSelect[0].description || "not found" }}</p>
      <p>IP address: {{ deviceSelect[0].ip_address || "not found" }}</p>

      <hr />
      <p>Device name: {{ deviceSelect[0].name || "not found" }}</p>
      <!-- <p>Device name: {{ deviceSelect[0].setting['device.desc']}} </p> -->
      <p>Ghost: {{ deviceSelect[0].ghost || "not found" }}</p>
      <p>
        Device status:
        {{ deviceSelect[0].device_live ? "online" : "offline" || "not found" }}
      </p>
     
    </div>
    <div class="backdrop">
      <h3 class="alert header"> Total alerts: {{ alerts.length }}</h3>
      <div class="alerts">
        <div v-for="alert in alerts" v-bind:key="alert.node_id" class="alert">
          <p v-tooltip="'You have ' + ' new messages.'">
            {{ alert.key }}
          </p>
          <p>Description: {{ alert.description || "not found" }}</p>
          <p>dst_host: {{ alert.dst_host || "not found" }}</p>
          <p>created: {{ alert.created || "not found" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      id: this.$route.params.node_id,
      devicesPanel: [null],
      alerts: [null],
      deviceSelect: [],
    };
  },
  methods: {},
  beforeCreate() {
    axios
      .get(
        "https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json"
      )
      .then((res) => {
        this.devicesPanel.alerts = res.data.alerts;
        this.devicesPanel.device_list = res.data.device_list;

        this.deviceSelect = this.devicesPanel.device_list.filter(
          (device) => device.node_id === this.$route.params.node_id
        );
        this.alerts = this.devicesPanel.alerts.filter(
          (alert) => alert.node_id === this.$route.params.node_id
        );
        let formattedTime = "";
        // this.alerts.map(alert => alert.created =  moment(alert.created).format("DD/MM/YYYY hh:mm"));
        console.log(this.alerts);
      });
  },
};
</script>

<style scoped>
.device {
  border: 1px solid rgb(157, 212, 248);
  background: rgb(200, 207, 200);
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  text-align: left;
  position: relative;
}

.alerts {
  background: #24272e;
  margin: 1rem;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;
}
.alert.header {
  display: inline-block;
  margin: 1rem;
  text-align: center;
}
.alert {
  border: 1px solid rgb(157, 212, 248);
  background: rgb(200, 207, 200);
  padding: 1rem;
  width: 390px;
  border-radius: 5px;
  text-align: left;
  position: relative;
  overflow: auto;
}
</style>