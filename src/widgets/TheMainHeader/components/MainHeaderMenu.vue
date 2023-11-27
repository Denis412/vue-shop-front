<template>
    <div class="main-header__menu">
        <icon-with-label
            v-for="item in items"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
            pointer
            @click="item.handler()"
        />

        <language-switch-with-icon />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { IconWithLabel } from '@features/IconWithLabel';
import { LanguageSwitchWithIcon, useSwitchLocale } from '@features/LanguageSwitch';

defineProps({
    languageConfig: {
        type: Object,
        default: () => ({
            language: 'RU',
            languages: ['RU', 'EN'],
        }),
    },
});
const emit = defineEmits(['selectItem', 'switchLang']);

const { getAttribute } = useSwitchLocale();

const items = reactive([
    {
        icon: 'shop',
        name: 'menu',
        label: getAttribute('menu'),
        handler() {
            emit('selectItem', this);
        },
    },
    {
        icon: 'cart',
        name: 'cart',
        label: getAttribute('cart'),
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
