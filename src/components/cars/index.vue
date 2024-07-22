<template>
  <h1>It's cars bitchezz</h1>
  <hr/>
  <CarsList/>
</template>


<script setup>
  import CarsList from './list.vue'
  const props = defineProps(["cars"])
</script>
