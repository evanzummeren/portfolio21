import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Fill from "@/views/Fill.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/fill",
    name: "Fill",
    component: Fill,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;