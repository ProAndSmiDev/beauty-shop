<template>
  <picture class="bs-logo">
    <source srcset="@/assets/img/logo.webp" type="image/webp">

    <img
      src="@/assets/img/logo.jpg"
      alt="Логотип магазина красоты" class="bs-logo__img"
    >
  </picture>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeautyShopLogo',
});
</script>

<style scoped lang="scss">
@import '@/components/styles/BeautyShopLogo/component';
</style>
