<template>
  <div>
    <alert-bar></alert-bar>
    <list-of-cars></list-of-cars>
  </div>
</template>

<script>
import ListOfCars from "../components/cars/ListOfCars.vue";
import AlertBar from "../components/alert/alertBar.vue";

export default {
  components: {
    "list-of-cars": ListOfCars,
    "alert-bar": AlertBar
  }
};
</script>