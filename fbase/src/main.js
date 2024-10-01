import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/header.vue'
import { AUTH } from './firebase/configs'
import { onAuthStateChanged } from 'firebase/auth'


let app;

onAuthStateChanged(AUTH, () => {
  if (!app) {
    app = createApp(App)
    app.component('app-header', Header)
    app.use(router)
    app.mount('#app')
  }
})

// const app = createApp(App)

// app.component('app-header', Header)
// app.use(router)
// app.mount('#app')
