<template>
  <header class="section header">
    <div class="section-inner">

      <div class="master-head">
        <h1 class="page-title">{{ title }}</h1>
        <p class="scroll-button" v-on:click="scrollToElement">Ready to go for a ride?</p>
      </div>

    </div>
    <!-- section-inner -->
  </header>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    scrollToElement() {
      const target = document.getElementsByClassName('section-inner')[0];
      this.$SmoothScroll(target, 1000);
    },
  },
};
</script>

