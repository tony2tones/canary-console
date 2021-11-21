<template>
  <div id="single-device">
    <div class="device">
      <h1>Device panel overview</h1>
      <p>Device node ID: {{ id }}</p>

      <!-- <p>Description: {{ devicesPanel.device_list.description }}</p>
      <p v-bind:key="devicesPanel.device_list.node_id">
        IP address: {{ devicesPanel.device_list[0].ip_address }}
      </p> -->
      <p>IP address: {{ devicesPanel.device_list[0].ip_address }}</p>

      <!-- <div class="container"> -->
        <!-- <div class="alerts"> -->
          <div v-for="alert in alerts" v-bind:key="alert.node_id" class="alert">
            <p>{{ alert.key }}</p>
            <p>{{ alert.description }}</p>
            <p>{{ alert.dst_host }}</p>
            <p>{{ alert.creted }}</p>
            <p>{{ alert.node_id }}</p>
          </div>
        <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.node_id,
      devicesPanel: [null],
      alerts: [null],
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
        console.log(
          "device Panel ",
          this.devicesPanel.device_list.filter(
            (device) => device.node_id === this.$route.params.node_id
          )
        );
        "Alerts Panel ",
          (this.alerts = this.devicesPanel.alerts.filter(
            (alert) => alert.node_id === this.$route.params.node_id
          ));
        console.log("alerts", this.alerts);
      });
  },
};
</script>

<style scoped>
.device {
  border: 1px solid rgb(157, 212, 248);
  background: rgb(200, 207, 200);
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
  position: relative;
}
</style>