<template>
  <div class="card">
    <img
      :src="require(`@/assets/images/${card.image}`)"
      :alt="card.title"
      class="image"
    />
    <h3 class="header">{{ card.title }}</h3>
    <p class="snippet">{{ card.snippet }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { largeCardSections } from '@/assets/data';

export type LargeCard = typeof largeCardSections[0]['cards'][0];

export default Vue.extend({
  props: {
    card: {
      type: Object as () => LargeCard,
      required: true,
    },
  },
});
</script>

<style scoped>
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
</style>
