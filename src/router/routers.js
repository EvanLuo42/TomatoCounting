import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Vues from '../components/Vue.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/helloworld",
        component: HelloWorld
    },
    {
        path: "/vue",
        component: Vues
    }
]

const router = new VueRouter({
    routes
})

export default router