import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter, { RouteConfig } from 'vue-router';
import BeautyShopHome from '../views/BeautyShopHome.vue';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: BeautyShopHome,
  },
  {
    path: '/makeup',
    name: 'makeup',
    component: () => import(/* webpackChunkName: "BeautyShopMakeup" */ '../views/BeautyShopMakeup.vue'),
  },
  {
    path: '/hairstyle',
    name: 'hairstyle',
    component: () => import(/* webpackChunkName: "BeautyShopHairstyle" */ '../views/BeautyShopHairstyle.vue'),
  },
  {
    path: '/dresses',
    name: 'dresses',
    component: () => import(/* webpackChunkName: "BeautyShopDresses" */ '../views/BeautyShopDresses.vue'),
  },
  {
    path: '/price',
    name: 'price',
    component: () => import(/* webpackChunkName: "BeautyShopAbout" */ '../views/BeautyShopPrice.vue'),
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: () => import(/* webpackChunkName: "BeautyShopAbout" */ '../views/BeautyShopAboutUs.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
