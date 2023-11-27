<template>
    <div class="home-page text-primary">
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

        <home-page-section :title="$t('services.title')">
            <service-cards-list />
        </home-page-section>

        <home-page-section
            class="mt-120 mb-120"
            :title="$t('popularity.title')"
            :subtitle="$t('popularity.subtitle')"
        >
            <products-list>
                <template #actions>
                    <app-button :label="$t('popularity.button')" />
                </template>
            </products-list>
        </home-page-section>
    </div>
</template>

<script setup>
import { ServiceCardsList } from '@widgets/ServiceCardsList';
import { ProductsList } from '@widgets/ProductsList';
import HomePageSection from './HomePageSection.vue';
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
