<template>
  <div class="container">
    <h3>Alerts</h3>
    <div class="alerts">
      <div v-for="alert in allAlerts" v-bind:key="alert.node_id" class="alert">
        {{ alert.description }}
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.alert {
    border: 1px solid rgb(157, 212, 248);
    background: rgb(200, 207, 200);
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
</style>