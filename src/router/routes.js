const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
    }
];

export default routes;