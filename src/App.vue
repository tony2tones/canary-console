<template>
  <div id="app">
    <h1>Lets go somewhere wnaker</h1>
    <hr />
    <router-link to="/">Home</router-link>
    <router-link to="/devices">Devices</router-link>
    <router-link to="/Alerts">Alerts</router-link>
    <hr />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Alerts from "./components/Alerts.vue";
// import Devices from "./components/Devices.vue";

export default {
  name: "app",
  components: {
    // Alerts,
    // Devices
  },
  
    // https://www.youtube.com/watch?v=7iDGJolHFmU&ab_channel=TheNetNinja
  };
</script>

<style scoped>
#app {
  background: #b3c6e4;
}

.container {
  max-width: 1100px;
  margin:auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>