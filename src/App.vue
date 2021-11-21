<template>
  <div id="app">
    <h1>Canary Console</h1>
    <hr />
    <nav class="navBar">
      <router-link tag="li" active-class="active" to="/" exact
        >Home</router-link
      >
      <router-link tag="li" active-class="active" to="/devices" exact
        >Devices</router-link
      >
      <router-link tag="li" active-class="active" to="/Alerts" exact
        >Alerts</router-link
      >
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
  margin: 0;
  background: #24272e;
  height: 100vh;
  padding-bottom: 10px;
}

#app h1 {
  padding:4rem;
  padding-bottom:1rem;
  color:ivory;

}

.container {
  background: #24272e;
  max-width: 1100px;
  margin: auto;
  overflow: auto;
}

.navBar {
  color: antiquewhite;
  display: flex;
  list-style: none;
}

.navBar:hover {
  cursor: pointer;
}

.navBar > li {
  margin: 1rem;
  padding-left: 24px;
  width: 6rem;
  height: 2rem;
  border-radius: 5.5px;
  padding-top: 3px;
}

.active {
  background: ivory;
  font-weight: 600;
  color: rgb(31, 31, 39);
}
</style>