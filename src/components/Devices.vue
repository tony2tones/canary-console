<template>
  <div class="container">
    <div class="table-holder">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Node ID</th>
            <th scope="col">Description</th>
            <th scope="col">ip Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="device in device_list" v-bind:key="device.node_id">
            <th>{{ device.node_id }}</th>
            <th>{{ device.description }}</th>
            <th>{{ device.ip_address }}</th>
          </tr>
        </tbody>
      </table>
      <button @click="gohome">Go Home</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
   data() {
    return {
      consolData: [],
      device_list: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json"
      )
      .then((res) => {
        console.log(res);
        this.consolData = res.data;
        this.device_list = this.consolData.device_list;
        console.log("Set device_list here ", this.device_list);
      });
  },
  // methods: {
  //   gohome() {
  //     this.$router.push("/");
  //   },
  // },
};
</script>
