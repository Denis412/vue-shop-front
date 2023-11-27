const routes = [
    {
        path: '/',
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
                component: () => import('@pages/HomePage/components/HomePage.vue'),
            },
            {
                path: 'cart',
                name: 'cart',
                component: () => import('@pages/HomePage/components/HomePage.vue'),
            },
        ],
    },
];

export default routes;
