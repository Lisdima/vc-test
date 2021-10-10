<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "./layout/Layout.vue";

export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
#app {
  background: #17191c;
  color: #bbbcc1;
}
</style>
