<template>
    <div class="svg__container">
        <div v-if="notify" class="notification__icon"></div>

        <svg
            width="1em"
            height="1em"
            :style="style"
            :stroke="stroke"
            :viewBox="viewBox"
            xmlns="http://www.w3.org/2000/svg"
            v-html="path"
        />

        <slot name="default"> </slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import icons from '../constants/icons';
import colors from '../constants/colors';

const props = defineProps({
    size: String,
    fill: String,
    stroke: String,
    name: String,
    notify: Boolean,
});

const propColor = computed(() => props.fill ?? props.stroke);
const color = computed(() => colors[propColor.value] ?? propColor.value);
const icon = computed(() => icons[props.name]);
const path = computed(() =>
    icon.value.slice(icon.value.indexOf('>') + 1, icon.value.indexOf('</svg>')),
);

const style = computed(() => ({
    'font-size': props.size || '24px',
    [props.fill ? 'fill' : 'stroke']: color.value,
}));

const slice1 = computed(() => icon.value.slice(icon.value.indexOf('viewBox')));
const slice2 = computed(() => slice1.value.slice(slice1.value.indexOf('"') + 1));
const viewBox = computed(() => slice2.value.slice(0, slice2.value.indexOf('"')));
</script>

<style scoped lang="scss">
svg {
    display: inline-block;
    vertical-align: middle;

    transition: fill 0.3s;
}

.svg__container {
    position: relative;
}

.notification__icon {
    position: absolute;
    top: -3px;
    right: -3px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: #f97316;
}
</style>
