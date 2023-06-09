// 该文件由gen-router.js自动生成，请勿手动修改
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {path: '/aboutView', name: 'aboutView', component: ()=> import(/* webpackChunkName: 'aboutView' */ '@/views/aboutView/index.vue')},

    {path: '/bgAnimation', name: 'bgAnimation', component: ()=> import(/* webpackChunkName: 'bgAnimation' */ '@/views/bgAnimation/index.vue')},

    {path: '/', name: 'homeView', component: ()=> import(/* webpackChunkName: 'homeView' */ '@/views/homeView/index.vue')},

    {path: '/input', name: 'input', component: ()=> import(/* webpackChunkName: 'input' */ '@/views/input/index.vue')},

  ]
});

export default router;