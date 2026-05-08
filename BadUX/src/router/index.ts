import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import DeletePage from '../views/DeletePage.vue';
import CaptchaPage from '../views/CaptchaPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/delete', component: DeletePage },
  { path: '/captcha', component: CaptchaPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;