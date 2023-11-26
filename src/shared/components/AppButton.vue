<template>
    <button>
        <slot>
            {{ label }}
        </slot>
    </button>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
});
</script>
