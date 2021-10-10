<template>
  <v-app>
    <Sider />
    <v-main>
      <ControlUsers />
    </v-main>
  </v-app>
</template>

<script>
import Sider from "../components/app/Sider.vue";
import ControlUsers from "../views/ControlUsers.vue";

export default {
  components: {
    Sider,
    ControlUsers,
  },
};
</script>
