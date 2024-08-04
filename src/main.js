import { createApp } from 'vue';
import vueApp from "./vueApp.vue";

import Header from "@/components/header_footer/header.vue";
import Footer from "@/components/header_footer/footer.vue";

const app = createApp(vueApp);

app.component("app-header", Header)
app.component("app-footer", Footer)

app.directive("cooldir", {
  created(el) {
    console.log("created")
    console.log(el.parentNode)
  },

  beforeMount(el, binding, vnode) {

    el.style.fontSize = binding.modifiers.big ? "50px" : "20px"

    el.innerHTML = binding.value

    if (binding.arg === "red"){
      el.style.color = "red"
    } else {
      el.style.color = "blue"
    }

    console.log("beforeMount")
    console.log(el.parentNode)
  },

  mounted(el) {
    console.log("mounted")
    console.log(el.parentNode)
  },

  beforeUpdate(el, binding) {
    console.log("beforeUpdate")
    console.log(el.parentNode)
    el.innerHTML = binding.value
  },

  updated(el) {
    console.log("updated")
    console.log(el.parentNode)
  }
})
app.mount("#app")
