<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import { useSwitchLocale } from '@features/LanguageSwitch';

onMounted(() => {
    if (!localStorage.getItem('locale')) {
        useSwitchLocale().setLocale(import.meta.env.VITE_DEFAULT_LANGUAGE);
        localStorage.setItem('locale', import.meta.env.VITE_DEFAULT_LANGUAGE);
    }
});
</script>
