<template>
    <icon-with-label icon="language" :label="currentLanguage" @click="onSwitch" />
</template>

<script setup>
import { ref } from 'vue';
import { IconWithLabel } from '@features/IconWithLabel';

const currentLanguage = ref('RU');

const onSwitch = () => {};
</script>

<style scoped lang="scss"></style>
