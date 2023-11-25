<template>
    <div class="main-header__menu">
        <icon-with-label
            v-for="item in items"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
            @click="item.handler()"
        />

        <language-switch-with-icon />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { IconWithLabel } from '@features/IconWithLabel';
import { LanguageSwitchWithIcon } from '@features/LanguageSwitch';

const emit = defineEmits(['selectItem', 'switchLang']);

defineProps({
    languageConfig: {
        type: Object,
        default: () => ({
            language: 'RU',
            languages: ['RU', 'EN'],
        }),
    },
});

const items = reactive([
    {
        icon: 'shop',
        label: 'Меню',
        handler() {
            emit('selectItem', this);
        },
    },
    {
        icon: 'cart',
        label: 'Корзина',
        handler() {
            emit('selectItem', this);
        },
    },
]);
</script>

<style scoped lang="scss">
.main-header__menu {
    display: flex;
    gap: 2rem;
}
</style>
