import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 6,
    tsar:{
      name: "",
      age: ""
    }
  }),
})
