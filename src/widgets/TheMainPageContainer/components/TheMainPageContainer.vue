<template>
    <app-page-container>
        <slot>
            <router-view v-slot="{ Component }">
                <keep-alive :exclude="excludePages">
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </slot>
    </app-page-container>
</template>

<script setup>
import { reactive } from 'vue';
const excludePages = reactive([]);
</script>

<style scoped lang="scss"></style>
