import { createRouter, createWebHashHistory } from 'vue-router';

// Export router
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/lyrics/:id',
      component: () => import('@views/Lyrics.vue'),
    },
    {
      path: '/',
      component: () => import('@views/Search.vue'),
    },
  ],
});
