<template>
  <div class="container">
    <div class="alert title">
      <h3>Listed alerts</h3>
      Total alerts: {{ allAlerts.length }}
    </div>
    <div class="alerts">
      <div v-for="alert in allAlerts" v-bind:key="alert.node_id" class="alert">
        <h4>Node ID: {{ alert.node_id || "not found" }}</h4>
        <hr />
        <p>Key: {{ alert.key || "not found" }}</p>
        <p>Description: {{ alert.description || "not found" }}</p>
        <p>dst_host: {{ alert.dst_host || "not found" }}</p>
        <p>src_host: {{ alert.src_host || "not found" }}</p>
        <p>Created date:</p>
        <p>{{ alert.created_printable || "not found" }}</p>
        <p>created: {{ alert.created_age || "not found" }}</p>
        <hr />
        <p>created time: {{ alert.created || "not found" }}</p>
        <p>created age: {{ alert.created_age || "not found" }}</p>
        <p>created in seconds:{{ alert.created_age_seconds || "not found" }}</p>
        <p>dst_port: {{ alert.dst_port || "not found" }}</p>
        <p>Event count: {{ alert.events_count || "not found" }}</p>
        <p>ip Address: {{ alert.ip_address || "not found" }}</p>
        <p>Ippers: {{ alert.ippers || "not found" }}</p>
        <p>local time: {{ alert.local_time || "not found" }}</p>
        <p>Logic type: {{ alert.logtype || "not found" }}</p>
        <p>Mac address: {{ alert.mac_address || "not found" }}</p>
        <p>Netmask: {{ alert.netmask || "not found" }}</p>
        <p>notified: {{ alert.notified || "not found" }}</p>
        <p>src_host reverse: {{ alert.src_host_reverse || "not found" }}</p>
        <p>src_port{{ alert.src_port || "not found" }}</p>
        <p>Update: {{ alert.updated || "not found" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Alerts",
  components: {},
  methods: {
    ...mapActions(["fetchAlerts"]),
  },
  computed: mapGetters(["allAlerts"]),
  created() {
    this.fetchAlerts();
  },
};
</script>

<style scoped>
.alerts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.6rem;
}

.alert {
  background: rgb(200, 207, 200);
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
  position: relative;
  cursor: pointer;
  overflow: auto;
}

.title {
  width: auto;
}
</style>