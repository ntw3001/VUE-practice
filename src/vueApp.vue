<template>
  <app-header/>
    <div class="container">
      <!-- <Framcos v-if="activeComponent === Framcos"/>
      <Progle v-if="activeComponent === Progle"/> -->
      <button @click="activeComponent = Framcos">Framcos</button>
      <button @click="activeComponent = Progle">Progle</button>
      <component :is="activeComponent"/>
    </div>
  <app-footer/>
</template>

<script setup>
import { ref, shallowRef } from "vue"
import Framcos from "./components/players/Framcos.vue"
import Progle from "./components/players/Progle.vue"

const activeComponent = shallowRef("Framcos")
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
