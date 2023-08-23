import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/AboutPage.vue';
import FindHospital from './components/FindHospital.vue';
import GetStarted from './components/GetStarted.vue';
import LoginPage from './components/LoginPage.vue';
import SignUp from './components/SignUp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: GetStarted },
        { path: '/', component: AboutPage },
        { path: '/', component: FindHospital },
        { path: '/', component: LoginPage },
        { path: '/', component: SignUp },
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')