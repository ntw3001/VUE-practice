import { createRouter, createWebHistory } from 'vue-router';
import Articles from '../components/articles/index.vue';
import Contact from '../components/contact/index.vue';
import Home from '../components/home.vue';
import Article from '../components/articles/article.vue';
import NotFound from "../components/404/404.vue";
import Notification from "../components/notification.vue";

const propProcessing = (route) => {
  return {
    bananas: route.path + " smells"
  }
}

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/articles', component: Articles },
    { path: '/articles/:articleID', component: Article, props: propProcessing },
    { path: '/contact', components: {default: Contact, notify: Notification}, name: 'contact' },
    { path: '/', component: Home },
    { path: '/:404(.*)*', component: NotFound }
  ],
  linkActiveClass: 'active',
});

export default router;
