import Vue from "vue";
import App from "./App.vue";

import store from "./store";
import router from "./router";
 
import "@/assets/scss/global.scss";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");