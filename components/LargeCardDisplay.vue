<template>
  <div class="container">
    <h4 class="header">
      {{ cardSection.title }}
    </h4>
    <p class="snippet">
      {{ cardSection.snippet }}
    </p>
    <div class="cards-container">
      <LargeCard
        v-for="card in cardSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { largeCardSections } from '@/assets/data';

export type LargeCardSection = typeof largeCardSections[0];

export default Vue.extend({
  props: {
    cardSection: {
      type: Object as () => LargeCardSection,
      required: true,
    },
  },
});
</script>

<style scoped>
.container {
  margin-top: 2rem;
}

.header {
  font-weight: 700;
  font-size: 1.5rem;
}

.snippet {
  color: grey;
  margin-bottom: 1.5rem;
}

.cards-container {
  display: flex;
  justify-content: space-between;
}
</style>
