<template>
  <div>
    <app-header/>
    <div class="container">
      Look! Look!
    </div>
    <Footer/>
  </div>
</template>

<script setup>
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
    min-height: 84vh;
    font-size: 30px;
  }
  div {
    color:rgb(34, 34, 134);
  }
</style>
