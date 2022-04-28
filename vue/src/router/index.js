import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Contacts from '../views/Contacts.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import store from '../store'


const routes = [
    {
        path: '/',
        redirect: '/home',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/contacts',
                name: 'Contacts',
                component: Contacts,
            }
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        redirect: '/login',
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login,
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth && store.state.user.token===null){
        next({name: 'Login'})
    }else if(store.state.user.token && (to.meta.isGuest)){
        next({name: 'Home'})
    }
    else{
        next()
    }
});

export default router;
