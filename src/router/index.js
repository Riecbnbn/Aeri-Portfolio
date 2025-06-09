import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '@/pages/LoginPage.vue';
import DashboardLayout from '@/components/DashboardLayout.vue';
import MyProfile from '@/pages/portfolio/MyProfile.vue';
import MyShowcase from '@/pages/portfolio/MyShowcase.vue';
import MyContact from '@/pages/portfolio/MyContact.vue';
import MyCreative from '@/pages/portfolio/MyCreative.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/portfolio',
    component: DashboardLayout,
    children: [
      {
        path: 'myprofile',
        name: 'Profile',
        component: MyProfile
      },
      {
        path: 'myshowcase',
        name: 'Showcase',
        component: MyShowcase
      },
      {
        path: 'mycontact',
        name: 'Contact',
        component: MyContact
      },
      {
        path: 'mycreative',
        name: 'Creative',
        component: MyCreative
      },
      {
  path: '/showcase',
  name: 'showcase',
  component: MyShowcase,
  meta: { hideFooter: true }  // <--- add this
}

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
