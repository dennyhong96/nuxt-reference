<template>
  <div class="container">
    <h3 class="header">
      {{ cardSection.title }}
    </h3>
    <div class="card-container">
      <SmallCard
        v-for="card in cardSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { smallCardSections } from '@/assets/data';

export type SmallCardSection = typeof smallCardSections[0];

export default Vue.extend({
  props: {
    cardSection: {
      type: Object as () => SmallCardSection,
      required: true,
    },
  },
});
</script>

<style scoped>
.container {
  padding: 2rem 0;
}

.header {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
