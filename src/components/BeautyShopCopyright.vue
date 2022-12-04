<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'BeautyShopCopyright',
    });
</script>

<template>
    <p class="bs-copyright">
        <slot></slot>
    </p>
</template>

<style scoped lang="scss">
    @import '@/components/styles/BeautyShopCopyright/component.scss';
</style>
