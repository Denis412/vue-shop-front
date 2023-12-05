<template>
    <app-form class="authorization__form" @submit="onSubmit">
        <div class="authorization__form_inner">
            <div class="authorization__form-content">
                <label class="text-card-title">
                    Имя:
                    <app-input
                        v-model="authorizationForm.username"
                        placeholder="Введите имя пользователя"
                    />
                </label>
                <label class="text-card-title mt-24">
                    Пароль:
                    <app-input
                        v-model="authorizationForm.password"
                        type="password"
                        placeholder="Введите пароль"
                    />
                </label>
            </div>
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
    max-width: 856px;
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
        width: 100%;
    }

    &-actions {
    }
}

.authorization__form_inner {
    padding: 64px 110px;

    border-radius: 64px;
    background-color: rgba(212, 183, 170, 0.4);
    background-image: url('@app/assets/images/popularity_bg.svg');
}
</style>
