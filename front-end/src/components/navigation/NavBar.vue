<template>
  <div>
    <v-toolbar>
      <v-toolbar-title :title="title">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-for="link in links" :key="link.name" @click="redirect(link.url)">
          {{ link.name }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-container pa-0 fluid>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
  import router from '../../router';

  export default {
    props: {
      title: {
        type: String,
        default: "Car Sharing App"
      }
    },
    data: function() {
      return {
        links: [
          {"name": "Cars", "url": "Cars"},
          {"name": "Carmakers", "url": "Carmakers"},
          {"name": "Contact Us", "url": "Contact"}
        ]
      }
    },
    methods: {
      redirect: function(link){
        if (link == "Cars" && this.$route.name != "cars_show"){
          router.push({name: "cars_show"});
        } else if (link == "Carmakers" && this.$route.name != "carmakers_show"){
          router.push({name: "carmakers_show"});
        } else if (link == "Contact" && this.$route.name != "contact_show"){
          router.push({name: "contact_show"});
        }
      }
    }
  };

</script>

