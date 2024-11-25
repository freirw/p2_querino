import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/login", // Caminho para a tela de login
    name: "Login",
    component: Login,
  },
  {
    path: "/register", // Caminho para a tela de login
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard", // Caminho para o dashboard
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
