import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    if (to.meta.isAuthenticated) {
        const isAuth = localStorage.getItem('username');
        if (!isAuth) return { name: 'auth' };
    }

    return true;
});

router.beforeResolve(() => {});
router.afterEach(() => {});

export default router;
