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
export default {
  name: "app",
};
</script>

<style scoped>
#app {
  margin: 0;
  background: #24272e;
  height: 100vh;
  padding-bottom: 10px;
  overflow: auto;
}

#app h1 {
  padding: 4rem;
  padding-bottom: 1rem;
  color: ivory;
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
  padding-left: 3rem;
  list-style: none;
}

.navBar > li {
  margin: 1rem;
  padding-left: 24px;
  width: 6rem;
  height: 2rem;
  border-radius: 5.5px;
  padding-top: 3px;
  cursor: pointer;
}
.navBar > li:hover {
  background: rgb(71, 71, 70);
  color: ivory;
}

.active {
  background: ivory;
  font-weight: 600;
  color: rgb(31, 31, 39);
}
</style>