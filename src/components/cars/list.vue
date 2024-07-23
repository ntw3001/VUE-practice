<template>
  <div>
    <ul>
      <li v-for="car in cars" :key="car.model">
        <span>{{ car.brand }}</span> {{ car.model }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from "vue"

const { cars, updateCar } = inject("cars")

</script>
