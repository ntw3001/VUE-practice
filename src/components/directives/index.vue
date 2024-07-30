<template>
<div v-cooldir:red.big="textToRender"></div>
</template>

<script setup>
  import { ref } from "vue";
    const textToRender = ref("Fuck! What a silly word that is")

  </script>
