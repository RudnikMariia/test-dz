import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import OrdersView from '../views/OrdersView.vue';
import ProductsView from '../views/ProductsView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/orders',
                name: 'orders',
                component: OrdersView
            },
            {
                path: '/products',
                name: 'products',
                component: ProductsView
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
