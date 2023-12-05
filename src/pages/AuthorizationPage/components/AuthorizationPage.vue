<template>
    <div class="authorization__page">
        <div class="mb-120">
            <h2 class="text-h2 text-center text-primary">Авторизация</h2>
        </div>

        <authorization-with-username-form />
    </div>
</template>

<script setup>
import { AuthorizationWithUsernameForm } from '@features/AuthorizationWithUsername';
</script>

<style scoped lang="scss">
.authorization__page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;

    background-color: $primary-page-bg;
}
</style>
