import Vue from 'vue';
import Router from 'vue-router';

import Cars from './views/cars.vue';
import CarForm from './components/cars/CarForm.vue';

import Carmakers from './views/carmakers.vue';
import CarmakerForm from './components/carmakers/CarmakerForm.vue';
import Contact from './views/contact.vue';

import NavBar from './components/navigation/NavBar.vue';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/nav'
    },
    {
      path: '/nav',
      name: 'Navigation',
      component: NavBar,
      children: [
        {
          path: 'car/new',
          name: 'car_new',
          component: CarForm
        },
        {
          path: 'car/:car_id/update',
          name: 'car_update',
          component: CarForm,
          props: true
        },
        {
          path: 'cars',
          name: 'cars_show',
          component: Cars
        },
        {
          path: 'carmaker/new',
          name: 'carmaker_new',
          component: CarmakerForm
        },
        {
          path: 'carmaker/:carmaker_id/update',
          name: 'carmaker_update',
          component: CarmakerForm,
          props: true
        },
        {
          path: 'carmakers',
          name: 'carmakers_show',
          component: Carmakers
        },
        {
          path: 'contact',
          name: 'contact_show',
          component: Contact
        }
      ],
    },
  ]
});

export default router;