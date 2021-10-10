<template>
  <v-menu id="menu" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <more-horizontal-icon
        size="1.7x"
        class="icon icon-action"
        v-bind="attrs"
        v-on="on"
      ></more-horizontal-icon>
    </template>

    <v-list id="action-users" class="main-background">
      <v-list-item-group>
        <v-list-item v-for="item in actionWithUser" :key="item.id">
          <v-list-item-title class="gr">
            <span class="action-btn" v-if="item.text === 'Удалить'"
              >{{ item.text }} {{ user }}</span
            >
            <span v-else class="action-btn">{{ item.text }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import dataPage from "../../../json/page.json";
import { MoreHorizontalIcon } from "vue-feather-icons";

export default {
  props: {
    user: String,
  },
  data() {
    return {
      dataPage,
      actionWithUser: [],
    };
  },
  components: {
    MoreHorizontalIcon,
  },
  mounted() {
    /** Находим в json таблицу по параметру type и передаем в table */
    const table = this.dataPage.blocks.find((item) => item.type === "table");
    /** Из объекта table берем массив данных с действиями для юзера и передаем значения в actionWithUser */
    this.actionWithUser = table.actionsWithUsers;
  },
};
</script>

<style lang="scss" scoped>
#action-users {
  width: 11.6666rem;
  border: 1px solid #3c3d42;
  border-radius: 0.33333rem;
  margin-right: 3rem;
  .v-list-item {
    padding: 0.566666rem 0 0.566666rem 1rem;
  }
}
.icon-action {
  vertical-align: text-bottom;
}
.action-btn {
  font-size: 0.83333rem;
  letter-spacing: 0.023333rem;
  font-weight: 700;
}
.v-menu__content {
  box-shadow: none;
}
</style>
