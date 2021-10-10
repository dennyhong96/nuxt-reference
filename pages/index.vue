<template>
  <div class="container">
    <!-- <h1>{{ renderedOn }}</h1> -->

    <Hero />

    <LargeCardDisplay
      v-for="largeCardSection in largeCardSections"
      :key="largeCardSection.id"
      :cardSection="largeCardSection"
    />

    <LazySmallCardDisplay
      v-for="smallCardSection in smallCardSections"
      :key="smallCardSection.id"
      :cardSection="smallCardSection"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { largeCardSections, smallCardSections } from '@/assets/data';

export default Vue.extend({
  // transition: {
  //   name: 'home',
  //   mode: 'out-in',
  // },

  asyncData({ $logger, $userAgent }) {
    $logger('asyncData');
    console.log('$userAgent', $userAgent);
    return { renderedOn: process.client ? 'client' : 'server' };
  },

  data() {
    return {
      largeCardSections,
      smallCardSections,
    };
  },

  head() {
    return {
      title: 'Fire Extinguishers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description.',
        },
      ],
    };
  },

  mounted() {
    console.log(this.$config.CUSTOM_VAR);
    console.log(this.$config);
    this.$logger('mounted');
  },
});
</script>

<style scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
