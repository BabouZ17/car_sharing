<template>
  <v-container>
    <v-layout v-if="loading" 
      justify-center
    >
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-layout>
    <v-layout v-if="!loading">
      <v-flex md2>
        <h1>{{ title }}</h1>
      </v-flex>
      <v-flex offset-md8>
        <div class="text-right">
          <v-btn color="teal accent-3" @click="createCarmaker">New Carmaker
            <v-icon>add</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <br />
    <v-layout v-if="!loading">
      <v-flex>
        <v-simple-table fixed-header height="600px">
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
              <th class="text-left">Created on</th>
              <th class="text-left">Edit</th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>
          <tbody v-if="carmakers">
            <tr v-for="carmaker in carmakers" :key="carmaker.id">
              <td>{{ carmaker.id }}</td>
              <td>{{ carmaker.name }}</td>
              <td>{{ parseDate(carmaker.created_on) }}</td>
              <td>
                <a @click="updateCarmaker(carmaker.id)">
                  <v-icon>edit</v-icon>
                </a>
              </td>
              <td>
                <delete-dialog v-model="dialog"></delete-dialog>
              </td>
            </tr> 
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import {mapState, mapActions} from 'vuex';
  import carmakersActions from '../../store/actions-types/carmakersActions';
  import router from '../../router';
  import DeleteDialog from '../../components/dialog/DeleteDialog.vue';

  export default {
    components: {
      'delete-dialog': DeleteDialog,
    },
    props: {
      title: {
        type: String,
        default: "Carmakers"
      }
    },
    data (){
      return {
        dialog: false,
      }
    },
    mounted: function(){
      this.GET_CARMAKERS();
    },
    methods: {
      ...mapActions([
        carmakersActions.GET_CARMAKERS,
        carmakersActions.DELETE_CARMAKER
      ]),
      parseDate: function(date) {
        return new Date(date).toLocaleString();
      },
      createCarmaker: function(){
        if (this.$router.name != "carmaker_new"){
          router.push({name: "carmaker_new"});
        }
      },
      updateCarmaker: function(carmaker_id){
        if (this.$router.name != "carmaker_update"){
          router.push({name: "carmaker_update", params: {carmaker_id: carmaker_id}});
        }
      },
      deleteCarmaker: function(carmaker_id){
        this.DELETE_CARMAKER(carmaker_id);
      },
    },
    computed: {
      ...mapState([
        'carmakers',
        'loading',
        'alerts'
      ])
    }
  };
</script>