import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';
const router = createRouter({ history: createWebHistory(), routes: [{ path: '/', redirect: '/login' }, { path: '/login', component: LoginView }, { path: '/dashboard', component: DashboardView, meta: { requiresAuth: true } }] });
router.beforeEach((to) => { const loggedIn = sessionStorage.getItem('loggedIn') === 'true'; if (to.meta.requiresAuth && !loggedIn) return '/login'; if (to.path === '/login' && loggedIn) return '/dashboard'; });
export default router;
