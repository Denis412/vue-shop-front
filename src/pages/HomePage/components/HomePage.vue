<template>
    <the-main-page class="text-primary">
        <!-- <pre>{{ productsResult }}</pre> -->
        <div class="home-page__banner">
            <div class="home-page__banner-text__container">
                <h2 class="text-h2">{{ $t('banner.title') }}</h2>

                <p>
                    {{ $t('banner.subtitle') }}
                </p>

                <app-button :label="$t('banner.button')" />
            </div>

            <div class="home-page__banner_img__container" />
        </div>

        <file-uploader @updateUrl="onUpdateUrl" />

        <home-page-section :title="$t('services.title')">
            <service-cards-list />
        </home-page-section>

        <home-page-section
            class="mt-120 mb-120"
            :title="$t('popularity.title')"
            :subtitle="$t('popularity.subtitle')"
        >
            <products-list :products="productsResult">
                <template #actions>
                    <app-button :label="$t('popularity.button')" @click="redirectToMenu" />
                </template>
            </products-list>
        </home-page-section>
    </the-main-page>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { ServiceCardsList } from '@widgets/ServiceCardsList';
import { ProductsList } from '@widgets/ProductsList';
import { TheMainPage } from '@widgets/TheMainPage';
import { FileUploader } from '../../../features/FileUpload';
import HomePageSection from './HomePageSection.vue';
import { useRouter } from 'vue-router';
import axios from '@app/axios';
// import axios from 'axios';

const router = useRouter();

const productsResult = ref([]);

const onUpdateUrl = async (url) => {
    console.log('url', url);
};

// const products = reactive([
//     {
//         id: 1,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 2,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 4,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 4,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 4,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
//     {
//         id: 3,
//         name: 'sdjfjsdf',
//         image: '/assets/images/test_coffee.png',
//         type: 1,
//         price: 325,
//     },
// ]);

const redirectToMenu = async () => {
    await router.push({
        name: 'menu',
    });
};

onBeforeMount(async () => {
    const { data: productsData } = await axios.post('https://localhost:3000/product/all', {
        page: 1,
        perPage: 100,
    });

    productsResult.value = productsData.data;
});
</script>

<style scoped lang="scss">
.home-page {
    padding: 0 72px;
    height: 100%;
    background-color: $primary-page-bg;

    // padding-bottom: 252px;
}

.home-page__banner {
    display: flex;
    flex-wrap: nowrap;
    padding-top: 111px;
}

.home-page__banner_img__container {
    position: relative;
    top: -80px;
    left: -50px;
    max-width: 526px;
    width: 100%;
    min-height: 564px;

    background-image: url('@app/assets/images/home_banner.svg');
    background-repeat: no-repeat;
    background-size: contain;
}

.home-page__banner-text__container {
    width: 70%;

    & p {
        margin-top: 32px;
        max-width: 635px;
        margin-bottom: 64px;
    }
}

.home-page__banner_img {
    position: absolute;
    top: -80px;
    left: -240px;
}

.menu__section_title {
    margin: 0 auto;
    max-width: 856px;
    margin-bottom: 64px;
}
</style>
