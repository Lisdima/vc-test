<template>
  <v-btn depressed id="btn__add-user">
    {{ nameBtn }}
  </v-btn>
</template>

<script>
export default {
  props: {
    dataPage: Object,
  },
  data() {
    return {
      nameBtn: "",
    };
  },
  mounted() {
    /**
     * Находим в json объект с типом "button" и присваем btnData */
    const btnData = this.$props.dataPage.blocks.find(
      (item) => item.type === "button"
    );
    /**
     * Присваиваем значение кнопке nameBtn имя из объекта btnData
     */
    this.nameBtn = btnData.name;
  },
};
</script>

<style lang="scss" scoped>
#btn__add-user {
  min-width: auto;
  background: #3680ec;
  color: #ffffff;
  text-transform: none;
  letter-spacing: 0.033333rem;
  padding: 1.35rem;
  border-radius: 0.9rem;
  box-shadow: 0 0.33333rem 0.666666rem 0 #182a4e;
}
</style>
