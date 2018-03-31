<template>
  <div id="resume">
    <image-gallery></image-gallery>
  </div>
</template>

<script>
import Banner from './Banner';
import Info from './Info';
import ImageGallery from './ImageGallery';
import TimeLine from './TimeLine/TimeLine';
import ContactFooter from './ContactFooter';

export default {
  components: {
    Banner,
    Info,
    TimeLine,
    ContactFooter,
    ImageGallery,
  },
};
</script>

<style>
body.modal-open {
  overflow: hidden;
}
</style>
