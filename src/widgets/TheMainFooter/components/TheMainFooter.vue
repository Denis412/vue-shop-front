<template>
    <app-footer class="main-footer">
        <div class="main-footer__inner">
            <div class="flex">
                <div class="main-footer__navigation">
                    <div class="main-footer__inner_title">Навигация</div>

                    <router-link :to="{ name: 'home' }">Главная</router-link>
                    <router-link :to="{ name: 'menu' }">Меню</router-link>
                    <router-link :to="{ name: 'cart' }">Корзина</router-link>
                </div>

                <div class="main-footer__contacts">
                    <div class="main-footer__inner_title">Контакты</div>

                    <icon-with-label
                        icon="geodata"
                        fill-icon="white"
                        label="г. Москва, Авиамоторная ул., 8А"
                        gap="0.5rem"
                        text-class="max-content"
                    />

                    <icon-with-label
                        icon="mail"
                        fill-icon="white"
                        label="Fragrante@mail.ru"
                        gap="0.5rem"
                        text-class="max-content"
                    >
                        <template #right="{ label }">
                            <a :href="`mailto:${label}`">{{ label }}</a>
                        </template>
                    </icon-with-label>

                    <icon-with-label
                        icon="phone"
                        fill-icon="none"
                        stroke-icon="white"
                        label="+7 (999) 999-99-99"
                        gap="0.5rem"
                        text-class="max-content"
                    >
                        <template #right="{ label }">
                            <a :href="`tel:${label}`">{{ label }}</a>
                        </template>
                    </icon-with-label>
                </div>
            </div>
        </div>
    </app-footer>
</template>

<script setup>
import { IconWithLabel } from '@features/IconWithLabel';
</script>

<style scoped lang="scss">
.main-footer {
    width: 100%;
    color: #fff;
    background-color: #000;

    &__inner {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        height: 100%;
        margin: 0 auto;
        width: 100%;

        & > div {
            margin: 0 auto;
            gap: 64px;
        }

        &_title {
            font-size: 20px;
        }
    }

    &__navigation {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    &__contacts {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-width: max-content;
        width: 100%;
    }
}
</style>
