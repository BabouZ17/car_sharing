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
          v-if="car.model != undefined"
        >
            Edit of car: {{ car.model }}
        </v-card-title>
        <v-card-title v-else>
          New car
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
                v-model="model"
                :rules="modelRules"
                :counter="50"
                label="Model"
                prepend-icon="directions_car"
                required
              ></v-text-field>
              <v-text-field
                v-model="seats"
                :rules="seatsRules"
                label="Seats"
                type="number"
                prepend-icon="airline_seat_recline_normal"
                required
              ></v-text-field>
              <v-text-field
                v-model="year"
                :rules="yearRules"
                label="Year"
                type="number"
                prepend-icon="date_range"
                required
              ></v-text-field>
              <v-select 
                prepend-icon="build"
                :items="carmakers"
                label="Carmaker"
                item-text="name"
                item-value="id"
                v-model="id"
                filled
                required
              >
              </v-select>
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
  import {mapActions, mapState} from 'vuex';
  import carsActions from '../../store/actions-types/carsActions';
  import router from '../../router';

  export default {
    data: function(){
      return {
        car: {},
        carmaker: null,
        valid: false,
        model: '',
        seats: null,
        year: null,
        modelRules: [
          v => !!v || 'Model is required',
          v => (v && v.length <= 50) || 'Model must be less than 50 characters'
        ],
        yearRules: [
          v => !!v || 'Year is required',
          v => (v >= 1900 && v <= new Date().getFullYear()) || 'Year must be between 1950 and current year'
        ],
        seatsRules: [
          v => !!v || 'Seats is required',
          v => (v >= 1 && v <= 20) || 'Seats must be between 1 and 20'
        ],
      }
    },
    methods: {
      ...mapActions([
        carsActions.CREATE_CAR
      ]),
      submit: async function(){
        if (this.$refs.form.validate()){
          if (this.carmaker.id != undefined){
            let payload = {
              "id": this.car.id,
              "name": this.name,
              "seats": this.seats,
              "year": this.year,
              "maker": this.carmaker
            };
            await this.UPDATE_CAR(payload);
          } else {
            let payload = {
              "model": this.model,
              "seats": this.seats,
              "year": this.year,
              "maker": this.carmaker
            };
            await this.CREATE_CAR(payload);
          }
          router.push({name: "cars_show"}); 
        } 
      },
      reset: function(){
        this.$refs.form.reset();
      }
    },
    computed: {
      ...mapState([
        'carmakers',
      ])
    }
  }
</script>






