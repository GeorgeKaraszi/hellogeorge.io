<template>
<div class="slider-container">
<modal-container
  v-if="activeModal"
  v-on:close-modal="closeModal"
  v-on:click-action="nextImage"
  :modalComponent="component"
  :componentParam="selectedImage"
  :enableClickAction="true"
  :showHeader="false">
  </modal-container>
<carousel-3d
  :width="512"
  :height="288"
  :perspective="30"
  :inverseScaling="200"
  :display="8"
  :controlsVisible="true"
  controls-prev-html="<p class='fas fa-angle-left'></p>"
  controlsNextHtml="<p class='fas fa-angle-right'></p>">
  <slide v-for="(image, index) in images" :key="image + index" :index="index">
    <img :src="image" v-on:click="openLargeImage(image, index)">
  </slide>
</carousel-3d>
    <div class="spacer"></div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import ModalContainer from './ModalContainer/ModalContainer';

export default {
  components: {
    Carousel3d,
    Slide,
    ModalContainer,
  },

  methods: {
    openLargeImage(image, index) {
      this.activeModal   = true;
      this.selectedImage = {
        image: image,
        index: index,
      }
    },

    nextImage(index) {
      const nextIndex = index % this.images.length

      this.selectedImage = {
        image: this.images[nextIndex],
        index: nextIndex,
      }
    },
    closeModal() {
      this.activeModal = false;
    },
  },

  watch: {
    activeModal: active => {
      const className = 'modal-open';
      if (active) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    },
  },

  data() {
    return {
      activeModal: false,
      component: 'gallery-modal',
      selectedImage: {},
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


