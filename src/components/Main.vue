<template>
  <div id="main">
    <!-- <info></info> -->
    <time-line></time-line>
    <!-- <contact-footer></contact-footer> -->
    <!-- <modal-container></modal-container> -->
    <!-- <button v-on:click="open">Click</button>
    <component :is="component"></component> -->
  </div>
</template>

<script>
import Info from './Info';
import TimeLine from './TimeLine/TimeLine';
import ContactFooter from './ContactFooter';

export default {
  components: {
    Info,
    TimeLine,
    ContactFooter,
  },

  data() {
    return {
      component: 'info',
    };
  },

  methods: {
    open() {
      this.component = 'time-line';
    },
  },
};
</script>

<style>

body.modal-open {
  overflow: hidden;
}
</style>

