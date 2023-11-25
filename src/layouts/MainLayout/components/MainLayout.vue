<template>
    <div>
        <router-view v-slot="{ Component }">
            <keep-alive :exclude="excludePages">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const excludePages = reactive([]);
</script>
