<template>
    <div class="app-header" :class="classes">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    height: {
        type: String,
        default: '101px',
    },
    fixed: {
        type: Boolean,
        default: true,
    },
});

const classes = computed(() => ({
    'fixed-top': props.fixed,
    'absolute-top': !props.fixed,
}));
</script>

<style scoped lang="scss">
.app-header {
    min-height: v-bind(height);
    height: v-bind(height);
    z-index: 1000;
}
</style>
