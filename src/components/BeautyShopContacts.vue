<template>
  <div class="bs-contacts">
    <div class="bs-contacts-mail bs-contacts__mail">
      <p class="bs-contacts-mail__title">E-mail</p>
      <a
        href="mailto:frenchbraiding030@gmail.com"
        class="bs-contacts-mail__info">
        Frenchbraiding030@gmail.com
      </a>
    </div>

    <div class="bs-contacts-phone bs-contacts__phone">
      <a href="tel:+14034645112" class="bs-contacts-phone__info">+1&nbsp;403&nbsp;464&nbsp;5112</a>
      <p class="bs-contacts-phone__place">Calgary, Canada</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BeautyShopContacts',
});
</script>

<style scoped lang="scss">
@import '@/components/styles/BeautyShopContacts/component';
</style>
