<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <footerBar></footerBar>
  </v-app>
</template>

<script>
  import footerBar from './components/footer/FooterBar.vue';
  export default {
    name: 'App',
    components: {
      footerBar
    },
    data: () => ({
      //
    }),
  };
</script>

<style>
  @import './assets/css/transitions.css';
</style>
