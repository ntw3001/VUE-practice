<template>
  <div>
    <app-header/>
    <div class="container">
      <Cars
        :cars="cars"
      />
    </div>
  </div>
</template>

<script setup>
  import { reactive } from "vue"
  import Cars from "@/components/cars/index.vue"

  const cars = reactive([
    {model:"Batman Car", brand: "DC"},
    {model:"Jamaican Car", brand: "Jamaican"},
    {model:"Royal Racer", brand: "Mushroom Kingdom"},
    {model:"Compact Pussycat", brand: "Hanna-Barbera"},
    {model:"Mystery Machine", brand: "Hanna-Barbera"}
  ])
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
