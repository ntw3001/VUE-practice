<template>
  <h3>Progle is Playing</h3>
    <Teleport to="#czech">
      <Modal/>
    </Teleport>
</template>

<script setup>
  import { onUnmounted, onActivated, onDeactivated } from "vue"
  import Modal from "@/components/utils/modal.vue"

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
