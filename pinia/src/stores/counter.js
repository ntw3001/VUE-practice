import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 6,
    attempts:0,
    prizes:[
      "car",
      "baby",
      "house",
      "money",
    ],
    tsar:{
      name: "",
      age: ""
    }
  }),
  getters:{
    getCount(state){
      return state.counter;
    },
    getAttempts(state){
      return state.attempts;
    },
    getPrize(state){
      let prize = "";
      state.attempts++;
      for(let step=0; step < state.counter; step++){
        prize = state.prizes[Math.floor(Math.random() * state.prizes.length)];
      }
      return {
        prize,
        attempts: this.attempts
      };
    }
  }
})
