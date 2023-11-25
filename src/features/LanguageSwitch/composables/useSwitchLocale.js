import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default function useSwitchLocale() {
    const { t, locale } = useI18n({ useScope: 'global' });

    const setLocale = (loc) => {
        locale.value = loc;
    };

    const switchLocale = () => {
        locale.value === 'ru' ? (locale.value = 'en') : (locale.value = 'ru');
        localStorage.setItem('locale', locale.value);
    };

    const getAttribute = (key) => {
        return computed(() => t(key));
    };

    return {
        t,
        locale,
        setLocale,
        switchLocale,
        getAttribute,
    };
}
