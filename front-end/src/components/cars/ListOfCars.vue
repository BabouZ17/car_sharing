<template>
  <v-container>
    <v-layout v-if="loading" justify-center>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-layout>
    <v-layout v-if="!loading">
      <v-flex md2>
        <h1>{{ title }}</h1>
      </v-flex>
      <v-flex offset-md8>
        <div class="text-right">
          <v-btn color="teal accent-3" @click="createCar">
            New Car
            <v-icon>add</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
    <br />
    <v-layout v-if="!loading">
      <v-flex>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Model</th>
              <th class="text-left">Maker</th>
              <th class="text-left">Seats</th>
              <th class="text-left">Year</th>
              <th class="text-left">Created on</th>
              <th class="text-left">Edit</th>
              <th class="text-left">Delete</th>
            </tr>
          </thead>
          <tbody v-if="cars">
            <tr v-for="car in cars" :key="car.id">
              <td>{{ car.id }}</td>
              <td>{{ car.model }}</td>
              <td>{{ car.maker }}</td>
              <td>{{ car.seats }}</td>
              <td v-if="car.year < 2008" class="redYear">{{ car.year }}</td>
              <td v-else class="greenYear">{{ car.year }}</td>
              <td>{{ parseDate(car.created_on) }}</td>
              <td>
                <a @click="updateCar(car.id)">
                  <v-icon>edit</v-icon>
                </a>
              </td>
              <td>
                <a @click="deleteCar(car.id)">
                  <v-icon color="red">delete</v-icon>
                </a>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import carActions from "../../store/actions-types/carsActions";
import Actions from "../../store/actions-types/Actions";
import router from "../../router";

export default {
  props: {
    title: {
      type: String,
      default: "Cars"
    }
  },
  data: function() {
    return {};
  },
  mounted: function() {
    this.GET_CARS();
  },
  methods: {
    ...mapActions([carActions.GET_CARS]),
    parseDate: function(date) {
      return new Date(date).toLocaleString();
    },
    createCar: function() {
      if (this.$router.name != "car_new") {
        router.push({ name: "car_new" });
      }
    },
    updateCar: function(car_id) {
      if (this.$router.name != "car_update") {
        router.push({ name: "car_update", params: { car_id: car_id } });
      }
    },
    deleteCar: function(car_id) {
      console.log("deleting the car " + car_id);
    }
  },
  computed: {
    ...mapState(["cars", "loading"])
  }
};
</script>

<style>
.redYear {
  color: red;
}
.greenYear {
  color: green;
}
</style>