import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const Landing = () => import("../pages/Landing.vue");
const Login = () => import("../pages/Login.vue");
const Posts = () => import("../pages/Posts.vue");
const Users = () => import("../pages/Users.vue");
const UserProfile = () => import("../pages/UserProfile.vue");

// Error Pages
const NotFound = () => import("../pages/NotFound.vue");
const Error406 = () => import("../pages/Error406.vue");

function protectedRoutes(to, from, next) {
  return store.getters.isLoggedIn ? next() : next({ name: "Login" });
}

function guestOnlyRoutes(to, from, next) {
  console.log(store.getters.isLoggedIn);
  return store.getters.isLoggedIn ? next({ name: "Error406" }) : next();
}

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/home", redirect: { name: "Landing" } },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: guestOnlyRoutes,
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    beforeEnter: protectedRoutes,
  },
  { path: "/posts", name: "Posts", component: Posts },
  {
    path: "/users",
    name: "Users",
    component: Users,
    beforeEnter: protectedRoutes,
  },
  {
    path: "/406",
    name: "Error406",
    component: Error406,
    beforeEnter: protectedRoutes,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});

Router.beforeEach(async () => store.state.isUserRequested);

export default Router;
