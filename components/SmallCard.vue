<template>
  <div class="card-container">
    <img
      :src="require(`@/assets/images/${card.image}`)"
      :alt="`Extinguisher ${card.id}`"
      class="image"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { smallCardSections } from '@/assets/data';

export type SmallCard = typeof smallCardSections[0]['cards'][0];

export default Vue.extend({
  props: {
    card: {
      type: Object as () => SmallCard,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-container {
  width: 24%;
  height: 12.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.image {
  width: 100%;
  height: 100%;
}
</style>
