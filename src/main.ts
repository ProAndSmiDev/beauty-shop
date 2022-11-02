import '@/styles/helpers/globals.scss';
import Vue from 'vue';
import BeautyShop from './BeautyShop.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(BeautyShop),
}).$mount('#app');
