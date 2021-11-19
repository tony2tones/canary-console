<template>
  <h1>I'm Home SUCKA</h1>
 
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    fetch(
      "https://thinkst-frontend-resources.s3-eu-west-1.amazonaws.com/incidents/data.json"
    )
      .then((res) => res.json())
      .then((data) => (console.log(data)))
    //   console.log('received data ', data)
    //   console.log('received data ', this.data)
      .catch((err) => console.log(err.message));
  },
};
</script>
