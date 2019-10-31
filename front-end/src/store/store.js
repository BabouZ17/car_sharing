import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

import Mutations from './mutations-types/Mutations';
import Actions from './actions-types/Actions';

import carmakerMutations from './mutations-types/carmakersMutations';
import carmakerActions from './actions-types/carmakersActions';
import carmakerApi from '../api/carmakersApi';

import carMutations from './mutations-types/carsMutations';
import carActions from './actions-types/carsActions';
import carApi from '../api/carsApi';

import uuid from 'uuid/v4';

Vue.use(vuex, axios);

export default new vuex.Store({
  state: {
    // other
    dialog_modal: false,
    loading: false,
    alerts: [
      { "uuid": uuid(), "message": "yeah", "type": "success" },
    ],

    // Cars
    cars: [],

    // Carmakers
    carmakers: [],
    counter: 0
  },
  mutations: {
    // Other
    [Mutations.SET_DIALOG_MODAL](state, value) {
      state.dialog_modal = value;
    },
    [Mutations.SET_LOADING](state, value) {
      state.loading = value;
    },
    [Mutations.ADD_ALERT](state, payload) {
      // check that the alert does not exist already
      //if (state.alerts.find(alert => alert.message == payload.message) instanceof undefined) {
      state.alerts.push({ "uuid": payload.uuid, "message": payload.message, "type": payload.type });
      //}
    },
    [Mutations.REMOVE_ALERT](state, payload) {
      if (payload.hasOwnProperty('uuid') && payload.uuid != undefined) {
        state.alerts = state.alerts.filter((alert) => {
          return alert.uuid != payload.uuid;
        })
      }
    },
    // Cars
    [carMutations.SET_CARS](state, payload) {
      state.cars = payload.data;
    },
    // Carmakers
    [carmakerMutations.SET_CARMAKERS](state, payload) {
      state.carmakers = payload.data;
    },
    [Mutations.INCREMENT](state) {
      state.counter += 1;
    }
  },
  actions: {
    // Other
    [Actions.OPEN_DIALOG_MODAL]({ commit }) {
      commit(Mutations.SET_DIALOG_MODAL, true);
    },
    [Actions.CLOSE_DIALOG_MODAL]({ commit }) {
      commit(Mutations.SET_DIALOG_MODAL, false);
    },
    [Actions.START_LOADING]({ commit }) {
      commit(Mutations.SET_LOADING, true);
    },
    [Actions.STOP_LOADING]({ commit }) {
      commit(Mutations.SET_LOADING, false);
    },
    [Actions.INCREMENT]({ commit }) {
      commit(Mutations.INCREMENT);
    },
    [Actions.ADD_ALERT]({ commit }, payload) {
      commit(Mutations.ADD_ALERT, payload);
    },
    [Actions.REMOVE_ALERT]({ commit }, payload) {
      commit(Mutations.REMOVE_ALERT, payload);
    },
    // Cars
    async [carActions.CREATE_CAR]({ commit }, payload) {
      await carApi.postItem(payload);
      commit(carMutations.SET_CARS, await carApi.getItems());
    },
    async [carActions.UPDATE_CAR]({ commit }, payload) {
      let result = await carApi.updateItem(payload);
      let alert = {
        "uuid": uuid(),
        "message": "",
        "type": ""
      };
      if (result.status == 201) {
        alert.message = `Car ${payload.model} updated!`;
        alert.type = "success";
      } else {
        alert.message = result;
        alert.type = "error";
      }
      commit(Mutations.ADD_ALERT, alert);
      commit(carMutations.SET_CARS, await carApi.getItems());
    },
    async [carActions.GET_CARS]({ commit }) {
      commit(Mutations.SET_LOADING, true);
      commit(carMutations.SET_CARS, await carApi.getItems());
      commit(Mutations.SET_LOADING, false);
    },
    async [carActions.DELETE_CAR]({ commit }, car_id) {
      await carApi.deleteItem(car_id);
      commit(carMutations.SET_CARS, await carApi.getItems());
    },
    // Carmakers
    async [carmakerActions.CREATE_CARMAKER]({ commit }, payload) {
      let result = await carmakerApi.postItem(payload);
      let alert = {
        "uuid": uuid(),
        "message": "",
        "type": ""
      };
      if (result.status == 201) {
        alert.message = `Carmaker ${payload.name} created!`;
        alert.type = "success";
      } else {
        alert.message = result;
        alert.type = "error";
      }
      commit(Mutations.ADD_ALERT, alert);
      commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
    },
    async [carmakerActions.UPDATE_CARMAKER]({ commit }, payload) {
      await carmakerApi.updateItem(payload);
      let alert = {
        "uuid": uuid(),
        "message": "",
        "type": ""
      };
      if (result.status == 201) {
        alert.message = `Carmaker ${payload.name} updated!`;
        alert.type = "success";
      } else {
        alert.message = result;
        alert.type = "error";
      }
      commit(Mutations.ADD_ALERT, alert);
      commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
    },
    async [carmakerActions.DELETE_CARMAKER]({ commit }, carmaker_id) {
      await carmakerApi.deleteItem(carmaker_id);
      commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
    },
    async [carmakerActions.GET_CARMAKER]({ commit }) {
      commit(Mutations.SET_LOADING, true);
      commit(carMutations.SET_CARS, await carmakerApi.getItems());
      commit(Mutations.SET_LOADING, false);
    },
    async [carmakerActions.GET_CARMAKERS]({ commit }) {
      commit(Mutations.SET_LOADING, true);
      commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
      commit(Mutations.SET_LOADING, false);
    },
  }
})