import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import routes from "./routers/index";
import store from "./store/index";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

const opts = {
  theme: {
    dark: false,
    light: {
      primary: colors.purple.darken1,
      secondary: colors.grey.darken1,
      accent: colors.shades.black,
      error: colors.red.accent3,
    },
  },
};

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  router: new VueRouter({
    mode: "history",
    routes,
  }),
  store: new Vuex.Store(store),
  vuetify: new Vuetify(opts),
  render: (h) => h(App),
}).$mount("#app");
