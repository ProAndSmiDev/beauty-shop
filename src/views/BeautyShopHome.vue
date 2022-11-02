<template>
  <div class="bs-home">
    <BeautyShopFirstScreen
      firstScreenType="full"
      :firstScreenInfo="firstScreenHome"
      class="bs-home__banner"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { firstScreenHome } from '@/ts/constants/firstScreenHome';
import BeautyShopFirstScreen from '@/components/BeautyShopFirstScreen.vue';

export default defineComponent({
  name: 'BeautyShopHome',
  components: {
    BeautyShopFirstScreen,
  },
  setup() {
    return {
      firstScreenHome,
    };
  },
  metaInfo: {
    title: '«Beauty Shop» - Main Page',
  },
});
</script>

<style scoped lang="scss">
@import '@/styles/BeautyShopHome/component';
</style>
