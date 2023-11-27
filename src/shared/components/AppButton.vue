<template>
    <button class="app-button" :class="classes" @click="onClick">
        <div ref="focusHelper" class="focus__helper"></div>

        <slot>
            {{ label }}
        </slot>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    disable: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['click']);

const classes = computed(() => ({
    pointer: !props.disable && !props.loading,
    disabled: props.disable || props.loading,
}));

const onClick = (e) => {
    if (props.disable || props.loading) return;

    emit('click', e);
};
</script>

<style lang="scss">
.app-button {
    position: relative;
    padding: 12px 20px;
    color: #fff;
    border: 2px solid #fb923c;
    background-color: #f97316;
    border-radius: 80px;

    transition: all 0.3s ease;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;

    &.disabled {
        border: 2px solid #f97316;

        & > .focus__helper {
            background-color: #000;
            opacity: 0.1;
        }
    }
}

.focus__helper {
    position: absolute;
    inset: 0;
    background-color: #fff;
    border-radius: inherit;
    opacity: 0;

    transition: all 0.3s ease;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;

    &:hover {
        opacity: 0.2;
    }
}
</style>
