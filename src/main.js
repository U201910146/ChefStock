import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import HomePage from './components/HomePage.vue'
import ChefStock from './components/ChefStock.vue'
import Plans from "@/components/Plans.vue";
import AboutUs from "@/components/AboutUs.vue";
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Card from 'primevue/card';
import SelectButton from 'primevue/selectbutton';
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Toolbar from 'primevue/toolbar';
import CardStyle from "primevue/card/style/cardstyle.esm.js";
import Button from "primevue/button";
import en from './locales/en.json';
import es from './locales/es.json';



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

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {en, es}
})

const app = createApp(App);
app.use(PrimeVue);

createApp(App)
    .use(router, PrimeVue, {ripple:true})
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menu-bar', Menubar)
    .component('pv-toolbar',Toolbar)
    .use(i18n)
    .mount('#app')