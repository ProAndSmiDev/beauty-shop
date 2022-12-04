<script lang="ts">
    import { defineComponent } from 'vue';
    import { firstScreenHairstyle } from '@/ts/constants/firstScreenHairstyle';
    import BeautyShopFirstScreen from '@/components/BeautyShopFirstScreen.vue';

    export default defineComponent({
        name: 'BeautyShopHairstyle',
        components: {
            BeautyShopFirstScreen,
        },
        setup() {
            return {
                firstScreenHairstyle,
            };
        },
        metaInfo: {
            title: '«Beauty Shop» - Hairstyle',
        },
    });
</script>

<template>
    <div class="bs-hairstyle">
        <BeautyShopFirstScreen
            firstScreenType="card"
            :firstScreenInfo="firstScreenHairstyle"
            class="bs-hairstyle__banner"
        />
    </div>
</template>

<style scoped lang="scss">
    @import '@/styles/BeautyShopHairstyle/component.scss';
</style>
