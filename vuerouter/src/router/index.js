import { createRouter, createWebHistory } from 'vue-router';
import Articles from "@/components/articles/index.vue";
import Contact from "@/components/contact/index.vue";
import Home from "@/components/home/index.vue";

const router = createRouter ({
  history: createWebHistory(),
  routes: [
    { path: '/articles', component: Articles },
    { path: '/contact', component: Contact },4
    { path: '/', component: Home }
  ]
});

export default router;
