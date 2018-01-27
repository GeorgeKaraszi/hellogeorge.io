<template>
  <div>
    NEXT CONTAINER
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: '#35c189',
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('set-content-background', this.background);
    });
  },
};
</script>

