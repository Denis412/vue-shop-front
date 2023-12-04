<template>
    <div class="authorization__page">
        <authorization-with-username-form />
    </div>
</template>

<script setup>
import { AuthorizationWithUsernameForm } from '@features/AuthorizationWithUsername';
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
