<template>
    <the-main-page class="text-primary">
        <h2 class="text-h2 text-center mt-68 mb-120">{{ $t('cartPage.title') }}</h2>

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
                            {{ product.product[locale === 'ru' ? 'label' : 'label_en'] }}
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
                    <h2 class="text-h2 text-center">{{ $t('cartPage.empty') }}</h2>
                </div>
            </div>

            <app-form class="plain-order__form">
                <label>
                    {{ $t('cartPage.form.email.label') }}:
                    <app-input
                        v-model="email"
                        :placeholder="$t('cartPage.form.email.placeholder')"
                        type="email"
                        style="margin-top: 16px"
                    />
                </label>

                <div class="coupon__container">
                    <label>
                        {{ $t('cartPage.form.coupon.label') }}:
                        <app-input
                            v-model="coupon"
                            :placeholder="$t('cartPage.form.coupon.placeholder')"
                            style="margin-top: 16px"
                        />
                    </label>

                    <app-button
                        :label="$t('cartPage.form.coupon.button')"
                        @click.stop="onAcceptCoupon"
                    />
                </div>

                <div class="plain-section">
                    <header class="plain-section__header flex w-100p justify-between">
                        <span>
                            {{ $t('cartPage.form.products') }}, {{ allCount }}
                            {{ $t('cartPage.form.length') }}
                        </span>

                        <span>{{ allPrice }} Р</span>
                    </header>

                    <div class="plain-section__final flex w-100p justify-between">
                        <span>{{ $t('cartPage.form.all') }}</span>

                        <!-- <pre>{{ couponObject }}</pre> -->

                        <span
                            :class="{
                                discount: couponObject,
                            }"
                        >
                            {{ allPrice }} Р
                        </span>

                        <span v-if="couponObject">{{ allDiscountPrice }} Р</span>
                    </div>

                    <app-button
                        :label="$t('cartPage.form.button')"
                        class="w-100p"
                        type="submit"
                        @click="onCreateOrder"
                    />

                    <footer class="plain-section__footer">
                        {{ $t('cartPage.form.notification') }}
                    </footer>
                </div>
            </app-form>
        </div>

        <placing-an-order-popup v-model="isNotValidEmail" />

        <app-notification v-model="isCreatedOrder" :label="$t('cartPage.orderNotify')" />
        <app-notification v-model="isCouponNotFound" :label="$t('cartPage.couponNotify')" />
    </the-main-page>
</template>

<script setup>
import { PlacingAnOrderPopup } from '@features/PlacingAnOrder';
import { TheMainPage } from '@widgets/TheMainPage';
import { computed, onBeforeMount, ref } from 'vue';
import createOrder from '../api/createOrder';
import axios from '@app/axios';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const productsResult = ref([]);

const couponObject = ref(null);
const coupon = ref('');
const email = ref('');
const isNotValidEmail = ref(false);
const isCouponNotFound = ref(false);
const isCreatedOrder = ref(false);

const allPrice = computed(() =>
    productsResult.value.reduce((sum, product) => sum + product.product.price * product.count, 0),
);
const allDiscountPrice = computed(
    () =>
        allPrice.value -
        allPrice.value * (couponObject.value ? couponObject.value.discount / 100 : 1),
);

const allCount = computed(() =>
    productsResult.value.reduce((sum, product) => sum + product.count, 0),
);

// const onPlacing = () => {
//     if (!email.value?.trim().length) isNotValidEmail.value = true;
// };

const onCreateOrder = async () => {
    if (!email.value?.trim().length) {
        isNotValidEmail.value = true;
        return;
    }
    if (!email.value?.trim().length || !productsResult.value?.length) return;

    await createOrder(
        productsResult.value,
        email.value,
        allDiscountPrice.value ? allDiscountPrice.value : allPrice.value,
    );

    couponObject.value = null;

    isCreatedOrder.value = true;

    email.value = '';
    productsResult.value = [];
};

const onAcceptCoupon = async () => {
    if (!coupon.value?.trim().length) return;

    const couponResult = await axios.get(`coupon/${coupon.value}`);

    if (!Object.keys(couponResult?.data).length) {
        isCouponNotFound.value = true;
        return;
    }

    couponObject.value = couponResult.data;
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

.discount {
    text-decoration: line-through;
}

.cart-list__item_label {
}

.cart-list__item_price {
}

.coupon__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    gap: 8px;
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
