import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import Cardinfo from '../components/Cardinfo.vue';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/details/:id',
        name: 'Cardinfo',
        component: Cardinfo,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;