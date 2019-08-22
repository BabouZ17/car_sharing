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

Vue.use(vuex, axios);

export default new vuex.Store ({
    state: {
        // other
        last_backend_request_status: '',
        dialog_modal: false,
        
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
        [Mutations.SET_LAST_BACKEND_REQUEST_STATUS](state, value){
            state.last_backend_request_status = value;
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
        // Cars
        async [carActions.CREATE_CAR]({commit}, payload){
            let response = await carApi.postItem(payload);
            commit(Mutations.SET_LAST_BACKEND_REQUEST_STATUS, response.status);
            commit(carMutations.SET_CARS, await carApi.getItems());
        },
        async [carActions.GET_CARS]({commit}){
            commit(carMutations.SET_CARS, await carApi.getItems());
        }, 
        async [carActions.DELETE_CAR]({commit}, car_id){
            await carApi.deleteItem(car_id);
            commit(carMutations.SET_CARS, await carApi.getItems());
        },
        // Carmakers
        async [carmakerActions.CREATE_CARMAKER]({commit}, payload){
            let response = await carmakerApi.postItem(payload);
            commit(Mutations.SET_LAST_BACKEND_REQUEST_STATUS, response.status);
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
        },
        async [carmakerActions.DELETE_CARMAKER]({commit}, carmaker_id){
            await carmakerApi.deleteItem(carmaker_id);
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
        },
        async [carmakerActions.GET_CARMAKERS]({commit}){
            commit(carmakerMutations.SET_CARMAKERS, await carmakerApi.getItems());
        },
    }
})