<template>
  <div class="timeline" id="timelineHeader">
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
      <div class="single-stem-icon scroll-to-top trigger-scroll-to-top"  v-on:click="scrollToTop"></div>
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
    scrollToTop() {
      const target = document.getElementById('header');
      this.$SmoothScroll(target, 1000);
    },
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
      stem_color: 'default',
      activeModal: false,
      component: '',
      elements: [
        {
          title: 'Discovery',
          content: 'Talk with the client to better outline and articulate the problems they are facing. During this phase I would ' +
                   'also discuss outlying potential opportunities that will give better value to the clients brand.',
          line_color: 'default',
          line_icon: 'chat-icon',
        },
        {
          title: 'Evaluation',
          content: "After a clear problem statement has been established. I'll Walk through multiple iterative design and development steps " +
                   'with the client and-or Project Manager. Creating and estimating development time for each broken down feature that contribute ' +
                   'to the over-arching solution.',
          line_color: 'white',
          line_icon: 'check-icon',
        },
        {
          title: 'Product Development',
          content: "For each iterative step, I work closely with both designer's and other developers to create a well-developed final solution",
          line_color: 'yellow',
          line_icon: 'code-icon',
        },
        {
          title: 'Deliverable',
          content: "Hold weekly walk through iterations with the client, to finalize each feature and to ensure it meet's their criteria. " +
                   'This also involves conducting milestone releases on a week by week bases when appropriate.',
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

