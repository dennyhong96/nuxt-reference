<template>
  <div>
    <MyItem v-for="rental in myRentals" :key="rental.id" :item="rental" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  layout: 'noNav',

  computed: {
    ...mapState(['myRentals']),
  },
});
</script>

<style scoped></style>
