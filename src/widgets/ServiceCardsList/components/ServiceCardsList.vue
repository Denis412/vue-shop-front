<template>
    <div class="service__cards">
        <service-card v-for="card in cards" :key="card.text" v-bind="card" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import ServiceCard from './ServiceCard.vue';

const cards = reactive([
    {
        image: 'equipment',
        text: 'Оборудование',
    },
    {
        image: 'coffee_options',
        text: 'Варианты кофе',
    },
    {
        image: 'coffee',
        text: 'Кофе с собой',
    },
    {
        image: 'confectionery',
        text: 'Кондитерские изделия',
    },
    {
        image: 'selected_grains',
        text: 'Отборные зерна',
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
