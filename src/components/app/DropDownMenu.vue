<template>
  <v-menu id="menu" left offset-y>
    <template v-slot:activator="{ on, attrs }">
      <chevron-down-icon
        v-bind="attrs"
        v-on="on"
        size="1.5x"
        class="icon icon-dropdown"
      ></chevron-down-icon>
    </template>

    <v-list id="drop-down__menu" class="main-background">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="item in dropDownMenuTitles" :key="item.id">
          <v-list-item-title class="drop-down__menu-title gr">
            <settings-icon
              v-if="item.title === 'Основные настройки'"
              size="1.2x"
              class="icon"
              style="margin-left: 0.1rem;"
            ></settings-icon>
            <menu-icon
              v-if="item.title === 'Настроить меню'"
              size="1.5x"
              class="icon"
            ></menu-icon>
            <alert-triangle-icon
              v-if="item.title === 'Сообщить о проблеме'"
              size="1.2x"
              class="icon"
              style="margin-left: 0.1rem;"
            ></alert-triangle-icon>
            <span
              :class="[
                item.title === 'Настроить меню'
                  ? 'reserve-title'
                  : 'main-title',
              ]"
              >{{ item.title }}</span
            ></v-list-item-title
          >
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import sider from "../../../json/sider.json";
import {
  ChevronDownIcon,
  MenuIcon,
  SettingsIcon,
  AlertTriangleIcon,
  LayersIcon,
} from "vue-feather-icons";

export default {
  data() {
    return {
      selectedItem: 1,
      sider,
      dropDownMenuTitles: [],
    };
  },
  components: {
    ChevronDownIcon,
    MenuIcon,
    SettingsIcon,
    AlertTriangleIcon,
    LayersIcon,
  },
  mounted() {
    /** Найходим объект с типом "drop-down menu" и присваиваем его listTitles*/
    const listTitles = this.sider.blocks.find(
      (item) => item.type === "drop-down menu"
    );
    /** Из объекта listTitles берем массив данных с названиями ссылок и передаем значения в dropDownMenuTitles*/
    this.dropDownMenuTitles = listTitles.data;
  },
};
</script>

<style lang="scss" scoped>
#drop-down__menu {
  border: 1px solid #3c3d42;
  border-radius: 0.33333rem;
  width: 18rem;
  margin: 0.65rem 0 0 0.6rem;
  .v-list-item--active {
    background: #23252a;
  }
  .drop-down__menu-title {
    font-size: 0.83333rem;
    font-weight: 700;
    letter-spacing: 0.02666666rem;
    .main-title {
      margin-left: 0.7rem;
      vertical-align: top;
    }
    .reserve-title {
      vertical-align: super;
      margin-left: 0.55rem;
    }
  }
  .v-list-item {
    padding: 0.4rem 0.8rem 0.333333rem;
  }
}
.icon-dropdown {
  float: right;
  margin-top: 0.3rem;
  cursor: pointer;
}
.v-menu__content {
  box-shadow: none;
}
</style>
