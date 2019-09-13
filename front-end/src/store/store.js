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

export default new vuex.Store ({
    state: {
        // other
        dialog_modal: false,
        loading: false,
        alerts: [
            {"uuid": uuid(), "message": "testing the app", "type": "info"},
            {"uuid": uuid(), "message": "error on the app", "type": "error"}
        ],
        
        // Cars
        cars: [],

        // Carmakers
        carmakers: []
    },
    mutations: {
        // Other
        [Mutations.SET_DIALOG_MODAL](state, value){
            state.dialog_modal = value;
        },
        [Mutations.SET_LOADING](state, value){
            state.loading = value;
        },
        [Mutations.ADD_ALERT](state, payload){
            // check that the alert does not exist already
            if (state.alerts.find(alert => alert.message == payload.message) instanceof undefined){
                state.alerts.push({"uuid": payload.uuid, "message": payload.message, "type": payload.type});
            }
        },
        [Mutations.REMOVE_ALERT](state, payload){
            //let index = state.alerts.map(function(alert) {return alert.uuid;}).indexOf(payload.uuid);
            //if (index != -1){
            //    state.alerts.splice(index, 1);
            //}
        },
        // Cars
        [carMutations.SET_CARS](state, cars){
            state.cars = cars;
        },
        // Carmakers
        [carmakerMutations.SET_CARMAKERS](state, carmakers){
            state.carmakers = carmakers;
        }
    }, 
    actions: {
        // Other
        [Actions.OPEN_DIALOG_MODAL]({commit}){
            commit(Mutations.SET_DIALOG_MODAL, true);
        },
        [Actions.CLOSE_DIALOG_MODAL]({commit}){
            commit(Mutations.SET_DIALOG_MODAL, false);
        },
        [Actions.START_LOADING]({commit}){
            commit(Mutations.SET_LOADING, true);
        },
        [Actions.STOP_LOADING]({commit}){
            commit(Mutations.SET_LOADING, false);
        },
        [Actions.ADD_ALERT]({commit}, payload){
            commit(Mutations.ADD_ALERT, payload);
        },
        [Actions.REMOVE_ALERT]({commit}, payload){
            commit(Mutations.REMOVE_ALERT, payload);
        },
        // Cars
        async [carActions.CREATE_CAR]({commit}, payload){
            await carApi.postItem(payload);
            commit(carMutations.SET_CARS, await carApi.getItems());
        },
        async [carActions.UPDATE_CAR]({commit}, payload){
            await carApi.updateItem(payload);
            //let alert = {
            //    "uuid": uuid(), 
            //    "message": "Carmaker updated!", 
            //    "type": "success"
            //};
            //commit(Mutations.ADD_ALERT, alert);
            commit(carMutations.SET_CARS, await carApi.getItems());
        },
        async [carActions.GET_CARS]({commit}){
            commit(Mutations.SET_LOADING, true);
            commit(carMutations.SET_CARS, await carApi.getItems());
            commit(Mutations.SET_LOADING, false);
        }, 
        async [carActions.DELETE_CAR]({commit}, car_id){
            await carApi.deleteItem(car_id);
            commit(carMutations.SET_CARS, await carApi.getItems());
        },
        // Carmakers
        async [carmakerActions.CREATE_CARMAKER]({commit}, payload){
            await carmakerApi.postItem(payload);
            //commit(Mutations.ADD_ALERT, "New carmaker added!");
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
        },
        async [carmakerActions.UPDATE_CARMAKER]({commit}, payload){
            await carmakerApi.updateItem(payload);
            //let alert = {
            //    "uuid": uuid(), 
            //    "message": "Carmaker updated!", 
            //    "type": "success"
            //};
            //commit(Mutations.ADD_ALERT, alert);
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
        },
        async [carmakerActions.DELETE_CARMAKER]({commit}, carmaker_id){
            await carmakerApi.deleteItem(carmaker_id);
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
        },
        async [carmakerActions.GET_CARMAKER]({commit}){
            await carmakerApi.getItem(carmaker_id);
        },
        async [carmakerActions.GET_CARMAKERS]({commit}){
            commit(Mutations.SET_LOADING, true);
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
            commit(Mutations.SET_LOADING, false);
        },
    }
})