<template>
  <div class="container">
    <h3>Alerts</h3>
    <div class="alerts">
      <div v-for="alert in allAlerts" v-bind:key="alert.node_id" class="alert">
        <p>Key: {{ alert.key }}</p>
        <p>Description: {{ alert.description }}</p>
        <p>dst_host: {{ alert.dst_host }}</p>
        <p>src_host: {{ alert.src_host }}</p>
        <p>Created date:</p>
        <p>{{ alert.created_printable }}</p>
        <p>created: {{ alert.created_age }}</p>
        <hr />
        <p>created time: {{ alert.created }}</p>
        <p>created age: {{ alert.created_age }}</p>
        <p>created in seconds:{{ alert.created_age_seconds }}</p>
        <p>dst_port: {{ alert.dst_port }}</p>
        <p>Event count: {{ alert.events_count }}</p>
        <p>ip Address: {{ alert.ip_address }}</p>
        <p>Ippers: {{ alert.ippers }}</p>
        <p>local time: {{ alert.local_time }}</p>
        <p>Logic type: {{ alert.logtype }}</p>
        <p>Mac address: {{ alert.mac_address }}</p>
        <p>Netmask: {{ alert.netmask }}</p>
        <p>notified: {{ alert.notified }}</p>
        <p>src_host reverse: {{ alert.src_host_reverse }}</p>
        <p>src_port{{ alert.src_port }}</p>
        <p>Update: {{ alert.updated }}</p>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Alerts",
  methods: {
      ...mapActions(['fetchAlerts'])
  },
  computed: mapGetters(["allAlerts"]),
  created() {
      this.fetchAlerts();
  }
};
</script>

<style scoped>
.alerts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.6rem;
}

.alert {
    border: 1px solid rgb(157, 212, 248);
    background: rgb(200, 207, 200);
    padding: 1rem;
    width:390px;
    border-radius: 5px;
    text-align: left;
    position: relative;
    cursor: pointer;
    overflow: auto;
}
</style>