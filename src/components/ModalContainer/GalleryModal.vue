<template>
  <div>
    HERE
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: 'black',
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('set-content-background', this.background);
    });
  },
};
</script>

