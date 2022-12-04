<script lang="ts">
    import { defineComponent } from 'vue';
    import { services } from '@/ts/constants/services';
    import BeautyShopService from '@/components/BeautyShopService.vue';

    export default defineComponent({
        name: 'BeautyShopServices',
        components: { BeautyShopService },
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
            >
                <BeautyShopService
                    :serviceData="service"
                    class="bs-services-list__service"
                />
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
    @import '@/components/styles/BeautyShopServices/component.scss';
</style>
