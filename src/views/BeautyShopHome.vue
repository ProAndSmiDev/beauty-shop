<template>
  <div class="bs-home">
    <BeautyShopBanner bannerType="full" class="bs-home__banner" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BeautyShopBanner from '@/components/BeautyShopBanner.vue';

export default defineComponent({
  name: 'BeautyShopHome',
  components: {
    BeautyShopBanner,
  },
  metaInfo: {
    title: '«Beauty Shop» - Main Page',
  },
});
</script>

<style scoped lang="scss">
@import '@/styles/BeautyShop/component';
</style>
