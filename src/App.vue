<template>
  <div id="app">
    <h1>Canary Console</h1>
    <hr />
    <nav class="navBar">
    <router-link tag="li" active-class="active" to="/" exact >Home</router-link>
    <router-link tag="li" active-class="active" to="/devices" exact>Devices</router-link>
    <router-link tag="li" active-class="active" to="/Alerts" exact>Alerts</router-link>
    </nav>
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
  height: 100%;
  padding-bottom: 10px;
}

.container {
  max-width: 1100px;
  margin:auto;
  overflow: auto;
}

.navBar {
  display: flex;
  list-style: none;
}

.navBar:hover {
  cursor: pointer;
}

.navBar > li {
  padding-left: 20px;
}


.active {
  color: blue;
}
</style>