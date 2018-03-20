<template>
  <div class="andy">
    <img :src="image()"/>
  </div>
</template>

<script>
export default {
  props: {
    componentParam: {
      type: Object,
      required: true,
    }
  },
  methods: {
    image() {
      return this.componentParam['image'];
    }
  },
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

<style lang="less" scoped>
</style>
