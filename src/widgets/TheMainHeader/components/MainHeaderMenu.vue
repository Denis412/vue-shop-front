<template>
    <div class="main-header__menu">
        <main-header-menu-item v-for="item in items" :key="item.label" :item="item" />

        <language-switch-with-icon />
        <app-icon
            name="logout"
            fill="#800000"
            class="logout__icon pointer flex items-center"
            @click="onLogout"
        />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import MainHeaderMenuItem from './MainHeaderMenuItem.vue';
import { LanguageSwitchWithIcon, useSwitchLocale } from '@features/LanguageSwitch';
import axios from '@app/axios';

const router = useRouter();

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
        notify: true,
        handler() {
            emit('selectItem', this);
        },
    },
]);

const onLogout = async () => {
    await axios.post('users/logout');

    await router.push({
        name: 'login',
    });
};
</script>

<style scoped lang="scss">
.main-header__menu {
    display: flex;
    gap: 2rem;
}

.logout__icon {
    // position: absolute;
    // top: 5px;
    // right: 5px;
}
</style>
