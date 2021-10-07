<template>
  <div class="review-card">
    <div class="image-container">
      <img :src="review.picture.large" alt="" />
    </div>
    <div class="text-container">
      <h6>{{ review.login.username }}</h6>
      <p>
        {{ review.reviewContent }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export interface Review {
  picture: {
    large: string;
  };
  login: {
    username: string;
    uuid: string;
  };
  reviewContent: string;
}

export default Vue.extend({
  props: {
    review: {
      type: Object as () => Review,
      required: true,
    },
  },
});
</script>

<style scoped>
.review-card {
  margin-top: 1.5rem;
  height: 4rem;
  display: flex;
}
.text-container {
  margin-left: 2rem;
}
img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
p {
  color: grey;
}
</style>
