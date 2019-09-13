<template>
  <v-layout v-if="new_carmaker">
    <div>
      <v-alert type="success">
        {{ message }}
      </v-alert>
    </div>
  </v-layout>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: ""
      },
      new_carmaker: {
        type: Boolean,
        default: false
      }
    }
  }
</script>