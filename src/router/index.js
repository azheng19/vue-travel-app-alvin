import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BrazilView from '../views/BrazilView.vue';
import HawaiiView from '../views/HawaiiView.vue';
import JamaicaView from '../views/JamaicaView.vue';
import PanamaView from '../views/PanamaView.vue';

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
    component: BrazilView,
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: HawaiiView,
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: JamaicaView,
  },
  {
    path: '/panama',
    name: 'panama',
    component: PanamaView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
