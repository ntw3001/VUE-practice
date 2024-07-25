<template>
  <h3>Framcos is Playing</h3>
</template>

<script setup>
  import { onUnmounted, onActivated, onDeactivated } from "vue"

  onActivated(() => {
    console.log("Framcos is activated")
  })

  onDeactivated(() => {
    console.log("Framcos is deactivated")
  })

  onUnmounted(() => {
    console.log("Framcos is unmounted")
  })
</script>
