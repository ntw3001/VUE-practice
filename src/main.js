import { createApp } from 'vue';
import vueApp from "./vueApp.vue";

import Header from "@/components/header_footer/header.vue";
import Footer from "@/components/header_footer/footer.vue";

const app = createApp(vueApp);

app.component("app-header", Header)
app.component("app-footer", Footer)
app.directive("cooldir", {
  beforeMount(el, binding, vnode) {
    console.log(binding.arg)
    console.log(binding.modifiers)

    el.style.fontSize = binding.modifiers.big ? "50px" : "20px"

    el.innerHTML = binding.value

    if (binding.arg === "red"){
      el.style.color = "red"
    } else {
      el.style.color = "blue"
    }

  }
})
app.mount("#app")
