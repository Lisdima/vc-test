import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import "@mdi/font/css/materialdesignicons.min.css";

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi", //'mdiSvg', 'md', 'fa', 'fa4', 'faSvg'
  },
};

export default new Vuetify(opts);
