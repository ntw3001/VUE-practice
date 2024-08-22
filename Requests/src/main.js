import { createApp } from 'vue'
import App from './App.vue'; // Correct path to App.vue
import Header from './components/header/Header.vue'; // Correct path to Header.vue
import Loader from './components/utils/Loader.vue'; // Correct path to Loader.vue

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader',Loader);
app.mount('#app')
