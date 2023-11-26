<template>
    <div class="main__layout gray-y-scrollbar">
        <the-main-header />

        <the-main-page-container>
            <router-view v-slot="{ Component }">
                <keep-alive :exclude="excludePages">
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </the-main-page-container>

        <the-main-footer />
    </div>
</template>

<script setup>
import { TheMainHeader } from '@widgets/TheMainHeader';
import { TheMainPageContainer } from '@widgets/TheMainPageContainer';
import { TheMainFooter } from '@widgets/TheMainFooter';
import { reactive } from 'vue';

const excludePages = reactive([]);
</script>

<style scoped lang="scss">
.main__layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: $primary-page-bg;
}
</style>
