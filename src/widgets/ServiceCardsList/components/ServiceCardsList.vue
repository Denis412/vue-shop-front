<template>
    <div class="service__cards">
        <service-card v-for="card in cards" :key="card.text" v-bind="card" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import ServiceCard from './ServiceCard.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n({ useScope: 'global' });

const cards = reactive([
    {
        image: 'equipment',
        text: computed(() => t('services.list.equipment')),
    },
    {
        image: 'coffee_options',
        text: computed(() => t('services.list.coffeeOptions')),
    },
    {
        image: 'coffee',
        text: computed(() => t('services.list.coffee')),
    },
    {
        image: 'confectionery',
        text: computed(() => t('services.list.confectionery')),
    },
    {
        image: 'selected_grains',
        text: computed(() => t('services.list.selectedGrains')),
    },
]);
</script>

<style scoped lang="scss">
.service__cards {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
}
</style>
