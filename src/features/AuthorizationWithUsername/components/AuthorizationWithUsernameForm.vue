<template>
    <app-form class="authorization__form" @submit="onSubmit">
        <h2 class="text-h2">Авторизация</h2>

        <div class="authorization__form-content">
            <app-input
                v-model="authorizationForm.username"
                placeholder="Введите имя пользователя"
            />
            <app-input
                v-model="authorizationForm.password"
                type="password"
                placeholder="Введите пароль"
            />
        </div>

        <div class="authorization__form-actions">
            <app-button type="submit" label="Войти" />
        </div>
    </app-form>
</template>

<script setup>
import { reactive } from 'vue';
// import axios from '@app/axios';
import { useRouter } from 'vue-router';
import login from '../api/login';

const router = useRouter();
const authorizationForm = reactive({});

const onSubmit = async () => {
    console.log('submit');
    const response = await login(authorizationForm);
    const result = response.data;

    localStorage.setItem('username', result.user.username);

    router.push({
        name: 'home',
    });

    console.log('res', result);
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
