<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count: {{ store.counter }} </strong>
      </p>

      <button type="button" class="btn btn-primary me-3" @click="add">+</button>
      <button type="button" class="btn btn-outline-secondary" @click="subtract">-</button>

      <hr/>
      <p>Name: {{ store.tsar.name }}</p>
      <p>Age: {{ store.tsar.age }}</p>
      <button
      type="button"
      class="btn btn-primary"
      @click="patchState"
      >Patch</button>
    </div>
  </div>
</template>

<script setup>

import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

const add = () => {
  store.counter++;
};

const subtract = () => {
  store.counter--;
};

const patchState = () => {
  store.$patch({
    counter:100,
    tsar: {
      name: 'Ivan',
      age: 25
    }
  })
};
</script>
