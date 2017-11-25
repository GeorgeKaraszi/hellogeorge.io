<template>
  <article class="post" v-bind:class="element.line_icon">
    <div class="stem-overlay">
      <div class="icon"></div>
      <div class="stem-mask"></div>
    </div>

    <div class="post-content">
      <h2 class="post-title"> {{ element.title }} </h2>
      <div class="entry-content">
        <p> {{ element.content }} </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['element'],
};
</script>

<style>

</style>
