import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ '../views/DestinationDetailsView.vue'
      ),
    children: [
      {
        path: ':experienceSlug',
        name: 'experienceDetails',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ '../views/ExperienceDetailsView.vue'
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: 'notFound' });
      }
    },
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === '#experience') {
          position.offset = { y: 250 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
});

export default router;
