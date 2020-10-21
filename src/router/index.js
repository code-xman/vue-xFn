import Vue from 'vue'
import Router from 'vue-router'
import routes from './routerIndex'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach(async (to, from, next) => {
  console.groupCollapsed('路由跳转')
  console.log('from :', from)
  console.log('to :', to)
  console.groupEnd()

  next()
})

// VUE-ROUTER 新版 router.push由CALLBACK改为PROMISE实现的报错暂行处理方案
// https://github.com/vuejs/vue-router/issues/2872
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default router
