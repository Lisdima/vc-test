<template>
  <v-navigation-drawer
    id="sider"
    width="20rem"
    app
    permanent
  >
    <div id="header-menu">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="menu-title">
            <buttonGoHome />
            <span style="margin-left: 0.44rem;"> {{ sider.title }} </span>
            <dropDown />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>

    <v-divider style="bordercolor: #1c1e21;"></v-divider>

    <v-list id="list" dense nav>
      <v-list-item-group v-model="selectedItem">
        <div class="group" v-for="item in list" :key="item.id">
          <v-subheader class="group-title gr-1" v-if="item.title.length > 0">{{
            item.title
          }}</v-subheader>
          <v-list-item
            v-for="child in item.children"
            :key="child.id"
            class="group__item"
          >
            <layers-icon
              v-if="child.title === 'Библиотека компонентов'"
              size="1.3x"
              class="icon icon-component"
            ></layers-icon>
            <div
              :class="[
                item.title.length > 0 ? 'group-subtitle gr' : 'none-title',
              ]"
            >
              {{ child.title }}
            </div>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import sider from "../../../json/sider.json";
import buttonGoHome from "./BtnGoHome.vue";
import dropDown from "./DropDownMenu.vue";
import { LayersIcon } from "vue-feather-icons";

export default {
  data() {
    return {
      right: null,
      sider,
      list: [],
      selectedItem: 6,
    };
  },
  components: {
    buttonGoHome,
    dropDown,
    LayersIcon,
  },
  async mounted() {
    const list = this.sider.blocks.find((item) => item.type === "list");
    this.list = list.data;
  },
  methods: {},
};
</script>

<style lang="scss">
#sider {
  background: #17191c;
  color: #bbbcc1;
  .menu-title {
    font-weight: 600 !important;
    color: #dededf;
    span {
      vertical-align: middle;
      word-spacing: 0.03333rem;
    }
  }
}
#sider::-webkit-scrollbar {
  width: 0;
}
#header-menu {
  .v-list-item {
    padding: 0rem 1.12rem 0 1.32rem !important;
  }
  .v-list-item__content {
    padding: 1rem 0 0.9rem !important;
  }
}
#list {
  padding: 1.46rem 0 0 !important;
  line-height: 1.5;
  .v-item-group {
    position: unset;
  }
  .group {
    margin-top: 1.713333rem;
  }
  .group-single {
    margin-bottom: 2.1rem;
  }
  .group:first-child {
    margin: 0;
  }
  .group:last-child {
    position: absolute;
    bottom: 0;
    @media (max-height: 500px) {
      position: relative;
    }
  }
  .group-title {
    font-size: 0.8333rem;
    font-weight: bold !important;
    letter-spacing: 0.1rem !important;
    padding: 0 1.32rem;
    height: auto;
    margin-bottom: 0.4rem;
  }
  .group-subtitle {
    font-size: 1rem !important;
    font-weight: 400 !important;
    white-space: normal;
    cursor: pointer;
    letter-spacing: 0.1px;
    padding: 0.313333rem 1.32rem;
  }
  .none-title {
    margin-bottom: 0.33rem;
    line-height: 1.5;
    color: #77787e !important;
    letter-spacing: 0.1px;
    cursor: pointer;
    padding: 0 1.32rem;
  }
  .group__item {
    padding: 0 !important;
  }
  .group:last-child .group__item:last-child {
    display: flex;
    align-items: flex-start;
  }
  .group:last-child .none-title {
    padding-left: 0.7rem;
    font-weight: 600;
    font-size: 0.93333rem;
    letter-spacing: 0.00666rem;
    margin-bottom: 1.1rem;
  }
  .icon-component {
    margin-left: 1.2rem;
  }
  .v-list-item,
  .v-list-item--link {
    margin: 0 !important;
    min-height: unset;
  }
  .v-list-item--active {
    background: #23252a;
  }
}
.theme--light.v-navigation-drawer .v-divider {
  border-color: #1c1e21 !important;
}
.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating)
  .v-navigation-drawer__border {
  background-color: #1c1e21 !important;
}
</style>
