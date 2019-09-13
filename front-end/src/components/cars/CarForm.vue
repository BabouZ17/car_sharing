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
                :carmakers="carmakers"
                label="Carmaker"
                filled
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
  export default {
    data: function(){
      return {
        car: {},
        valid: false,
        model: '',
        seats: null,
        year: null,
        carmakers: [],
        modelRules: [
          v => !!v || 'Model is required',
          v => (v && v.length <= 50) || 'Model must be less than 50 characters',
        ],
        yearRules: [
          v => !!v || 'Year is required',
          v => (v && 1900 <= v <= Date.now().getFullYear()) || 'Year must be between 1950 and current year'
        ],
        seatsRules: [
          v => !!v || 'Seats is required',
          v => (1 <= v <= 20) || 'Seats must be between 1 and 20'
        ],
      }
    },
    methods: {
      validate: function(){
        if (this.$refs.form.validate()){
          console.log("valid");
        }
      },
      reset: function(){
        this.$refs.form.reset();
      }
    }
  }
</script>






