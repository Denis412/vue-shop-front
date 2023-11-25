<template>
    <icon-with-label
        icon="language"
        class="lang__switch"
        :label="currentLanguage"
        @click="switchLocale"
    />
</template>

<script setup>
import { computed } from 'vue';
import { IconWithLabel } from '@features/IconWithLabel';
import useSwitchLocale from '../composables/useSwitchLocale';

const { switchLocale, locale } = useSwitchLocale();
const currentLanguage = computed(() => locale.value.toUpperCase());
</script>

<style scoped lang="scss">
.lang__switch {
    user-select: none;
}
</style>
