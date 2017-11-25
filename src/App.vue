<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import TimeLine from './components/TimeLine';

export default {
  name: 'app',
  components: {
    TimeLine,
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
</style>

