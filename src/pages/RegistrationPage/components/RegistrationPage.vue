<template>
    <div class="authorization__page">
        <registration-with-username-form />
    </div>
</template>

<script setup>
import { RegistrationWithUsernameForm } from '@features/RegistrationWithUsername';
</script>

<style scoped lang="scss">
.authorization__page {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
}
</style>
