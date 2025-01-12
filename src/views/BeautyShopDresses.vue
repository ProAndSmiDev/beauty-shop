<script lang="ts">
    import { defineComponent } from 'vue';
    import { firstScreenDresses } from '../ts/constants/firstScreenDresses';
    import BeautyShopFirstScreen from '../components/BeautyShopFirstScreen.vue';

    export default defineComponent({
        name: 'BeautyShopDresses',
        components: {
            BeautyShopFirstScreen,
        },
        setup() {
            return {
                firstScreenDresses,
            };
        },
        metaInfo: {
            title: '«Beauty Shop» - Dresses',
        },
    });
</script>

<template>
    <div class="bs-dresses">
        <BeautyShopFirstScreen
            firstScreenType="card"
            :firstScreenInfo="firstScreenDresses"
            class="bs-dresses__banner"
        />
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/BeautyShopDresses/component.scss';
</style>
