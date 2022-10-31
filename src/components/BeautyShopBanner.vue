<template>
  <section
    class="bs-banner"
    :class="`bs-banner--is-${bannerType}`"
  >
    <picture class="bs-banner__pic">
      <source srcset="@/assets/img/banner/bg.webp" type="image/webp">

      <img src="@/assets/img/banner/bg.jpg" alt="Beauty shop banner's photo">
    </picture>

    <div
      v-if="bannerType !== 'banner'"
      class="bs-banner-info bs-banner__info"
      :class="{'bs-banner-info--is-card' : bannerType === 'card'}"
    >
      <h2 class="bs-banner-info__title">
        We're more than just hairstyle
      </h2>

      <p class="bs-banner-info__promo">
        At Frenchbraiding, we do more than hairstyle. We also offer a range of services:
      </p>

      <div class="bs-banner-info__wrapper">
        <ul
          v-if="bannerType === 'full'"
          class="bs-banner-info-menu"
        >
          <li class="bs-banner-info-menu__item">
            <router-link to="/makeup">Makeup</router-link>
          </li>
          <li class="bs-banner-info-menu__item">
            <router-link to="/hairstyle">Hairstyle</router-link>
          </li>
          <li class="bs-banner-info-menu__item">
            <router-link to="/dresses">Dresses</router-link>
          </li>
        </ul>

        <button class="bs-banner-info__btn">
          Call us for free consultation
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BeautyShopBanner',
  props: {
    bannerType: {
      type: String as PropType<string>,
      required: true,
      default: 'full',
      validator(value: string) {
        return ['banner', 'card', 'full'].includes(value);
      },
    },
  },
});
</script>

<style scoped lang="scss">
@import '@/components/styles/BeautyShopBanner/component';
</style>
