<template>
    <section class="home-page__section">
        <slot v-if="title" name="title" :title="title">
            <h2 class="home-page__section-title text-h2 text-center" :class="titleClasses">
                {{ title }}
            </h2>
        </slot>

        <slot v-if="subtitle" name="subtitle" :subtitle="subtitle">
            <span class="home-page__section-subtitle mt-16" :class="subtitleClasses">
                {{ subtitle }}
            </span>
        </slot>

        <slot>
            <div class="home-page__section-content">
                <slot name="content"></slot>
            </div>
        </slot>
    </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    subtitle: {
        type: String,
        default: '',
    },
});

const titleClasses = computed(() => ({
    'mb-64': !props.subtitle?.length,
}));

const subtitleClasses = computed(() => ({
    'mb-64': props.subtitle?.length,
}));
</script>

<style scoped lang="scss">
.home-page__section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    text-align: center;

    &-title {
        max-width: 856px;
    }
    &-subtitle {
        max-width: 856px;
    }

    &-content {
    }
}
</style>
