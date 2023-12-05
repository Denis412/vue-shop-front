<template>
    <app-form class="authorization__form" @submit="onSubmit">
        <div class="authorization__form_inner">
            <div class="authorization__form-content">
                <label class="text-card-title">
                    Имя:
                    <app-input
                        v-model="registrationForm.username"
                        placeholder="Введите имя пользователя"
                    />
                </label>

                <label class="text-card-title mt-24">
                    Пароль:
                    <app-input
                        v-model="registrationForm.password"
                        type="password"
                        placeholder="Введите пароль"
                    />
                </label>

                <label class="text-card-title mt-24">
                    Подтверждение пароля:
                    <app-input
                        v-model="registrationForm.confirmPassword"
                        type="password"
                        placeholder="Подтвердите пароль"
                    />
                </label>
            </div>

            <div class="mt-24">
                Вы принимаете условия Политики конфиденциальности и даёте своё Согласие на обработку
                персональных данных после нажатия кнопки.
            </div>
        </div>
        <div>
            <div class="authorization__form-actions">
                <app-button type="submit" label="Зарегистрироваться" />
            </div>
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
    max-width: 856px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    // padding: 64px 110px;

    // border-radius: 64px;
    // background-color: rgba(212, 183, 170, 0.4);
    // background-image: url('@app/assets/images/popularity_bg.svg');

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
