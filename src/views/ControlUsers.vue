<template>
  <div class="my-container container__control-users">
    <h4>{{ dataPage.title }}</h4>
    <h2 class="page-title">{{ dataPage.namePage }}</h2>
    <tableUsers />
    <BtnAddUser style="margin-top: 1.433333rem" :dataPage="dataPage" />
  </div>
</template>

<script>
import dataPage from "../../json/page.json";
import tableUsers from "../components/controlUsers/tableUsers.vue";
import BtnAddUser from "../components/controlUsers/btnAddUser.vue";

export default {
  data() {
    return {
      dataPage,
    };
  },
  mounted() {},
  components: { dataPage, tableUsers, BtnAddUser },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container__control-users {
  padding-top: 2.03rem;
}
</style>
