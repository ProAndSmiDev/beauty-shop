<template>
  <p class="bs-copyright">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeautyShopCopyright',
});
</script>

<style scoped lang="scss">
@import '@/components/styles/BeautyShopFooter/component';
</style>
