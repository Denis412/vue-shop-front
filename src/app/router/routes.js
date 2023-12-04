const routes = [
    {
        path: '/',
        meta: {
            isAuthenticated: true,
        },
        component: () => import('@layouts/MainLayout/components/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@pages/HomePage/components/HomePage.vue'),
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('@pages/MenuPage/components/MenuPage.vue'),
            },
            {
                path: 'cart',
                name: 'cart',
                component: () => import('@pages/CartPage/components/CartPage.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@pages/AuthorizationPage/components/AuthorizationPage.vue'),
    },
    {
        path: '/reg',
        name: 'reg',
        component: () => import('@pages/RegistrationPage/components/RegistrationPage.vue'),
    },
];

export default routes;
