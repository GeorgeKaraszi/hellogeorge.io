<template>

  <div class='modal-container'>
    <header>
      <h2>{{title}}</h2>
      <h2>
        <button v-on:click="close">CLOSE</button>
      </h2>
    </header>
    <section>
      <component :is="modalComponent"></component>
    </section>
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

</style>
