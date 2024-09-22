import Vue from "vue";
import VueRouter from "vue-router";

import PageHome from "@/views/PageHome.vue";
import PageAbout from "@/views/PageAbout.vue";
import PageCustom from "@/views/PageCustom.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/about",
    component: PageAbout
  },
  {
    path: "/custom",
    component: PageCustom
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router;