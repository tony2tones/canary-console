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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">key</th>
            <th scope="col">Description</th>
            <th scope="col">dst_host</th>
            <th scope="col">src_host</th>
            <th scope="col">Created on</th>
            <th scope="col">Node ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="alert in alerts" v-bind:key="alert.key">
            <th>{{ alert.key }}</th>
            <th>{{ alert.description }}</th>
            <th>{{ alert.dst_host }}</th>
            <th>{{ alert.src_host }}</th>
            <th>{{ alert.created }}</th>
            <th>{{ alert.node_id }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      consolData: [],
      alerts: [],
      device_list: [],
    };
  },
  created: function () {
    axios
      .get(
        "https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json"
      )
      .then((res) => {
        console.log(res);
        this.consolData = res.data;
        this.alerts = this.consolData.alerts;
        this.device_list = this.consolData.device_list;
        console.log("First pull through ", res.data);
      });
  },
};
</script>
<style scoped>
.container {
  justify-content: space-around;
}

.table-holder {
  flex-direction: column;
  justify-content: flex-end;
}
</style>