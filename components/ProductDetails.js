app.component('product-details', {
  template:
    `<p v-for="detail in details">{{ detail }}</p>`,
  data() {
    return {
      details: ['50% cotton', '30% wool', '20% polyester']
    }
  }
})
