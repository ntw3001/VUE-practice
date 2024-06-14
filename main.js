const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      addToCart(id) {
        this.cart.push(id)
    },
      removeFromCart(id) {
        const offendingItem = this.cart.indexOf(id)
        if (offendingItem > -1) this.cart.splice(offendingItem, 1)
      }
  }
})
