<template>
    <div class="icon-with-label">
        <span v-if="left">{{ label }}</span>

        <app-icon
:name="icon" fill="primary-text-color" />

        <span v-if="!left">{{ label }}</span>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    left: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped lang="scss">
.icon-with-label {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.75em;
    cursor: pointer;
}
</style>
