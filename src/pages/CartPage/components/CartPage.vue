<template>
    <the-main-page class="text-primary">
        <h2 class="text-h2 text-center mt-68 mb-120">Корзина</h2>

        <div class="content">
            <div class="cart-list">
                <template v-if="productsResult.length">
                    <div
                        v-for="product in productsResult"
                        :key="product.id"
                        class="cart-list__item"
                    >
                        <app-icon
                            name="trash"
                            fill="primary-text-color"
                            class="pointer cart-list__item_delete"
                            @click="onRemoveProduct(product)"
                        />
                        <img
                            class="cart-list__item_img"
                            :src="product.product.image"
                            alt="Изображение товара"
                        />

                        <div class="cart-list__item_label text-card-title">
                            {{ product.product.label }}
                        </div>

                        <div class="cart-list__item_counter">
                            <app-button
                                label="-"
                                class="cart-list__item_counter__btn"
                                @click="onDecrement(product)"
                            />

                            <span style="display: block">{{ product.count }}</span>

                            <app-button
                                label="+"
                                class="cart-list__item_counter__btn"
                                @click="onIncrement(product)"
                            />
                        </div>

                        <div class="cart-list__item_price">{{ product.product.price }} Р</div>
                    </div>
                </template>

                <div v-else class="flex items-center justify-center h-100p">
                    <h2 class="text-h2 text-center">Корзина пуста</h2>
                </div>
            </div>

            <app-form class="plain-order__form" @submit="onPlacing">
                <label>
                    Почта:
                    <app-input
                        v-model="email"
                        placeholder="Введите почту"
                        type="email"
                        style="margin-top: 16px"
                    />
                </label>

                <div class="plain-section">
                    <header class="plain-section__header flex w-100p justify-between">
                        <span>Товары, {{ allCount }} шт.</span>

                        <span>{{ allPrice }} Р</span>
                    </header>

                    <div class="plain-section__final flex w-100p justify-between">
                        <span>ИТОГО</span>

                        <span>{{ allPrice }} Р</span>
                    </div>

                    <app-button
                        label="Заказать"
                        class="w-100p"
                        type="submit"
                        @click="onCreateOrder"
                    />

                    <footer class="plain-section__footer">
                        После оплаты, чек придёт на вашу электронную почту
                    </footer>
                </div>
            </app-form>
        </div>

        <placing-an-order-popup v-model="isNotValidEmail" />

        <app-notification v-model="isCreatedOrder" label="Заказ создан" />
    </the-main-page>
</template>

<script setup>
import { PlacingAnOrderPopup } from '@features/PlacingAnOrder';
import { TheMainPage } from '@widgets/TheMainPage';
import { computed, onBeforeMount, ref } from 'vue';
import createOrder from '../api/createOrder';
import axios from '@app/axios';

const productsResult = ref([]);

const email = ref('');
const isNotValidEmail = ref(false);
const isCreatedOrder = ref(false);

const allPrice = computed(() =>
    productsResult.value.reduce((sum, product) => sum + product.product.price * product.count, 0),
);
const allCount = computed(() =>
    productsResult.value.reduce((sum, product) => sum + product.count, 0),
);

const onPlacing = () => {
    if (!email.value?.trim().length) isNotValidEmail.value = true;
};

const onCreateOrder = async () => {
    if (!email.value?.trim().length || !productsResult.value?.length) return;

    await createOrder(productsResult.value, email.value);

    isCreatedOrder.value = true;

    email.value = '';
    productsResult.value = [];
};

const onDecrement = async (product) => {
    if (product.count <= 1) return;

    product.count--;

    await axios.patch(`product-in-cart/${product.id}`, {
        count: product.count,
    });
};
const onIncrement = async (product) => {
    product.count++;

    await axios.patch(`product-in-cart/${product.id}`, {
        count: product.count,
    });
};

const onRemoveProduct = async (product) => {
    await axios.delete(`product-in-cart/${product.id}`);

    productsResult.value = productsResult.value.filter((pr) => pr.id !== product.id);
};

onBeforeMount(async () => {
    const { data: productsInCartData } = await axios.post('product-in-cart/my', {
        page: 1,
        perPage: 100,
    });

    productsResult.value = productsInCartData.data;
});
</script>

<style scoped lang="scss">
.content {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    gap: 24px;
}

.cart-list {
    max-width: 856px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 24px;
    padding: 64px 24px;

    border-radius: 64px;
    background-color: rgba(212, 183, 170, 0.4);
    background-image: url('@app/assets/images/popularity_bg.svg');
}

.cart-list__item {
    position: relative;
    overflow-x: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 24px;
    border-radius: 24px;
    background-color: #fff;
}

.cart-list__item_delete {
    position: absolute;
    right: 24px;
    top: 24px;
}

.cart-list__item_img {
    border-radius: 50%;
    max-width: 196px;
    width: 100%;
    min-height: 196px;
}

.cart-list__item_label {
}

.cart-list__item_price {
}

.cart-list__item_counter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    user-select: none;
    max-width: 123px;
    width: 100%;

    &__btn {
        padding: 6px 12px;
        border-radius: 4px;
    }
}

.plain-order__form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex-wrap: nowrap;
}

.plain-section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border-radius: 24px;
    padding: 32px 24px;
    background-color: #fff;
}
</style>
