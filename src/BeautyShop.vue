<template>
  <div id="app" class="bs">
    <header class="bs__header">
      <BeautyShopLogo class="bs__logo" />
      <BeautyShopMenu class="bs__menu" />
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <BeautyShopFooter class="bs__footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import BeautyShopMenu from '@/components/BeautyShopMenu.vue';
import BeautyShopLogo from '@/components/BeautyShopLogo.vue';
import BeautyShopFooter from '@/components/BeautyShopFooter.vue';

export default {
  name: 'BeautyShop',
  components: {
    BeautyShopLogo,
    BeautyShopMenu,
    BeautyShopFooter,
  },
  computed: {
    imgDir() {
      return '@/assets/img/';
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/BeautyShop/component';
</style>
