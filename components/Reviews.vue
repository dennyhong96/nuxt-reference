<template>
  <div>
    <h3>Customer Reviews</h3>
    <div>
      <div v-if="!$fetchState.pending">
        <ReviewCard
          v-for="review in reviews"
          :key="review.login.uuid"
          :review="review"
        />
      </div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Review } from './ReviewCard.vue';

export default Vue.extend({
  data() {
    return {
      reviews: [] as Review[],
    };
  },

  async fetch() {
    this.reviews = (
      await this.$axios.get('https://randomuser.me/api/?results=5')
    ).data.results.map((review: Review) => ({
      ...review,
      reviewContent:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro tempora, neque eos dolore ipsa dolorum quas cumque architecto odio non?',
    }));
  },
});
</script>

<style scoped></style>
