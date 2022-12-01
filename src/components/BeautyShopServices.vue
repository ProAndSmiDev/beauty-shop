<script lang="ts">
    import { defineComponent } from 'vue';
    import { services } from '@/ts/constants/services';

    export default defineComponent({
        name: 'BeautyShopServices',
        data() {
            return {
                services,
            };
        },
    });
</script>

<template>
    <section class="bs-services">
        <h2 class="bs-services__title">Services</h2>

        <ul class="bs-services-list">
            <li
                v-for="(service, idx) in services"
                :key="`service-item--${idx}`"
                class="bs-services-list__item"
            ></li>
        </ul>
    </section>
</template>

<style scoped lang="scss"></style>
