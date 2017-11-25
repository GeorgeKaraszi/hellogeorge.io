<template>
  <div class="timeline">
    <div class="stem-wrapper">
      <div class="stem"></div>
      <div class="stem-background"></div>
    </div>

    <line-header v-bind:title="title"></line-header>

    <div class="section main-content">
      <div class="section-inner">

        <div class="stem-padding"></div>

        <div class="post-wrapper">
          <line-element v-for="element in elements" v-bind:element="element" :key="element.index"></line-element>
          <!-- insert posts -->
        </div>
      </div>
      <div class="single-stem-icon scroll-to-top trigger-scroll-to-top"></div>
    </div>

    <line-footer></line-footer>
    <!-- footer -->
  </div>
</template>

<script>
import LineHeader from './timeline/LineHeader';
import LineElement from './timeline/LineElement';
import LineFooter from './timeline/LineFooter';

export default {
  name: 'timeline',
  components: {
    LineElement,
    LineHeader,
    LineFooter,
  },

  data() {
    return {
      title: 'Project Road Map',
      ending_message: 'THATS IT YALL!',
      elements: [
        {
          title: 'Test A',
          content: 'This is some kind of content',
          line_color: 'green',
          line_icon: 'music-icon',
        },
        {
          title: 'Test B',
          content: 'This is some kind of content',
          line_color: 'green',
          line_icon: 'm-icon',
        },
        {
          title: 'Test C',
          content: 'This is some kind of content',
          line_color: 'green',
          line_icon: 'music-icon',
        },
      ],
    };
  },
};
</script>

<style lang="less">
  .stem-wrapper{
    // top: 200px !important;
  }
</style>
