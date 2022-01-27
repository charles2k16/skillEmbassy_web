import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Blog from '@/views/Blog.vue';
import Application from '@/views/Application.vue';
import ForBusiness from '@/views/ForBusiness.vue';

import Product_management from '@/views/courses/Product_management';
import Product_design from '@/views/courses/Product_design';
import Software_dev from '@/views/courses/Software_dev';
import Data_science from '@/views/courses/Data_science';
import Dev_ops from '@/views/courses/Dev_ops';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/application',
    name: 'application',
    component: Application,
  },
  {
    path: '/business',
    name: 'business',
    component: ForBusiness,
  },
  {
    path: '/courses/:dev_ops?',
    name: 'dev_ops',
    component: Dev_ops,
  },
  {
    path: '/courses/:product_design?',
    name: 'product_design',
    component: Product_design,
  },
  {
    path: '/courses/:product_management?',
    name: 'product_management',
    component: Product_management,
  },
  {
    path: '/courses/:software_dev?',
    name: 'software_dev',
    component: Software_dev,
  },
  {
    path: '/courses/:data_science?',
    name: 'data_science',
    component: Data_science,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
