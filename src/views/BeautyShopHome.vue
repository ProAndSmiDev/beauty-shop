<script lang="ts">
    import { defineComponent } from 'vue';
    import { firstScreenHome } from '../ts/constants/firstScreenHome';
    import BeautyShopServices from '../components/BeautyShopServices.vue';
    import BeautyShopFirstScreen from '../components/BeautyShopFirstScreen.vue';

    export default defineComponent({
        name: 'BeautyShopHome',
        components: {
            BeautyShopServices,
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

<template>
    <div class="bs-home">
        <BeautyShopFirstScreen
            firstScreenType="full"
            :firstScreenInfo="firstScreenHome"
            class="bs-home__banner"
        />
        <BeautyShopServices class="bs__services" />
    </div>
</template>

<style scoped lang="scss">
    @import '../styles/BeautyShopHome/component.scss';
</style>
