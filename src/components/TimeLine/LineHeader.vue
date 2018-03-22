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
    smoothScrollElement(target) {
      this.$SmoothScroll(target, 1000);
    },
    scrollToElement() {
      const targets = document.querySelectorAll("[data-behavior='process:post']");
      this.$SmoothScroll(targets[0], 1000);

      for(var i = 0; i < targets.length; i++) {
        (function(ind, target, smoothScroll) {
          setTimeout(function(){
              smoothScroll(target, 1000);
          }, 5000 * ind);
        })(i, targets[i], this.$SmoothScroll);
      }
    },
  },
};
</script>
