<template>
  <v-form 
      v-model="valid"
      ref="form"  
  >
    <br />
    <v-flex 
        md6
        offset-md3
    >
      <v-card>
        <v-card-title 
          v-if="carmaker.name != undefined"
        >
          Edit of carmaker: {{ carmaker.name }}
        </v-card-title>
        <v-card-title v-else>
          New carmaker
        </v-card-title>
        <v-card-text>
          <v-container 
          grid-list-xl
          justify-center=True
          >
            <v-layout wrap>
              <v-flex
                  xs12
                  md6
                  offset-md3
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="20"
                  label="Name"
                  required
                  @keyup.enter="submit"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout justify-center=True>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
              >
                Validate
              </v-btn>
              <v-btn
                color="red"
                class="mr-4"
                @click="reset"
              >
                Reset
              </v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>
  import axios from 'axios';
  import {mapState, mapActions} from 'vuex';
  import carmakerActions from '../../store/actions-types/carmakersActions';
  import router from '../../router';

  export default {
    data: function(){
      return {
        carmaker: {},
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 25) || 'Name must be less than 10 characters',
        ]
      }
    },
    props: {
      carmaker_id: undefined,
    },
    mounted: function(){
      if (this.carmaker_id != undefined){
        let config = {
            headers: {
                'Accept': 'application/json'
            }
        };
        axios.get(`/api/car_sharing/carmaker/${this.carmaker_id}`, config)
          .then(response => this.setCarmaker(response.data))
          .catch(error => console.log(error));
      }
    },
    methods: {
      ...mapActions([
        carmakerActions.GET_CARMAKER,
        carmakerActions.UPDATE_CARMAKER,
        carmakerActions.CREATE_CARMAKER,
      ]),
      setCarmaker: function(payload){
        this.carmaker.name = payload.name;
        this.carmaker.id = payload.id;
        this.name = payload.name;
      },
      submit: async function(){
        if (this.$refs.form.validate()){
          if (this.carmaker.name != undefined && this.carmaker.id != undefined){
            let payload = {
              "id": this.carmaker.id,
              "name": this.name
            };
            await this.UPDATE_CARMAKER(payload);
          } else {
            let payload = {
              "name": this.name
            };
            await this.CREATE_CARMAKER(payload);
          }
          router.push({name: "carmakers_show"}); 
        } 
      },
      reset: function(){
        this.$refs.form.reset();
      }
    },
    computed: {
      ...mapState([
      ])
    }
  }
</script>



