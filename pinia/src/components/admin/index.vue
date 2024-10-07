<template>
  <div class="row">
    <h1>Admin</h1>
    <hr />
    <div class="col-sm-5">
      <p>
        <strong> Change count: {{ store.counter }} </strong>
      </p>
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
      <p>Name: {{ store.tsar.name }}</p>
      <p>Age: {{ store.tsar.age }}</p>
      <button
      type="button"
      class="btn btn-primary"
      @click="patchState"
      >Patch</button>

      <div>
        <hr/>
          <ul>
            <li v-for="(post) in store.posts">
              {{ post.title }}
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-primary me-4"
            @click="store.getPosts(10)">
            Get posts
          </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

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
