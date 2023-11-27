<template>
    <app-card class="service__card pointer">
        <img :src="`/assets/images/${image}.svg`" :alt="text" />

        <p class="service__card_text">{{ text }}</p>
    </app-card>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
});
</script>

<style scoped lang="scss">
.service__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    max-width: 224px;
    width: 100%;
    max-height: 320px;
    color: #d4b7aa;
    background-color: $primary-text-color;

    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;

    &_text {
        margin-top: 32px;
    }
}

@media (hover: hover) {
    .service__card:hover {
        transform: scale(1.05);
    }
}
</style>
