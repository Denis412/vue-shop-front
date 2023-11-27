<template>
    <div class="home-page text-primary">
        <div class="home-page__banner">
            <div class="home-page__banner-text__container">
                <h2 class="text-h2">Зарядись энергией вместе с нашей кофейней!</h2>

                <p>
                    Мы создали идеальное место для настоящих ценителей кофе. Погрузитесь в атмосферу
                    комфорта и насладитесь богатым выбором ароматных напитков, свежих зерен и
                    вкусных десертов и закусок. Приходите и откройте для себя настоящий кофейный
                    рай.
                </p>

                <app-button label="Открыть меню" />
            </div>

            <div class="home-page__banner_img__container" />
        </div>

        <section class="home-page__section">
            <h2 class="menu__section_title text-h2 text-center">
                Сочетание культуры, кофе и первоклассного обслуживания
            </h2>
        </section>
    </div>
</template>

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
}
</style>
