<template>
    <div class="app-page-container">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.app-page-container {
    position: relative;
    margin-top: $header-height;
    min-height: inherit;

    background-color: $primary-page-bg;
}
</style>
