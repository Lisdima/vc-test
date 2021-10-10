<template>
  <v-btn id="btn-home">
    {{ nameButton }}
  </v-btn>
</template>

<script>
import sider from "../../../json/sider.json";

export default {
  data() {
    return {
      sider,
      nameButton: "",
    };
  },
  mounted() {
    /**
     * Присваиваем значение кнопке nameButton имя из json
     */
    this.nameButton = sider.blocks[0].data.text;
  },
};
</script>

<style lang="scss" scoped>
#btn-home {
  font-family: "Montserrat", sans-serif;
  background-color: #000000;
  color: #dededf;
  font-size: 0.4166rem;
  letter-spacing: 0.0333333rem;
  height: auto;
  min-width: unset;
  padding: 0.6rem 0.1666rem;
  border-radius: 0.333rem;
  transition: color 0.4s solid;
}
#btn-home:hover {
  color: white;
}
</style>
