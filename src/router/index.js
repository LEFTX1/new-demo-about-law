// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/index/Home.vue';

// 定义路由配置
const routes = [
  { path: '/', name: 'Home', component: Home },
];

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 历史模式
  routes, // 短语法，等同于 routes: routes
});

export default router;