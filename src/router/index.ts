import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MoviePage from '../views/MoviePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MoviePage,
      props: true,
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: '/' 
    },
  ]
})

export default router
