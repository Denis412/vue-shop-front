<template>
    <app-form class="authorization__form" @submit="onSubmit">
        <h2 class="text-h2">Регистрация</h2>

        <div class="authorization__form-content">
            <app-input v-model="registrationForm.username" placeholder="Введите имя пользователя" />
            <app-input
                v-model="registrationForm.password"
                type="password"
                placeholder="Введите пароль"
            />
            <app-input
                v-model="registrationForm.confirmPassword"
                type="password"
                placeholder="Подтвердите пароль"
            />
        </div>

        <div class="authorization__form-actions">
            <app-button type="submit" label="Зарегистрироваться" />
        </div>
    </app-form>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import registration from '../api/registration';

const router = useRouter();
const registrationForm = reactive({});

const onSubmit = async () => {
    await registration(registrationForm);

    await router.push({
        name: 'login',
    });
};
</script>

<style scoped lang="scss">
.authorization__form {
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &-actions {
    }
}
</style>
