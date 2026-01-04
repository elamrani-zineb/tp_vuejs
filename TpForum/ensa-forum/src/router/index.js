import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import CategoryPage from '../pages/CategoryPage.vue';
import DiscussionPage from '../pages/DiscussionPage.vue';
import CreateDiscussionPage from '../pages/CreateDiscussionPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/profile', component: ProfilePage },
  { path: '/category/:id', component: CategoryPage },
  { path: '/discussion/:id', component: DiscussionPage },
  { path: '/create-discussion', component: CreateDiscussionPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
