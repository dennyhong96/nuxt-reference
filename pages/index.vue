<template>
  <div>
    <Nav />

    <div class="container">
      <Hero />

      <LargeCardDisplay
        v-for="largeCardSection in largeCardSections"
        :key="largeCardSection.id"
        :cardSection="largeCardSection"
      />

      <SmallCardDisplay
        v-for="smallCardSection in smallCardSections"
        :key="smallCardSection.id"
        :cardSection="smallCardSection"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { largeCardSections, smallCardSections } from '@/assets/data';

export default Vue.extend({
  data() {
    return {
      largeCardSections,
      smallCardSections,
    };
  },
});
</script>
