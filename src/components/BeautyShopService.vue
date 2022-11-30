<script lang="ts">
    import { defineComponent, PropType } from 'vue';

    export default defineComponent({
        name: 'BeautyShopService',
        props: {
            serviceData: {
                type: Object as PropType<object>,
                required: true,
                default: () => ({}),
            },
        },
    });
</script>

<template>
    <article class="bs-service">
        <picture class="bs-service__pic"></picture>

        <div class="bs-service__info">
            <h3 class="bs-service__title">In our works we use high quality cosmetics and well known brands</h3>
            <p class="bs-service__descr">
                Luxio, KEUNE, Barbara and Aravia.<br />
                Our masters are constantly improving and <br />
                taking advanced training courses, so you don't <br />
                have to worry about the quality of our work
            </p>
            <div class="bs-service__navs">
                <a
                    href="#"
                    class="bs-service__link"
                >
                    See more
                </a>
                <a
                    href="#"
                    class="bs-service__link"
                >
                    Price
                </a>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss"></style>
