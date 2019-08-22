<template>
  <v-footer
    color="primary lighten-3"
    padless
    absolute
  >
    <v-layout
      justify-center
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        @click="redirect(link.url)"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-4
        text-center
        white--text
        xs12
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify test by babS</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  import router from '../../router';

  export default {
    data: function(){
      return {
        links: [
          {"name": "Cars", "url": "Cars"},
          {"name": "Carmakers", "url": "Carmakers"},
          {"name": "Contact Us", "url": "Contact"}
        ]
      }
    },
    methods: {
      redirect: function(item){
        if (item == "Cars" && this.$route.name != "cars_show"){
          router.push({name: "cars_show"});
        } else if (item == "Carmakers" && this.$route.name != "carmakers_show"){
          router.push({name: "carmakers_show"});
        } else if (item == "Contact" && this.$route.name != "contact_show"){
          router.push({name: "contact_show"});
        }
      }
    }
  }
</script>