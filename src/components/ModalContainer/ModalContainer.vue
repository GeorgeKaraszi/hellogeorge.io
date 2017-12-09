<template>

  <div class='modal-container'>
    <div class='modal'>
      <header class="head">
        <div class="btn-close" v-on:click="close">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </header>
      <!-- <header>
        <h2>{{title}}</h2>
        <h2>
          <button v-on:click="close">CLOSE</button>
        </h2>
      </header> -->
      <!-- <section>
        <component :is="modalComponent"></component>
      </section> -->
      <section class="content">
        <component :is="modalComponent"></component>
      </section>
    </div>
  </div>

  <!-- <div class="modal-header">
        <span v-on:click="close" class="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div> -->
  <!-- <input id='button' type='checkbox'>
    <label for='button'>Click Me!</label>
    <div class='modal'>
      <div class='content'>Pure CSS Modal! No JS!</div>
    </div> -->

</template>

<script>
import TestModal from './TestModal';

export default {
  props: ['modalComponent'],
  components: {
    TestModal,
  },
  data() {
    return {
      title: 'TEST',
    };
  },

  methods: {
    close() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="less" scoped>
.modal-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(41, 171, 164, 0.8);
  z-index: 1;
}

.modal {
  width: 70%;
  height: 60%;
  display: block;
  position: relative;
  margin: 0 auto;
  top: 50%;
  background: #fff;
  margin-top: -200px;
  visibility: visible;
}

.btn-close {
  font-size: 28px;
  display: block;
  float: right;
  color: #fff;
  cursor: pointer;
}

.head {
  height: 32px;
  padding: 12px 30px;
  overflow: hidden;
  background: #e2525c;
}

.content {
  padding-top: 2px;
}
</style>
