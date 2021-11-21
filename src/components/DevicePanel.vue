<template>
  <div id="single-device">
    <div class="device">
      <h1>Device panel for {{ $route.params.node_id }}</h1>
      <p>{{ devicesPanel.device_list }}</p>
    </div>
    <p>{{ alerts }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.node_id,
      devicesPanel: [],
      alerts: [],
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
        console.log(
          "Alerts Panel ",
          (this.alerts = this.devicesPanel.alerts.filter(
            (alert) => alert.node_id === this.$route.params.node_id
          ))
        );
        let alertDetails = this.devicesPanel;
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