import { createApp } from 'vue';
import './css/app.scss';
import App from './App.vue';
import router from './router';
import pinia from './store';
import i18n from './i18n';
import { useI18n } from 'vue-i18n';

import {
    AppButton,
    AppCheckbox,
    AppInput,
    AppRadio,
    AppSelect,
    AppTextarea,
    AppIcon,
    AppLayout,
    AppPageContainer,
    AppHeader,
    AppFooter,
    AppCard,
    AppForm,
    AppNotification,
} from '@shared';

const app = createApp(App, {
    setup() {
        const { t } = useI18n();

        return { t };
    },
}).use(i18n);

app.use(router).use(pinia);

app.component('AppButton', AppButton);
app.component('AppCheckbox', AppCheckbox);
app.component('AppInput', AppInput);
app.component('AppRadio', AppRadio);
app.component('AppSelect', AppSelect);
app.component('AppTextarea', AppTextarea);
app.component('AppIcon', AppIcon);
app.component('AppLayout', AppLayout);
app.component('AppPageContainer', AppPageContainer);
app.component('AppHeader', AppHeader);
app.component('AppFooter', AppFooter);
app.component('AppCard', AppCard);
app.component('AppForm', AppForm);
app.component('AppNotification', AppNotification);

app.mount('#app');
