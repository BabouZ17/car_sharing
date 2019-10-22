<template>
  <v-container>
    <v-alert
      v-for="alert in alerts"
      :key="alert.uuid"
      :type="alert.type"
      dismissible
      dense
      @click.native="remove(alert)"
    >{{ alert.message }}</v-alert>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Actions from "../../store/actions-types/Actions";

export default {
  methods: {
    ...mapActions([Actions.REMOVE_ALERT]),
    remove: function(alarm) {
      this.REMOVE_ALERT({ uuid: alarm.uuid });
    }
  },
  computed: {
    ...mapState(["alerts"])
  }
};
</script>