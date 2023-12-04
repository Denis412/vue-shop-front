<template>
    <div v-if="modelValue" class="placing__popup" @click="onHide">
        <div class="placing__popup_shadow"></div>

        <div class="placing__popup_content" @click.stop>
            <p>Для оформления заказа заполните поле с электронной почтой</p>

            <app-button label="Ок" class="w-100p mt-32" @click="onOk" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: true,
    },
});
const emit = defineEmits(['update:modelValue', 'ok']);

const model = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});

const onHide = () => {
    model.value = false;
};

const onOk = () => {
    onHide();

    emit('ok');
};
</script>

<style scoped lang="scss">
.placing__popup {
    position: fixed;
    inset: 0;

    z-index: 1000000;
}

.placing__popup_shadow {
    position: fixed;
    inset: 0;
    background-color: #000;
    opacity: 0.7;

    z-index: 1;
}

.placing__popup_content {
    position: absolute;
    padding: 32px 24px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 24px;
    max-width: 416px;
    text-align: center;
}
</style>
