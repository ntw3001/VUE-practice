<template>
  <h3>Progle is Playing</h3>
</template>

<script setup>
  import { onUnmounted, onActivated, onDeactivated } from "vue"

  onActivated(() => {
    console.log("Progle is activated")
  })

  onDeactivated(() => {
    console.log("Progle is deactivated")
  })
  
  onUnmounted(() => {
    console.log("Progle is unmounted")
  })
  </script>
