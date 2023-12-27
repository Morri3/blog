import { createRouter, createWebHashHistory } from 'vue-router'
// import store from '@/store/index' // 导入store

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: '首页',
      level: 1,
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 设置页面的标题
router.beforeEach((to, from, next) => {
  // const canJump = to.meta && to.meta.requireAuth
  // if (canJump && canJump === true) {
  //   console.log(1)
  //   // 需要登录才能访问该页面
  //   if (store.state.user.isLogin === true && store.state.user.token !== null) {
  //     console.log(2)
  //     // 登录了
  //     const title = to.meta && to.meta.title
  //     if (title) {
  //       document.title = title
  //     }
  //     next()
  //   } else {
  //     console.log(3)
  //     // 没登陆或没token
  //     next({
  //       path: '/login'
  //     })
  //   }
  // } else {
  //   console.log(4)
  //   next()
  // }
})

export default router
