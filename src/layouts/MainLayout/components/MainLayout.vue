<template>
    <app-layout class="gray-y-scrollbar">
        <the-main-header />
        <the-main-page-container />
        <the-main-footer />
    </app-layout>
</template>

<script setup>
import { TheMainHeader } from '@widgets/TheMainHeader';
import { TheMainPageContainer } from '@widgets/TheMainPageContainer';
import { TheMainFooter } from '@widgets/TheMainFooter';
</script>

<style scoped lang="scss"></style>
