<template>
  <router-link class="bs-logo" to="/">
    <picture class="bs-logo__pic">
      <source :srcset="require('@/assets/img/logo.webp')" type="image/webp" />

      <img :src="require('@/assets/img/logo.jpg')" alt="Beauty shop's logo" class="bs-logo__img" />
    </picture>
  </router-link>
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
