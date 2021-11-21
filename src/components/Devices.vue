<template>
  <div class="container">
    <div class="device">
      <h3>Listed devices</h3>
      Total devices: {{ device_list.length }}
    </div>
    <div class="devices">
      <div
        v-for="device in device_list"
        v-bind:key="device.node_id"
        class="device"
      >
        <h3>Device name: {{ device.name || "not found" }}</h3>
        <hr />
        <p>Node ID: {{ device.node_id || "not found" }}</p>
        <p>Description: {{ device.description || "not found" }}</p>
        <p>ip address: {{ device.ip_address || "not found" }}</p>
        <hr />
        <p>Additional information:</p>
        <p>Current settings: {{ device.current_settings || "not found" }}</p>
        <p>Device ID: {{ device.device_id || "not found" }}</p>
        <p>Device ID hash: {{ device.device_id_hash || "not found" }}</p>
        <p>
          Device online:
          {{ device.device_live ? "online" : "offline" || "not found" }}
        </p>
        <p>Device first seen: {{ device.first_seen_age || "not found" }}</p>
        <p>
          Device first seen printable:
          {{ device.first_seen_printable || "not found" }}
        </p>
        <p>Ghost: {{ device.ghost || "not found" }}</p>
        <p>
          Device heartbreat age: {{ device.last_heartbeat_age || "not found" }}
        </p>
        <p>
          Device heartbeat printable:
          {{ device.last_heartbeat_printable || "not found" }}
        </p>
        <p>Device uptime age: {{ device.update_age || "not found" }}</p>
        <p>Device: {{ device.ip_address || "not found" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Devices",
  methods: {
    ...mapActions(["fetchDevices"]),
  },
  computed: mapGetters(["device_list"]),
  created() {
    this.fetchDevices();
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
  background: rgb(200, 207, 200);
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  text-align: left;
  position: relative;
  cursor: pointer;
}
</style>