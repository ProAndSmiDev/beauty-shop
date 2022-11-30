<script lang="ts">
import { socials } from '@/ts/constants/socials';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'BeautyShopFirstScreen',
    props: {
        firstScreenType: {
            type: String as PropType<string>,
            required: true,
            default: 'full',
            validator(value: string) {
                return ['banner', 'card', 'full'].includes(value);
            },
        },
        firstScreenInfo: {
            type: Object as PropType<object>,
            required: true,
            default: () => ({}),
        },
    },
    setup() {
        return {
            socials,
        };
    },
});
</script>

<template>
    <section
        class="bs-first-screen"
        :class="`bs-first-screen--is-${firstScreenType}`"
    >
        <div class="bs-first-screen__media">
            <picture class="bs-first-screen__pic">
                <source
                    :srcset="require(`@/assets/img/first-screen/${firstScreenInfo.picName}.webp`)"
                    type="image/webp"
                />

                <img
                    :src="require(`@/assets/img/first-screen/${firstScreenInfo.picName}.jpg`)"
                    alt="Beauty shop's photo"
                    class="bs-first-screen__img"
                />
            </picture>

            <ul class="bs-first-screen-socials bs-first-screen__socials">
                <li
                    v-for="(item, idx) in socials"
                    :key="`socials-item--${idx}`"
                    class="bs-first-screen-socials__item"
                >
                    <a
                        :href="item.url"
                        class="bs-first-screen-socials bs-first-screen-socials__link"
                        target="_blank"
                    >
                        <picture class="bs-first-screen-socials-link__pic">
                            <source
                                :srcset="require(`@/assets/img/socials/${item.pic}.webp`)"
                                type="image/webp"
                            />

                            <img
                                :src="require(`@/assets/img/socials/${item.pic}.png`)"
                                :alt="`We are in «${item.name}»`"
                                class="bs-first-screen-socials-link__img"
                            />
                        </picture>
                    </a>
                </li>
            </ul>
        </div>

        <div
            v-if="firstScreenType !== 'banner'"
            class="bs-first-screen-info bs-first-screen__info"
            :class="{ 'bs-first-screen-info--is-card': firstScreenType === 'card' }"
        >
            <h2 class="bs-first-screen-info__title">
                {{ firstScreenInfo.title }}
            </h2>

            <p
                class="bs-first-screen-info__promo"
                v-html="firstScreenInfo.promo"
            ></p>

            <div class="bs-first-screen-info__wrapper">
                <ul
                    v-if="firstScreenType === 'full'"
                    class="bs-first-screen-info-menu"
                >
                    <li class="bs-first-screen-info-menu__item">
                        <router-link
                            to="/makeup"
                            class="bs-first-screen-info-menu__link"
                            >Makeup</router-link
                        >
                    </li>
                    <li class="bs-first-screen-info-menu__item">
                        <router-link
                            to="/hairstyle"
                            class="bs-first-screen-info-menu__link"
                            >Hairstyle</router-link
                        >
                    </li>
                    <li class="bs-first-screen-info-menu__item">
                        <router-link
                            to="/dresses"
                            class="bs-first-screen-info-menu__link"
                            >Dresses</router-link
                        >
                    </li>
                </ul>

                <button
                    v-if="firstScreenInfo.btnText"
                    class="bs-first-screen-info__btn"
                >
                    <span class="bs-first-screen-info-btn__text">{{ firstScreenInfo.btnText }}</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/components/styles/BeautyShopFirstScreen/component';
</style>
