<template>
  <div id="main">
    <info></info>
    <time-line></time-line>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
import Info from './Info';
import TimeLine from './TimeLine/TimeLine';
import ContactFooter from './ContactFooter';

export default {
  components: {
    Info,
    TimeLine,
    ContactFooter,
  },
};
</script>

<style>
body.modal-open {
  overflow: hidden;
}
</style>

