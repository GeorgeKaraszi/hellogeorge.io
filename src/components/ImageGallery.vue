<template>
<div class="slider-container">

<carousel-3d width="512" height="512" perspective="30" inverseScaling="200" display="8">
  <slide v-for="(image, index) in images" :key="image" :index="index">
    <img :src="image">
  </slide>
</carousel-3d>
    <div class="spacer"></div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      images: [
        'static/placeholder.png',
        'static/placeholder.png',
        'static/placeholder.png',
        'static/placeholder.png',
        'static/placeholder.png',
        'static/placeholder.png',
        'static/placeholder.png',
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.carousel-3d-container {
  z-index: 999;
  margin: 0 !important;
  position: relative;
}

.slider-container {
  background: white;
  z-index: 99999;
  display: block;
  position: relative;
}

.spacer {
  min-height: 30px;
}
</style>


