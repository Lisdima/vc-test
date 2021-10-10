<template>
  <div id="control-users">
    <v-card-title class="table-title" style="color: #909198;">
      {{ nameTable }}
      <v-spacer></v-spacer>
      <searchUser @searchOnTable="currentTable" />
    </v-card-title>
    <v-simple-table id="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th
              v-for="(head, index) in tableHeaders"
              :key="index"
              class="table__header"
            >
              <list-icon
                v-if="head.text === 'ID'"
                size="1.5x"
                class="icon icon__table-header"
              ></list-icon>
              <user-icon
                v-if="head.text === 'Имя'"
                size="1.5x"
                class="icon icon__table-header"
              ></user-icon>
              <at-sign-icon
                v-if="head.text === 'Email'"
                size="1.5x"
                class="icon icon__table-header"
              ></at-sign-icon>
              <info-icon
                v-if="head.text === 'Статус'"
                size="1.5x"
                class="icon icon__table-header"
              ></info-icon>
              <disc-icon
                v-if="head.text === 'Действия'"
                size="1.5x"
                class="icon icon__table-header"
              ></disc-icon>
              <span class="header-name">{{ head.text }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filterDataUsers" :key="index">
            <td class="table__body-item item-id">
              <span class="id">{{ user.id }}</span>
            </td>
            <td class="table__body-item item-name">
              <span>{{ user.name }}</span>
            </td>
            <td class="table__body-item item-email">
              <span>{{ user.email }}</span>
            </td>
            <td class="table__body-item item-status">
              <check-icon size="1x" class="icon icon-check"></check-icon>
              <span>{{ user.status }}</span>
            </td>
            <td class="table__body-item">
              <span style="margin-right: 0.3333rem;"
                ><actionBtn :user="user.name"
              /></span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import dataPage from "../../../json/page.json";
import actionBtn from "./btnActionUser.vue";
import searchUser from "./searchUser.vue";
import {
  ListIcon,
  UserIcon,
  AtSignIcon,
  InfoIcon,
  DiscIcon,
  CheckIcon,
} from "vue-feather-icons";

export default {
  data() {
    return {
      search: "",
      dataPage,
      tableHeaders: [],
      nameTable: "",
      dataUsers: [],
    };
  },
  mounted() {
    const table = this.dataPage.blocks.find((item) => item.type === "table");
    this.tableHeaders = table.headers;
    this.nameTable = table.name;
    this.dataUsers = table.users;
  },
  components: {
    dataPage,
    actionBtn,
    searchUser,
    ListIcon,
    UserIcon,
    InfoIcon,
    AtSignIcon,
    DiscIcon,
    CheckIcon,
  },
  methods: {
    /**
     * Метод, который срабатывает при изменение value в строке поиска
     * @param {string} search - вводимое значение
     */
    currentTable(search) {
      this.search = search;
    },
  },
  computed: {
    /**
     * Вычисляемое св-во, которое фильтрует таблицу по введенному значения
     * @return { array } dataUsers - если инпут пустой показывает всю таблицу, иначе проверяет каждого юзера по id, name, email по совпадение с введенным значением
     */
    filterDataUsers() {
      if (
        this.dataUsers !== null &&
        this.dataUsers !== undefined &&
        this.search !== null &&
        this.search !== undefined
      ) {
        let search = this.search && this.search.toLowerCase();
        return this.search === ""
          ? this.dataUsers
          : this.dataUsers.filter(
              (user) =>
                user.name.toLowerCase().includes(search) ||
                user.id.includes(search) ||
                user.email.toLowerCase().includes(search)
            );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#control-users {
  .table-title {
    color: rgb(144, 145, 152);
    padding: 0;
    margin: 1.566666rem 0 0.33333rem;
    font-size: 1rem;
    letter-spacing: 0.001666rem;
  }
  .header-name {
    vertical-align: top;
    font-size: 0.93333rem;
    margin-left: 0.166666rem;
  }
  .icon__table-header {
    margin-top: 0.13333rem;
  }
  .icon-check {
    background: linear-gradient(
      0deg,
      rgba(0, 177, 0, 1) 0%,
      rgba(0, 193, 5, 1) 50%,
      rgba(84, 216, 97, 1) 100%
    );
    border-radius: 0.2rem;
    font-weight: 700;
    border: 1px solid #097218;
    font-size: 1.1rem;
    color: #ffffff !important;
    vertical-align: text-bottom;
  }
}
#table {
  background: #17191c;
  color: #8d8e95;
  .table__header {
    color: #585a5f;
    border-bottom: thin solid #3c3d42;
    border-top: thin solid #3c3d42;
    border-right: thin solid #3c3d42;
    border-width: 0.06666rem;
    padding: 0.55rem 0 0.35rem 0.53rem;
  }
  .table__header:last-child {
    border-right: none;
  }
  .table__body-item {
    border-top: unset;
  }
  .table__body-item:last-child {
    text-align: center;
    width: 6.1rem;
  }
  .item-id {
    width: 4.333333rem;
  }
  .item-name {
    width: 16.1rem;
  }
  .item-email {
    width: 24.9rem;
  }
  .item-status {
    width: 13.3333rem;
    span {
      vertical-align: top;
    }
  }
  tr:hover {
    background: unset;
  }
  td {
    letter-spacing: 0.03rem;
    height: 2.4rem;
    padding-left: 0.6rem;
    border-bottom: thin solid #3c3d42;
    border-right: thin solid #3c3d42;
    border-width: 0.06666rem;
    box-sizing: content-box;
  }
  td:last-child {
    border-right: none;
  }
  .id {
    color: #2369c0;
    border-bottom: 1.5px dashed #2369c0;
  }
}
</style>
