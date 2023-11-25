import { createI18n } from 'vue-i18n';

const languageModules = import.meta.glob('../../**/(en|ru).json');
const messages = {
    en: {},
    ru: {},
};

for (const path in languageModules) {
    const mod = await languageModules[path]();

    if (path.includes('en')) Object.assign(messages.en, mod);
    else Object.assign(messages.ru, mod);
}

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_DEFAULT_LOCALE ?? localStorage.getItem('locale'),
    messages,
});

export default i18n;
