const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['planck length', 'microscopic', 'miniscule', 'titchy', 'teeny-weeny', 'tiny', 'little', 'small', 'boring', 'bigger than that', 'large', 'great', 'vast', 'huge', 'gigantic', 'colossal', 'brobdingagian', 'gargantuan', 'to stand astride the very Earth itself'],
            variants: [
              {id: 2234, colour: "green"},
              {id: 2235, colour: "blue"}
            ]
          }
    }
})
