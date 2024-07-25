import { createApp } from 'vue';
import vueApp from "./vueApp.vue";

import Header from "@/components/header_footer/header.vue";
import Footer from "@/components/header_footer/footer.vue";

const app = createApp(vueApp);

app.component("app-header", Header)
app.component("app-footer", Footer)
app.mount("#app")
