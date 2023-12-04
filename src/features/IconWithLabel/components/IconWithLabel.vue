<template>
    <div class="icon-with-label" :class="classes">
        <slot :label="label" :icon="icon">
            <slot v-if="left" name="left" :label="label">
                <span :class="textClasses">{{ label }}</span>
            </slot>

            <slot name="icon" :icon="icon">
                <app-icon :name="icon" :fill="fillIcon" :stroke="strokeIcon" :notify="notify" />
            </slot>

            <slot name="append"></slot>

            <slot v-if="!left" name="right" :label="label">
                <span :class="textClasses">{{ label }}</span>
            </slot>
        </slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    notify: {
        type: Boolean,
        default: false,
    },
    left: {
        type: Boolean,
        default: false,
    },
    fillIcon: {
        type: String,
        default: 'primary-text-color',
    },
    strokeIcon: {
        type: String,
        default: '',
    },
    gap: {
        type: String,
        default: '0.75rem',
    },
    pointer: {
        type: Boolean,
        default: false,
    },
    textClass: {
        type: String,
        default: '',
    },
});

const classes = computed(() => ({
    pointer: props.pointer,
}));

const textClasses = computed(() =>
    props.textClass.split(' ').reduce((acc, cl) => {
        acc[cl] = true;

        return acc;
    }, {}),
);
</script>

<style scoped lang="scss">
.icon-with-label {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: v-bind(gap);
}
</style>
