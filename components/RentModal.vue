<template>
  <div>
    <b-button id="show-btn" @click="showModal">Rent</b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="calendar-container">
        <div class="text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum
            dicta fugiat illo et unde, error quis, tempore excepturi ipsa ut
            nobis at repudiandae soluta hic iste quia? Perferendis,
            necessitatibus!
          </p>
        </div>

        <vc-date-picker :value="null" color="indigo" is-dark is-range />
      </div>

      <b-button variant="outline-danger">Order</b-button>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Product } from '~/store';

export default Vue.extend({
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },

  methods: {
    showModal() {
      // @ts-ignore
      this.$refs['my-modal'].show();
    },
    // hideModal() {
    //   // @ts-ignore
    //   this.$refs['my-modal'].hide();
    // },
    // toggleModal() {
    //   // We pass the ID of the button that we want to return focus to
    //   // when the modal has hidden

    //   // @ts-ignore
    //   this.$refs['my-modal'].toggle('#toggle-btn');
    // },
  },
});
</script>

<style scoped>
button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}

.calendar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

p {
  color: grey;
}

.text-container {
  padding: 0.5rem;
}
</style>
