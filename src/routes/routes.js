import { createRouter, createWebHistory } from 'vue-router'
import Goleadores from '../components/Goleadores.vue'
import Index from '../components/Index.vue'
import Login from '../components/Login.vue'
import Calendario from '../components/Calendario.vue'
import CrearUsuario from '../components/CrearUsuario.vue'
import Clasificaciones from '../components/Clasificaciones.vue'

const routes = [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'Goleadores',
        path: '/maximos-goleadores',
        component: Goleadores
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Calendario',
        path: '/calendario',
        component: Calendario
    },
    {
        name: 'CrearUsuario',
        path: '/sign-up',
        component: CrearUsuario
    },
    {
        name: 'Clasificaciones',
        path: '/clasificaciones',
        component: Clasificaciones
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;