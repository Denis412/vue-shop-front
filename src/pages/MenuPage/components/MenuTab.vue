<template>
    <div
        class="menu__tab pointer"
        :class="{
            selected: selected,
        }"
    >
        <span class="text-card-title">{{ tab.title }}</span>
    </div>
</template>

<script setup>
defineProps({
    tab: {
        type: Object,
        default: () => ({}),
    },
    selected: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped lang="scss">
.menu__tab {
    &.selected {
        border-bottom: 4px solid #f97316;
    }
}
</style>
