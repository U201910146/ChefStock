import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './components/HomePage.vue'
import ChefStock from './components/ChefStock.vue'
import Plans from "@/components/Plans.vue";
import AboutUs from "@/components/AboutUs.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/homepage', component: HomePage },
    { path: '/chefstock', component: ChefStock },
    { path: '/plans', component: Plans },
    { path: '/aboutus', component: AboutUs }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
