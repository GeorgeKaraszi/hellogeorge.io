<template>
  <div class="timeline">
    <transition name="bounce">
      <modal-container v-if="activeModal" v-on:close-modal="closeModal" :modalComponent="component"></modal-container>
    </transition>
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
          title: 'Discovery',
          content: 'Talk with the client to better outline and articulate the problems they are facing. Maybe even discover new one\'s that where never discovered.',
          line_color: 'default',
          line_icon: 'chat-icon',
          modal: 'test-modal',
        },
        {
          title: 'Evaluation',
          content: 'Walk through solutions with the client, creating feature stories and valid iterations.',
          line_color: 'white',
          line_icon: 'check-icon',
          modal: 'next-modal',
        },
        {
          title: 'Product Development',
          content: 'For each iterative step, I work closely with the development team to create finalized solutions',
          line_color: 'yellow',
          line_icon: 'code-icon',
        },
        {
          title: 'Deliverable',
          content: 'Hold weekly walk through iterations with the client, to finalize each feature and to ensure it meet\'s their criteria.',
          line_color: 'green',
          line_icon: 'db-icon',
        },
      ],
    };
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
};
</script>

<style lang="less" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>

