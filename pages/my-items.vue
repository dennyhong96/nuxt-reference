<template>
  <div>
    <MyItem v-for="rental in myRentals" :key="rental.id" :item="rental" />

    <nav>
      <ul>
        <li v-for="link of page.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <NuxtContent :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  layout: 'noNav',

  async asyncData({ $content }) {
    const page = await $content('articles/test').fetch();

    return { page };
  },

  computed: {
    ...mapState(['myRentals']),
  },
});
</script>

<style scoped></style>
