<template>
  <div>
    <app-header/>
    <div class="container">
      <Life/>
    </div>
  </div>
  <Footer/>
</template>

<script setup>
  import { reactive} from "vue"
  import Life from "./components/life/index.vue"
  import Footer from "@/components/header_footer/footer.vue"


</script>

<style>
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  .container {
    box-sizing: border-box;
    padding: 20px;
    min-height: 79vh;
  }
  div {
    color:rgb(34, 34, 134);
  }
</style>
