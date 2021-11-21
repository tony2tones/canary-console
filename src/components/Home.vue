<template>
  <div class="container">
    <h3>Devices overview</h3>
    <div class="devices">
      <div
        v-for="device in deviceInfo" v-bind:key="device.node_id" class="device">
        <div class="alert-counter">
          <p>{{ device.alerts.length }}</p>
        </div>
        <p>Node ID: {{ device.node_id }}</p>
        <hr />
        <p>Description: {{ device.description }}</p>
        <p>ip address: {{ device.ip_address }}</p>
        <p>Alerts: {{ device.alerts.length }}</p>
        <button @click="goToDevicePanel(device.node_id)">
          Device full view
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  watch: {
    $route(to, from) {},
  },
  methods: {
    ...mapActions(["fetchDevicesAndAlerts"]),
    goToDevicePanel(node_id) {
      let passed_di = String(node_id);
      this.$router.push({ path: `/devices/${passed_di}` });
    },
  },
  computed: mapGetters(["deviceInfo"]),
  created() {
    this.fetchDevicesAndAlerts();
  },
};
</script>

<style scoped>
.devices {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.device {
  border: 1px solid rgb(157, 212, 248);
  background: rgb(200, 207, 200);
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
  position: relative;
}

.alert-counter {
  position: absolute;
  
  color:white;
  font-size: 2rem;
  bottom: 75%;
  left:80%;
  border-radius: 1.5px;
}

.alert-counter > p {
  background: red;
  width: 3.5rem;
  height: 3rem;
  text-align: center;
  margin:1rem;
  margin-top:1rem;
}
</style>