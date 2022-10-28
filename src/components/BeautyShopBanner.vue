<template>
  <section class="bs-banner">
    <picture class="bs-banner__pic">
      <source srcset="" type="image/webp">

      <img src="" alt="Beauty shop banner's photo">
    </picture>

    <div class="bs-banner-info bs-banner__info">
      <h2 class="bs-banner-info__title">
        We're more than just hairstyle
      </h2>

      <p class="bs-banner-info__promo">
        At Frenchbraiding, we do more than hairstyle. We also offer a range of services:
      </p>

      <div class="bs-banner-info__wrapper">
        <ul class="bs-banner-info-menu">
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

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeautyShopBanner',
});
</script>

<style scoped lang="scss">

</style>
