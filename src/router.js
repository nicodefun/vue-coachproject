import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: null},
        {path: '/coaches/:id', component: null, children:[ // id is dynamic
            {path: 'contact', component: null}, //coaches/id/contact
        ]}, 
        {path: '/register', component: null},
        // {path: '/contact', component: null},
        {path: '/requests', component: null},
        {path: '/:notFound(.*)', component: null}
    ]
});

export default router;