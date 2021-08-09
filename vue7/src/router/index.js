import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Jobs from "../components/Jobs.vue";
import JobDetails from "../components/JobDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/jobs", component: Jobs },
  { path: "/job-details/:id", name: "jobDetails", component: JobDetails },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
