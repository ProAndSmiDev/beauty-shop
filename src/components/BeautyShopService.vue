<script lang="ts">
    import { IServices } from '@/ts/interfaces/IServices';
    import { defineComponent, PropType, computed, ComputedRef } from 'vue';

    export default defineComponent({
        name: 'BeautyShopService',
        props: {
            serviceData: {
                type: Object as PropType<IServices>,
                required: true,
                default: () => ({}),
            },
        },
        data(props) {
            const serviceClasses: ComputedRef<object> = computed(() => ({
                'bs-service--is-inverted': props.serviceData.isInverted,
            }));

            return {
                serviceClasses,
            };
        },
    });
</script>

<template>
    <article
        class="bs-service"
        :class="serviceClasses"
    >
        <picture class="bs-service__pic">
            <source
                :srcset="require(`@/assets/img/services/${serviceData.pic.name}.webp`)"
                type="image/webp"
            />

            <img
                :src="require(`@/assets/img/services/${serviceData.pic.name}.jpg`)"
                :alt="serviceData.pic.alt"
            />
        </picture>

        <div class="bs-service__info">
            <h3 class="bs-service__title">
                {{ serviceData.title }}
            </h3>
            <p
                class="bs-service__promo"
                v-html="serviceData.promo"
            ></p>
            <div class="bs-service__navs">
                <router-link
                    v-for="(link, idx) in serviceData.navs"
                    :key="`service-link--${idx}`"
                    :to="link.url"
                    :title="link.title"
                    class="bs-service__link"
                >
                    {{ link.text }}
                </router-link>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
    @import '@/components/styles/BeautyShopService/component';
</style>
