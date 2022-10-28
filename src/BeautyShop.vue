<template>
  <div id="app" class="bs page">
    <header class="bs__header">
      <div class="bs-header__top">
        <BeautyShopLogo class="bs__logo" />
        <BeautyShopMenu class="bs__menu" />
      </div>

      <BeautyShopContacts class="bs__contacts" />
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
import BeautyShopContacts from '@/components/BeautyShopContacts.vue';

export default {
  name: 'BeautyShop',
  components: {
    BeautyShopContacts,
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
