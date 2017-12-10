<template>

  <div class='modal-container' v-on:click="close" data-behavior="close">
    <div class='modal'>
      <header class="head">
        <div class="title">
          {{title}}
        </div>
      </header>
      <section class="content-container">
        <div class="content">
          <component :is="modalComponent" v-on:set-content-background="setContentBackground"></component>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
import TestModal from './TestModal';
import NextModal from './NextModal';

export default {
  props: ['modalComponent'],
  components: {
    TestModal,
    NextModal,
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
      document.getElementsByClassName('modal')[0].style.background = color;
    },
  },
};
</script>

<style lang="less" scoped>
@header-background: #35c189;

.modal-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.modal {
  width: 70%;
  height: 60%;
  display: block;
  position: relative;
  margin: 0 auto;
  top: 40%;
  background: #fff;
  margin-top: -200px;
  border-radius: 20px;
}

.head {
  height: 32px;
  padding: 12px 30px;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    darken(@header-background, 5%) 10%,
    @header-background 80%
  );
  border-bottom: 5px solid darken(@header-background, 25%);

  .title {
    font-family: 'Comfortaa', cursive;
    text-align: center;
    font-size: 30px;
    margin-top: 5px;
    color: #fff;
  }
}

.content-container {
  .content {
    padding-top: 2px;
    margin-left: 10px;
  }
}
</style>
