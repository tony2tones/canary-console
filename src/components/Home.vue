<template>
  <div class="container">
    <h3>Devices overview</h3>
    <div class="devices">
      <div
        v-for="device in deviceInfo"
        v-bind:key="device.node_id"
        class="device"
      >
        <p>Node ID: {{ device.node_id }}</p>
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
</style>