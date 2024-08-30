import { createRouter, createWebHistory } from 'vue-router';
import Articles from '../components/articles/index.vue';
import Contact from '../components/contact/index.vue';
import Home from '../components/home.vue';

const router = createRouter ({
  history: createWebHistory(),
  routes: [
    { path: '/articles', component: Articles },
    { path: '/contact', component: Contact },
    { path: '/', component: Home }
  ]
});

export default router;
