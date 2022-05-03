/* eslint-disable vue/no-multiple-template-root */
<template>
  <body>
    <div id="nav">
      <h3>快篩試劑查詢</h3>
    </div>
    <router-view />
    <Footer />
  </body>
</template>

<script>
import Footer from './views/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
@import './styles/bus.scss';
</style>
