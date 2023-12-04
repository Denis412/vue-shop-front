<template>
    <app-card class="product__item">
        <div class="product__item_inner">
            <img class="product__item_img" :src="product.image" alt="Картинка товара" />

            <div class="product__item-type mb-16 mt-16">
                <span>{{ product.type }} тип</span>
            </div>

            <div class="product__item-name">
                <span class="text-card-title">{{ product.label }}</span>
            </div>

            <div class="product__item-price">
                <div class="product__item-price__inner">
                    <div>
                        <span>{{ product.price }} Р</span>
                    </div>

                    <div class="product__item-cart pointer">
                        <app-icon name="cart" fill="#fff" @click="onAddToCart" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <pre>{{ product }}</pre> -->
    </app-card>
</template>

<script setup>
import axios from '@app/axios';

const props = defineProps({
    product: {
        type: Object,
        required: true,
        default: () => ({}),
    },
});

const onAddToCart = async () => {
    await axios.post(
        'product-in-cart',
        {
            product: {
                objectId: props.product.id,
            },
        },
        {
            withCredentials: true,
        },
    );
};
</script>

<style scoped lang="scss">
.product__item {
    max-width: 306px;
    width: 100%;
    padding: 32px 40px;
    z-index: 1;
    border-radius: 24px;
    background-color: #fff;
    min-height: 436px;

    &-type {
        color: rgba(198, 159, 141, 1);
        padding: 4px 16px;
        border: 2px solid #f1e7e3;
        border-radius: 20px;
    }

    &-name {
    }

    &-price {
        display: flex;
        width: 100%;
        align-items: end;
        flex: 1;

        &__inner {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
    }

    &-cart {
        border-radius: 50%;
        background-color: #f97316;
        padding: 10px;
    }

    &_img {
        max-width: 196px;
        max-height: 196px;
        width: 100%;
        // height: 100%;
    }

    &_inner {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        height: 100%;
    }
}
</style>
