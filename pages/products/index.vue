<template>
  <div class="container">
    <LargeCardDisplay :cardSection="largeCardSections[0]" />
    <SmallCardDisplay :cardSection="smallCardSections[0]" />
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

<style scoped></style>
