<template>
  <div id="app">
    <h1>Lets go somewhere wnaker</h1>
    <hr />
    <router-link to="/">Home</router-link>
    <router-link to="/users/11">Users 11</router-link>
    <router-link to="/users/9">Users 9</router-link>
    <hr />
    <router-view></router-view>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default ({
  components: {
    HelloWorld
  },
  data() {
    return {}
    // https://www.youtube.com/watch?v=7iDGJolHFmU&ab_channel=TheNetNinja
  },
})
</script>

<style scoped>

</style>