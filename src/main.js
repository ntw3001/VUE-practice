import { createApp } from 'vue';
import vueApp from "./vueApp.vue";

import Header from "@/components/header_footer/header.vue";

const app = createApp(vueApp);

app.component("app-header", Header)
app.mount("#app")
