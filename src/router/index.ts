import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';

/**
 * 根级路由
 */
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      title: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
