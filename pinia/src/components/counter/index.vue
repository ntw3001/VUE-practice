<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Count</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">{{ store.counter }}</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button"
        class="btn btn-primary btn-lg px-4 gap-3"
        @click="store.add">
          +
        </button>
        <button type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="store.subtract">
          -
        </button>
        <hr/>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="getPrizeHandler"
        >
          Get prize
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

const getPrizeHandler = () => {
  alert(`Effort #${store.getPrize.attempts}: ${store.getPrize.prize}`);
};

</script>
