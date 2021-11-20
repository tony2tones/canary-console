<template>
  <div class="container">
    <h3>Alerts</h3>
    <div class="alerts">
      <div v-for="alert in allAlerts" v-bind:key="alert.id" class="alert">
        {{ alert.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Alerts",
  computed: mapGetters(["allAlerts"]),
};
</script>

<style scoped>
</style>