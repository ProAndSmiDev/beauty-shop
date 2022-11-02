<template>
  <div class="bs-about-us">
    <BeautyShopFirstScreen
      firstScreenType="card"
      :firstScreenInfo="firstScreenAboutUs"
      class="bs-about-us__banner"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { firstScreenAboutUs } from '@/ts/constants/firstScreenAboutUs';
import BeautyShopFirstScreen from '@/components/BeautyShopFirstScreen.vue';

export default defineComponent({
  name: 'BeautyShopAboutUs',
  components: {
    BeautyShopFirstScreen,
  },
  setup() {
    return {
      firstScreenAboutUs,
    };
  },
  metaInfo: {
    title: '«Beauty Shop» - About Us',
  },
});
</script>

<style scoped lang="scss">
@import '@/styles/BeautyShopAboutUs/component';
</style>
