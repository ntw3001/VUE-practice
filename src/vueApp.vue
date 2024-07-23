<template>
  <div>
    <app-header/>
    <div class="container">
      <Cars/>
      <hr/>
      <CarBrands>
        <ul>
          <li>Yes</li>
          <li>Yess</li>
          <li>Yesss</li>
        </ul>
      </CarBrands>
    </div>
  </div>
</template>

<script setup>
  import { reactive, provide } from "vue"
  import Cars from "@/components/cars/index.vue"
  import CarBrands from "@/components/cars/brands.vue"

  const cars = reactive([
    {model:"Batman Car", brand: "DC"},
    {model:"Jamaican Car", brand: "Jamaican"},
    {model:"Royal Racer", brand: "Mushroom Kingdom"},
    {model:"Compact Pussycat", brand: "Hanna-Barbera"},
    {model:"Mystery Machine", brand: "Hanna-Barbera"}
  ])

  const updateCar = () => {
    cars[0].model = "Batmobile"
  }

  provide ("cars", {cars, updateCar})

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
