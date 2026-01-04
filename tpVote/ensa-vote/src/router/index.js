import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/AuthForm.vue";
import Register from "../components/AuthForm.vue";
import Events from "../components/Events.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/events", component: Events }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
