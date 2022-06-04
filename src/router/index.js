import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/details/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetailsView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
