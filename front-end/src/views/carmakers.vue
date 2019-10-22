<template>
  <div>
    <alert-bar></alert-bar>
    <list-of-carmakers></list-of-carmakers>
  </div>
</template>

<script>
import ListOfCarmakers from "../components/carmakers/ListOfCarmakers.vue";
import AlertBar from "../components/alert/alertBar.vue";

export default {
  components: {
    "list-of-carmakers": ListOfCarmakers,
    "alert-bar": AlertBar
  }
};
</script>