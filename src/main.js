import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "feather-icons/dist/feather.min.js";
import "./style/style.scss";

export const bus = new Vue();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
