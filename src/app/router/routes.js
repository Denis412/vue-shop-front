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
        ],
    },
];

export default routes;
