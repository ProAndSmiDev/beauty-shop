import '@/styles/helpers/globals.scss';
import Vue from 'vue';
import BeautyShop from './BeautyShop.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(BeautyShop),
}).$mount('#app');
