<template>
  <article class="post" :class="[element.line_icon, {active: isActive}]">
    <div class="stem-overlay">
      <div class="icon"></div>
      <div class="stem-mask"></div>
    </div>

    <div class="post-content">
      <h2 class="post-title"> {{ element.title }} </h2>
      <div class="entry-content">
        <p> {{ element.content }} </p>
        <p>
          <button v-on:click="modalEvent"> CLICK ME </button>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ['element'],
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    modalEvent() {
      this.$emit('open-modal', this.element);
    },
    handleScroll() {
      const halfScreen = window.innerHeight / 2;
      const elementPos = this.$el.getClientRects()[0].y;
      setTimeout(() => {
        if (elementPos < halfScreen) {
          this.isActive = true;
          this.$emit('set-stem-color', this.element);
        } else {
          this.isActive = false;
        }
      }, 20);
    },
  },
};
</script>

<style>

</style>
