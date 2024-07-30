<template>
  <div>
    <app-header/>
      <div class="container">
        <Directives/>
      </div>
    <app-footer/>
  </div>
</template>

<script setup>
  import Directives from '@/components/directives/index.vue';
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
