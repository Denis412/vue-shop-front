<template>
    <div class="authorization__page">
        <div class="mb-120">
            <h2 class="text-h2 text-center text-primary">Регистрация</h2>
        </div>

        <registration-with-username-form />
    </div>
</template>

<script setup>
import { RegistrationWithUsernameForm } from '@features/RegistrationWithUsername';
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
