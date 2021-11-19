<template>
  <div class="container">
    <h1>I'm Alerts SUCKA</h1>

    <div v-for="alert in alerts" v-bind:key="alert[0].key">
      <p>{{ alert[0].description }}</p>
      <p>{{ alert[0].description }}</p>
      <p>{{ alert[0].dst_host }}</p>
      <p>{{ alert[0].src_host }}</p>
      <p>{{ alert[0].created }}</p>
      <p>{{ alert[0].node_id }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      alerts: [],
    };
  },
  created: function () {
    axios
      .get(
        "https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json"
      )
      .then((res) => {
        this.alerts = res.data;
        console.log("First pull through ", this.alerts.alerts);
      });
  },
};
</script>
