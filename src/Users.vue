<template>
  <div>
    <h1>Users spot overview</h1>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="gohome">Go Home</button>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      alert(to.params.teamId);
      alert(from.params.teamId);
    },
  },
  createed() {
    alert(this.$route.params.teamId);
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>
