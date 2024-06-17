app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: /*html*/ `
  <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave a score of {{ review.rating }}!
          <br/>
          "{{ review.review }}", they said.
          <br/>
          They {{ review.recommendOutput }} recommend this product!
        </li>
      </ul>
    </div>
  `
})
