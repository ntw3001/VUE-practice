<template>
  <button class="btn btn-primary"
    @click="status = !status"
  >
    Toggle Status
  </button>

  <transition
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div class="p-3 mb-2 bg-danger text-white"
        v-if="!status"
        key="status_off"
    >
        OFF
    </div>

    <div class="p-3 mb-2 bg-success text-white"
        v-else="status"
        key="status_on"
    >
        ON
    </div>

  </transition>

  <!-- <transition>
    <div class="p-3 mb-2 bg-success text-white"
        v-if="status"
    >
        ON
    </div>
  </transition> -->

</template>

<script setup>
   import { ref } from 'vue';

   const status = ref(false);

  function beforeEnter(){console.log('1 - beforeEnter')}
  function enter(){console.log('2 - enter')}
  function afterEnter(){console.log('3 - afterEnter')}
  function beforeLeave(){console.log('4 - beforeLeave')}
  function leave(){console.log('5 - leave')}
  function afterLeave(){console.log('6 - afterLeave')}

  //  const data = ref({
  //   display:false
  //  })
</script>

<style>

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }


  .v-enter-active,
  .v-leave-active {
    transition: 1s;
  }

  .v-leave-from,
  .v-enter-to {
    opacity: 1;
    }

</style>
