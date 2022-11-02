<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeautyShopMenu',
});
</script>

<template>
  <nav class="bs-menu">
    <router-link class="bs-menu__link" to="/">Home</router-link>
    <router-link class="bs-menu__link" to="/makeup">Makeup</router-link>
    <router-link class="bs-menu__link" to="/hairstyle">Hairstyle</router-link>
    <router-link class="bs-menu__link" to="/dresses">Dresses</router-link>
    <router-link class="bs-menu__link" to="/price">Price</router-link>
    <router-link class="bs-menu__link" to="/about-us">About us</router-link>
  </nav>
</template>

<style scoped lang="scss">
@import '@/components/styles/BeautyShopMenu/component';
</style>
