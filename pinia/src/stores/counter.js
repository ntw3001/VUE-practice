import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 6,
  }),
  // actions: {
  //   increment() {
  //     this.count++
  //   },
  // },
})
