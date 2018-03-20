<template>
  <div>
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
  img {
    padding-top: 5px;
    padding-left: 2px;
    max-width:98%;
    max-height:95%;
  }
</style>
