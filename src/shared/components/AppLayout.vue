<template>
    <div class="app-layout">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: $primary-page-bg;
}
</style>
