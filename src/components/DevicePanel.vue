<template>
  <div id="single-device">
    <h1>Device panel</h1>
    <p>{{ $route.params.node_id }}</p>
    <p>Hello</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:[],
  watch: {
    '$route' (to, from) {

    }
  },
  data() {
    return {
      id: this.$route.params.node_id,
      devicePanel: {},
    };
  },
};
</script>

<style>
</style>