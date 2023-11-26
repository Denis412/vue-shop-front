<template>
    <div class="app-footer" :class="classes">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    height: {
        type: String,
        default: '252px',
    },
    fixed: {
        type: Boolean,
        default: false,
    },
});

const classes = computed(() => ({
    'app-footer__relative': !props.fixed,
    'fixed-bottom': props.fixed,
    'app-footer__fixed': props.fixed,
}));
</script>

<style scoped lang="scss">
.app-footer {
    min-height: v-bind(height);
    height: v-bind(height);
}

.app-footer__relative {
    position: relative;
    left: 0;
    right: 0;
}

.app-footer__fixed {
    z-index: 1000;
}
</style>
