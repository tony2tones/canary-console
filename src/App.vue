<template>
  <div id="app">
    <h1>Lets go somewhere wnaker</h1>
    <hr />
    <router-link to="/">Home</router-link>
    <router-link to="/devices">Devices</router-link>
    <router-link to="/Alerts">Alerts</router-link>
    <hr />
    <div class="container">
      <Alerts />
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import Alerts from "./components/Alerts.vue";

export default {
  name: "app",
  components: {
    Alerts,
  },
  
    // https://www.youtube.com/watch?v=7iDGJolHFmU&ab_channel=TheNetNinja
  };
</script>

<style>
body {
  background: #d9e0eb;
}

.container {
  max-width: 1100px;
  margin:auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>