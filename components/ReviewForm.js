app.component('review-form', {
  template: /*html*/ `
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="Recommend">Would you recommend this product?:</label>
    <select id="recommend" v-model="recommend">
      <option>Yea</option>
      <option>Nay</option>
    </select>

    <input class="button" type="submit" value="Submit">

  </form>
  `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommend: null,
      recommendOutput: ""
    }
  },

  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null || !this.recommend) {
        alert("No, do it properly")
        return
      }

      if (this.recommend === "Yea") {
        this.recommendOutput = "WOULD"
      } else if (this.recommend === "Nay") {
      this.recommendOutput = "WOULD NOT"
      }
      else {
        this.recommendOutput = ""
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
        recommendOutput: this.recommendOutput
      }
      this.$emit('review-submitted', productReview);

      this.name = ""
      this.review = ""
      this.rating = null
      this.recommend = null
      this.recommendOutput = ""
    }
  }
})
