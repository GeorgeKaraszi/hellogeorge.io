<template>

  <div class='modal' v-on:click="close" data-behavior="close">
    <div class='modal-container'>
      <header v-if="showHeader === true">
        <div class="title">
          {{title}}
        </div>
      </header>
      <article class="content-container">
        <div class="content">
          <component :is="modalComponent" v-on:set-content-background="setContentBackground" :componentParam="componentParam"></component>
        </div>
      </article>
      <footer>
        <div class="close-button" data-behavior="close">Nice!</div>
      </footer>
    </div>
  </div>

</template>

<script>
import TestModal from './TestModal';
import NextModal from './NextModal';
import GalleryModal from './GalleryModal';

export default {
  props: {
    modalComponent: {
      type: String,
      required: true,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    componentParam: {
      type: Object,
      default: null,
    },
  },
  components: {
    TestModal,
    NextModal,
    GalleryModal,
  },
  data() {
    return {
      title: 'TEST',
    };
  },

  methods: {
    close(e) {
      const action = 'close';
      if (e.target.dataset.behavior === action) {
        this.$emit('close-modal');
      }
    },
    setContentBackground(color) {
      document.getElementsByClassName('modal-container')[0].style.background = color;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
