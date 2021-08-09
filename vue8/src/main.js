import { createApp } from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import Router from "./router";
import Store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App)
  .use(Router)
  .use(Store)
  // .use(BootstrapVue)
  // .use(IconsPlugin)
  .use(VueSweetalert2)
  .mount("#app");
