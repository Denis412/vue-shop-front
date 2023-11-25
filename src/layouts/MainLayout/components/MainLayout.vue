<template>
    <div class="main__layout">
        <the-main-header />

        <router-view v-slot="{ Component }">
            <keep-alive :exclude="excludePages">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup>
import { TheMainHeader } from '@widgets/TheMainHeader';
import { reactive } from 'vue';

const excludePages = reactive([]);
</script>

<style scoped lang="scss">
.main__layout {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>
