<template>
    <div class="item" :class="classes">
        <icon-with-label
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
            :notify="item.notify"
            pointer
            @click="item.handler()"
        />
    </div>
</template>

<script setup>
import { IconWithLabel } from '@features/IconWithLabel';
import { watch, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
    routeName: {
        type: String,
        default: '',
    },
});

const isActive = ref(false);

const classes = computed(() => ({
    active: isActive.value,
}));

watch(route, (newRoute) => {
    if (newRoute.name === props.routeName) {
        isActive.value = true;
    } else {
        isActive.value = false;
    }
});
</script>

<style scoped lang="scss">
.item {
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
        border-bottom: 2px solid #f97316;
    }
}
.active {
    border-bottom: 2px solid #f97316;
}
</style>
