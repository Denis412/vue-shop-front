<template>
    <Teleport to="body">
        <Transition name="slide" :duration="3000">
            <div v-if="model" class="app-notification" v-bind="$attrs">
                <slot>
                    <p style="color: white">{{ label }}</p>
                </slot>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
});
const emit = defineEmits({
    'update:modelValue': null,
});

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});

watch(model, (newModel) => {
    console.log('model', newModel);
    if (!newModel) return;

    setTimeout(() => {
        model.value = false;
    }, 3000);
});
</script>

<style scoped lang="scss">
.app-notification {
    position: fixed;
    top: -30px;
    padding: 4px 16px;
    border-radius: 8px;
    left: 50%;
    z-index: 10000000000;
    transform: translate(-50%);
    background-color: green;

    &.opened {
        top: 20px;
    }
}

.slide-enter-from,
.slide-leave-to {
    top: -30px;
}

.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-to,
.slide-leave-from {
    top: 20px;
}
</style>
