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
import { registration } from '@features/Registration';
import { login } from '@features/Authorization';

defineOptions({
    async beforeRouteEnter() {
        try {
            if (!localStorage.getItem('username')) await registration();

            await login();
        } catch (e) {
            console.log('e');
        }

        return true;
    },
});
</script>

<style scoped lang="scss"></style>
