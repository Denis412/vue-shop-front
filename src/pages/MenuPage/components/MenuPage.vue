<template>
    <the-main-page class="text-primary">
        <h2 class="text-h2 text-center mt-68 mb-120">{{ $t('menuPage.title') }}</h2>

        <menu-tabs v-model="filter" @filter="onFilter" />

        <products-list :products="productsResult" class="mt-120" />
    </the-main-page>
</template>

<script setup>
import { ref, onBeforeMount, watch } from 'vue';
import { TheMainPage } from '@widgets/TheMainPage';
import { ProductsList } from '@widgets/ProductsList';
import MenuTabs from './MenuTabs.vue';
import axios from '@app/axios';

const productsResult = ref([]);

// const products = reactive([
//     {
//         id: 1,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
//     {
//         id: 2,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'coffee',
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
//     {
//         id: 4,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'cold_drink',
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
//     {
//         id: 4,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
//     {
//         id: 4,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//         category: 'dessert',
//     },
// ]);

const filter = ref(null);

watch(filter, async (newFilter) => {
    const { data: productsData } = await axios.post('product/all', {
        page: 1,
        perPage: 100,
        where: newFilter ?? null,
    });

    productsResult.value = productsData.data;

    console.log('new products', productsResult.value);
});

// const filteredProducts = computed(() =>
//     productsResult.value.filter(
//         (product) => product.category === filter.value?.category ?? productsResult.value,
//     ),
// );
const onFilter = (tab) => {
    console.log('filter', tab);
};

onBeforeMount(async () => {
    const { data: productsData } = await axios.post('product/all', {
        page: 1,
        perPage: 100,
    });

    productsResult.value = productsData.data;
});
</script>

<style scoped lang="scss"></style>
