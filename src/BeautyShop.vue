<script lang="ts">
    import BeautyShopMenu from '@/components/BeautyShopMenu.vue';
    import BeautyShopLogo from '@/components/BeautyShopLogo.vue';
    import BeautyShopContacts from '@/components/BeautyShopContacts.vue';
    import BeautyShopCopyright from '@/components/BeautyShopCopyright.vue';

    export default {
        name: 'BeautyShop',
        components: {
            BeautyShopLogo,
            BeautyShopMenu,
            BeautyShopContacts,
            BeautyShopCopyright,
        },
    };
</script>

<template>
    <div
        id="app"
        class="bs page"
    >
        <div class="u-wrapper bs__wrapper">
            <header class="bs-header bs__header">
                <div class="bs-header__top">
                    <BeautyShopLogo class="bs-header__logo" />
                    <BeautyShopMenu class="bs-header__menu" />
                </div>

                <BeautyShopContacts class="bs__contacts" />
            </header>
            <main class="bs-main bs__main">
                <router-view />
            </main>
            <footer class="bs-footer bs__footer">
                <BeautyShopCopyright class="bs-footer__copyright">
                    &copy; Copyright 2021 Frenchbraiding. All Rights Reserved. Visit us at social pages
                </BeautyShopCopyright>
            </footer>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '@/styles/BeautyShopHome/component';
</style>
