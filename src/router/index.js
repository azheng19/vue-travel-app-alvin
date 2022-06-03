import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import(/* webpackChunkName: "brazil" */ '../views/BrazilView.vue'),
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import(/* webpackChunkName: "hawaii" */ '../views/HawaiiView.vue'),
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import(/* webpackChunkName: "jamaica" */ '../views/JamaicaView.vue'),
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/* webpackChunkName: "panama" */ '../views/PanamaView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
