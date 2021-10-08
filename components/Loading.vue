<template>
  <div v-if="loading" class="box">
    <div class="cat">
      <div class="cat__body"></div>
      <div class="cat__body"></div>
      <div class="cat__tail"></div>
      <div class="cat__head"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    loading: false,
  }),

  methods: {
    start() {
      this.loading = true;
    },

    finish() {
      this.loading = false;
    },
  },
});
</script>

<style scoped>
.cat {
  position: relative;
  width: 100%;
  max-width: 20em;
  overflow: hidden;
  background-color: #e6dcdc;
}
.cat::before {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.cat:hover > * {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
.cat:active > * {
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

.cat__body,
.cat__tail,
.cat__head {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93)
    infinite;
  animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
}
.cat__body::before,
.cat__tail::before,
.cat__head::before {
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-image: url('https://images.weserv.nl/?url=i.imgur.com/M1raXX3.png&il');
}

.cat__head::before {
  top: 0;
  right: 0;
  background-position: 100% 0%;
  transform-origin: 0% 100%;
  transform: rotate(90deg);
}

.cat__tail {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.cat__tail::before {
  left: 0;
  bottom: 0;
  background-position: 0% 100%;
  transform-origin: 100% 0%;
  transform: rotate(-30deg);
}

.cat__body {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.cat__body:nth-of-type(2) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.cat__body::before {
  right: 0;
  bottom: 0;
  background-position: 100% 100%;
  transform-origin: 0% 0%;
}

@-webkit-keyframes rotating {
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
}

@keyframes rotating {
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
}
.box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: #e6dcdc;
}
</style>
