<template>
  <div id="search-user">
    <input v-model="search" type="text" placeholder="Поиск" />
    <search-icon size="1x" class="icon icon-search"></search-icon>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";

export default {
  data() {
    return {
      search: "",
    };
  },
  watch: {
    /**
     * Отслеживает изменение search и передает значение в tableUsers
     */
    search() {
      this.$emit("searchOnTable", this.search);
    },
  },
  components: { SearchIcon },
};
</script>

<style lang="scss" scoped>
#search-user {
  position: relative;
  input {
    position: relative;
    font-size: 0.9666666rem;
    border: 0.06666rem solid #2d2e32;
    border-radius: 1rem;
    letter-spacing: -0.01666rem;
    height: 1.7rem;
    width: 13.6rem;
    padding: 0 1.75rem;
    color: #585a5f;
  }
  input:focus {
    outline: none;
  }
  .icon-search {
    position: absolute;
    left: 0;
    margin-left: 0.47rem;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
