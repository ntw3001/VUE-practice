<template>

  <div class="mb-3">
    <input v-model="data.name" class="form-control"/>
  </div>
  <button @click="addOne" class="btn btn-primary">
    Add Name
  </button>

  <hr/>

  <div>
    <ul class="list-group pl-0">
      <transition-group name="fade" appear>
        <li
          v-for="(item, index) in data.list"
          :key="item"
          class="list-group-item"
          @click="removeItem(index)"
          >
          {{ item }}
        </li>
      </transition-group>
    </ul>
  </div>

</template>

<script setup>
  import { reactive } from 'vue'

  const data = reactive({
    list: ["Framcos", "Progle", "Nick", "Jenny"],
    name: ''
  })

  const addOne = () => {
    if (!data.list.includes(data.name) && data.name !== ""){
    data.list.unshift(data.name)
    }
  }

  const removeItem = (index) => {
    data.list.splice(index, 1)
  }

</script>

<style scoped>

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: 0.5s;
  }

  .fade-leave-from,
  .fade-enter-to {
    opacity: 1;
    }

  .fade-move {
    transition: transform 0.5s;
    }
</style>
