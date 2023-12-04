<template>
    <div class="products__list">
        <div class="products__list_bg"></div>

        <products-list-item v-for="product in products" :key="product.id" :product="product" />

        <div class="products__list_actions">
            <slot name="actions"> </slot>
        </div>
    </div>
</template>

<script setup>
// import { reactive } from 'vue';
import ProductsListItem from './ProductsListItem.vue';

defineProps({
    products: {
        type: Array,
        default: () => [],
    },
    columns: {
        type: String,
        default: '1fr 1fr 1fr',
    },
    rows: {
        type: String,
        default: '',
    },
});
</script>

<style scoped lang="scss">
.products__list {
    display: grid;
    grid-template-columns: v-bind(columns);
    row-gap: 32px;
    column-gap: 120px;
    position: relative;
    padding-left: 68px;
    padding-right: 68px;
    padding-bottom: 32px;

    &_bg {
        position: absolute;
        top: 104px;
        left: 0;
        right: 0;
        bottom: 0;

        border-radius: 64px;
        background-color: rgba(212, 183, 170, 0.4);
        background-image: url('@app/assets/images/popularity_bg.svg');
    }
}

.products__list_actions {
    grid-column-start: 1;
    grid-column-end: 4;
}
</style>
