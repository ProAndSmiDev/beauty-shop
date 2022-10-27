<template>
  <div id="app" class="bs">
    <header class="bs__header">
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
import BeautyShopFooter from '@/components/BeautyShopFooter.vue';
import BeautyShopMenu from '@/components/BeautyShopMenu.vue';

export default {
  name: 'BeautyShop',
  components: {
    BeautyShopMenu,
    BeautyShopFooter,
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/BeautyShop/component';
</style>
