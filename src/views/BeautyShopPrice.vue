<script lang="ts">
    import { defineComponent } from 'vue';
    import { firstScreenPrice } from '@/ts/constants/firstScreenPrice';
    import BeautyShopFirstScreen from '@/components/BeautyShopFirstScreen.vue';

    export default defineComponent({
        name: 'BeautyShopPrice',
        components: {
            BeautyShopFirstScreen,
        },
        setup() {
            return {
                firstScreenPrice,
            };
        },
        metaInfo: {
            title: '«Beauty Shop» - Price',
        },
    });
</script>

<template>
    <div class="bs-price">
        <BeautyShopFirstScreen
            firstScreenType="banner"
            :firstScreenInfo="firstScreenPrice"
            class="bs-price__banner"
        />
    </div>
</template>

<style scoped lang="scss">
    @import '@/styles/BeautyShopPrice/component.scss';
</style>
