<template>
  <div v-cooldir:red.big="textToRender"></div>
  <div v-user-last-Name="lastName"></div>
  <button @click="textToRender = 'Don\'t use such language'">
    Update
  </button>
</template>

<script setup>
  import { ref } from "vue";
    const textToRender = ref("Fuck! What a silly word that is")
    const lastName= ref("Jones")

    const vUserLastName = {
      beforeMount(el, binding){
        el.innerHTML = binding.value;
        el.style.color = "red";
      }
    }
  </script>
