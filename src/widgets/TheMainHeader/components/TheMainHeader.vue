<template>
    <app-header class="main__header">
        <h1 class="text-h1">Fragrante</h1>

        <main-header-menu @select-item="onSelectItem" />
    </app-header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import MainHeaderMenu from './MainHeaderMenu.vue';

const router = useRouter();

const onSelectItem = async (item) => {
    await router.push({
        name: item.name,
    });
};
</script>

<style scoped lang="scss">
.main__header {
    display: flex;
    justify-content: space-between;
    gap: 32px;

    min-height: $header-height;
    background-color: $primary-page-bg;

    padding: 20px 72px 16px 72px;
}
</style>
