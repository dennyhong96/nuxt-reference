<template>
  <div class="item-container">
    <img :src="require(`@/assets/images/${item.image}`)" alt="" />
    <div class="text-container">
      <h4>{{ item.title }}</h4>
      <p>{{ item.description }}</p>
      <small>{{ formattedDateRange }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Rental } from '~/store';

export default Vue.extend({
  props: {
    item: {
      type: Object as () => Rental,
      required: true,
    },
  },

  computed: {
    formattedDateRange(): string {
      const start = this.item.dateRange.start;
      const end = this.item.dateRange.end;
      return `${start.getFullYear()}/${start.getMonth()}/${start.getDate()} - ${end.getFullYear()}/${end.getMonth()}/${end.getDate()}`;
    },
  },
});
</script>

<style scoped>
.item-container {
  display: flex;
  margin: 3rem 0;
}
.text-container {
  padding: 0 1rem;
}
img {
  width: 17.5rem;
  border-radius: 0.5rem;
  height: 11rem;
}
p {
  font-size: 0.8rem;
  color: grey;
  margin-bottom: 0;
}
small {
  font-size: 0.7rem;
  color: grey;
}
</style>
