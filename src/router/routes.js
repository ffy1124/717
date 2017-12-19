import index from '../views';
import shopCar from '../views/shopCar/shopCar.vue';
import user from '../views/user/user.vue';
import classify from '../views/classify/classify.vue';
import home from '../views/home/home.vue';
import search from '../views/search/search.vue';
import login from '../views/login/login.vue';
import register from '../views/register/register.vue';
import details from '../views/details/details.vue';
import address from '../views/address/address.vue';
import addform from '../views/form/form.vue';
let routes = [
    {
        path: '/',
        redirect: 'index/home'
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
    {
        path: '/addform',
        name: 'addform',
        component: addform
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/details',
        name: 'details',
        component: details,
    },
    {
        path:'/address',
        name: 'address',
        component: address
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children:[
            {
                path: 'home',
                name: 'home',
                component: home
            },
            {
                path: 'shopCar',
                name: 'shopCar',
                component: shopCar
            },
            {
                path: 'classify',
                name: 'classify',
                component: classify
            },
            {
                path: 'user',
                name: 'user',
                component: user,
                meta: {
                    requireAuth: true
                }
            }
        ]
    }
]
export default routes;