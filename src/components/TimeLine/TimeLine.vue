<template>
  <div class="timeline">
    <modal-container v-if="activeModal" v-on:close-modal="closeModal" :modalComponent="component"></modal-container>
    <div class="stem-wrapper" :class="stem_color">
      <div class="stem" id="scollingStem"></div>
      <div class="stem-background"></div>
    </div>

    <line-header :title="title"></line-header>

    <div class="section main-content">
      <div class="section-inner">

        <div class="stem-padding"></div>

        <div class="post-wrapper">
          <line-element v-on:set-stem-color="setStemColor" v-on:open-modal="openModal" v-for="element in elements" :element="element" :key="element.index">
          </line-element>
        </div>
        <!-- insert posts -->
      </div>
      <div class="single-stem-icon scroll-to-top trigger-scroll-to-top"></div>
    </div>

    <line-footer></line-footer>
    <!-- footer -->
  </div>
</template>

<script>
import LineHeader from './LineHeader';
import LineElement from './LineElement';
import LineFooter from './LineFooter';
import LineContact from './LineContact';
import ModalContainer from '../ModalContainer/ModalContainer';

export default {
  name: 'timeline',
  components: {
    LineElement,
    LineHeader,
    LineFooter,
    LineContact,
    ModalContainer,
  },
  methods: {
    setStemColor(element) {
      this.stem_color = element.line_color;
    },
    openModal(element) {
      this.component = element.modal;
      this.activeModal = true;
    },
    closeModal() {
      this.activeModal = false;
    },
  },

  data() {
    return {
      title: 'Project Road Map',
      ending_message: 'THATS IT YALL!',
      stem_color: 'default',
      activeModal: false,
      component: '',
      elements: [
        {
          title: 'Test A',
          content: 'This is some kind of content',
          line_color: 'default',
          line_icon: 'chat-icon',
          modal: 'test-modal',
        },
        {
          title: 'Test B',
          content: 'This is some kind of content',
          line_color: 'white',
          line_icon: 'check-icon',
        },
        {
          title: 'Test C',
          content: 'This is some kind of content',
          line_color: 'yellow',
          line_icon: 'db-icon',
        },
        {
          title: 'Test D',
          content: 'This is some kind of content',
          line_color: 'green',
          line_icon: 'code-icon',
        },
      ],
    };
  },
};
</script>

<style>

</style>
