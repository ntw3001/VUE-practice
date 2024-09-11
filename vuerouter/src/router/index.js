import { createRouter, createWebHistory } from 'vue-router';
import Articles from '../components/articles/index.vue';
import Contact from '../components/contact/index.vue';
import Home from '../components/home.vue';
import Article from '../components/articles/article.vue';
import NotFound from "../components/404/404.vue";
import Notification from "../components/notification.vue";
import Login from "../components/login.vue";

const propProcessing = (route) => {
  return {
    bananas: route.path + " is a smelly place"
  }
}

const checkAuth = () => {
  const isAuth = true;
  if (!isAuth) return '/login'
}

const isAdmin = () => {
  const isAdmin = true;
  if (!isAdmin) return '/login'
}

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/articles', component: Articles,
        beforeEnter: [checkAuth, isAdmin]
    },
    { path: '/articles/:articleID', component: Article, props: propProcessing },
    { path: '/contact', components: {default: Contact, notify: Notification}, name: 'contact' },
    { path: '/', component: Home },
    { path: '/:404(.*)*', component: NotFound },
    { path: '/login', component: Login }
  ],
  linkActiveClass: 'active',
});

router.beforeEach((to, from)=>{
  console.log("Just checking some things friend");
  const isAuth = true;
  if(to.path === '/'){
    return true;
  } else {
    if (to.path !== '/login' & !isAuth) return '/login'
    if (to.path === '/login' & isAuth) return '/'
    return true
  }
})

export default router;
