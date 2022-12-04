<script lang="ts">
    import { defineComponent } from 'vue';
    import { firstScreenMakeup } from '@/ts/constants/firstScreenMakeup';
    import BeautyShopFirstScreen from '@/components/BeautyShopFirstScreen.vue';

    export default defineComponent({
        name: 'BeautyShopMakeup',
        components: {
            BeautyShopFirstScreen,
        },
        setup() {
            return {
                firstScreenMakeup,
            };
        },
        metaInfo: {
            title: '«Beauty Shop» - Makeup',
        },
    });
</script>

<template>
    <div class="bs-makeup">
        <BeautyShopFirstScreen
            firstScreenType="card"
            :firstScreenInfo="firstScreenMakeup"
            class="bs-makeup__banner"
        />
    </div>
</template>

<style scoped lang="scss">
    @import '@/styles/BeautyShopMakeup/component.scss';
</style>
