<template>
    <input v-model="model" :type="type" class="app-input" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});
</script>

<style scoped lang="scss">
.app-input {
    width: 100%;
    border: none;
    border-radius: 24px;
    padding: 4px 8px;
    min-height: 56px;

    &:focus {
        outline: none;
    }
}
</style>
