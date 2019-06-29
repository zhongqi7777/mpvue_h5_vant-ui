import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../pages/index/index.vue')
    },
    {
      path: '/myClassroom',
      name: 'MyClassroom',
      component: () => import('../pages/myClass/myClassroom.vue')
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('../pages/mine/mine.vue')
    }
  ]
})
