<template>
  <div v-cooldir:red.big="textToRender"></div>
  <button @click="textToRender = 'Don\'t use such language'">
    Update
  </button>
</template>

<script setup>
  import { ref } from "vue";
    const textToRender = ref("Fuck! What a silly word that is")

  </script>
