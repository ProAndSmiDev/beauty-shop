<script lang="ts">
    import { defineComponent } from 'vue';
    import { menu } from '@/ts/constants/menu';

    export default defineComponent({
        name: 'BeautyShopMenu',
        data() {
            return {
                menu,
            };
        },
    });
</script>

<template>
    <nav class="bs-menu">
        <router-link
            :to="menuItem.url"
            class="bs-menu__link"
            :title="menuItem.title"
            :key="`menu-item--${idx}`"
            v-for="(menuItem, idx) in menu"
        >
            {{ menuItem.text }}
        </router-link>
    </nav>
</template>

<style scoped lang="scss">
    @import '@/components/styles/BeautyShopMenu/component.scss';
</style>
