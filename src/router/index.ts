import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueRouter, { RouteConfig } from 'vue-router';
import BeautyShopHome from '../views/BeautyShopHome.vue';
import BeautyShopMakeup from '../views/BeautyShopMakeup.vue';
import BeautyShopDresses from '../views/BeautyShopDresses.vue';
import BeautyShopHairstyle from '../views/BeautyShopHairstyle.vue';
import BeautyShopPrice from '../views/BeautyShopPrice.vue';
import BeautyShopAboutUs from '../views/BeautyShopAboutUs.vue';

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
        component: BeautyShopMakeup,
    },
    {
        path: '/hairstyle',
        name: 'hairstyle',
        component: BeautyShopHairstyle,
    },
    {
        path: '/dresses',
        name: 'dresses',
        component: BeautyShopDresses,
    },
    {
        path: '/price',
        name: 'price',
        component: BeautyShopPrice,
    },
    {
        path: '/about-us',
        name: 'aboutUs',
        component: BeautyShopAboutUs,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
