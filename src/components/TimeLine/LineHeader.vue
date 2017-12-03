<template>
  <header class="section header">
    <div class="section-inner">

      <div class="master-head">
        <h1 class="page-title">{{ title }}</h1>
        <p class="scroll-button" onClick="$('.post-wrapper .post:first-child .stem-overlay .icon').click();">Ready to go for a ride?</p>
      </div>

    </div>
    <!-- section-inner -->
  </header>
</template>

<script>
export default {
  props: ['title'],
};
</script>

