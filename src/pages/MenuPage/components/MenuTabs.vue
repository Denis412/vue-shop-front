<template>
    <div class="menu__tabs">
        <menu-tab
            v-for="tab in tabs"
            :key="tab.title"
            :tab="tab"
            :selected="tab.selected"
            @click="onFilter(tab)"
        />
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import MenuTab from './MenuTab.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

defineProps({
    modelValue: {
        type: Object,
        default: () => ({}),
    },
});
const emit = defineEmits({
    'update:modelValue': null,
});

const tabs = reactive([
    {
        title: computed(() => t('menuPage.tabs.all')),
        filter: null,
        selected: true,
    },
    {
        title: computed(() => t('menuPage.tabs.coffee')),
        filter: {
            column: 'category.id',
            operator: 'EQ',
            value: import.meta.env.VITE_COFFEE_CATEGORY_ID,
        },
        selected: false,
    },
    {
        title: computed(() => t('menuPage.tabs.coldDrinks')),
        filter: {
            column: 'category.id',
            operator: 'EQ',
            value: import.meta.env.VITE_COLDDRINK_CATEGORY_ID,
        },
        selected: false,
    },
    {
        title: computed(() => t('menuPage.tabs.desserts')),
        filter: {
            column: 'category.id',
            operator: 'EQ',
            value: import.meta.env.VITE_DESSERT_CATEGORY_ID,
        },
        selected: false,
    },
]);

const onFilter = (tab) => {
    tabs.find((t) => t.selected).selected = false;
    tab.selected = true;
    emit('update:modelValue', tab.filter);
};
</script>

<style scoped lang="scss">
.menu__tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
}
</style>
