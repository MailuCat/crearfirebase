import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'




Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/listaballenas',
    name: 'ListaBallenas',
    component: () => import(/* webpackChunkName: "Home" */ '../components/ListaBallenas.vue'),
    },
  {
    path: '/registrate',
    name: 'Registrate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registrate.vue')
  },
  {
    path: '/administrar',
    name: 'Administrar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Administrar.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
     
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  let user = firebase.auth().currentUser;
  let authRequired = to.matched.some (router => router.meta.login);
  if ( !user && authRequired) {
    next({name: 'Login'});
    
  } else if (user && !authRequired) {
    next ();
  }else {
    next( )
  }

})
  
 


export default router
