import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import { store } from "./store";

import "@/assets/css/tailwind.css";
import vuetify from "./plugins/vuetify";

Vue.use(Vuex);
Vue.use(router);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  vuetify,
  router,
}).$mount("#app");
