import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Hello from '@/components/Hello'
// import AttendanceOne from 'modules/excelModules/attendanceOne'
// import AttendanceTwo from 'modules/excelModules/attendanceTwo'
// import virtualRollingOne from 'modules/virtualRolling/virtualRollingOne.vue'
// import virtualRollingTwo from 'modules/virtualRolling/virtualRollingTwo.vue'
import Index from 'modules/excelModules/demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: () => import('@/components/Hello'),
      children: [
        // home
        {
          path: 'home',
          name: 'Home',
          component: () => import('@/components/Home')
        },
        // 考勤福利自动化1.0
        {
          path: 'attendanceOne',
          name: 'AttendanceOne',
          meta: { title: '考勤福利自动化1.0' },
          component: () => import('modules/excelModules/attendanceOne')
        },
        // 考勤福利自动化2.0
        {
          path: 'attendanceTwo',
          name: 'AttendanceTwo',
          meta: { title: '考勤福利自动化2.0' },
          component: () => import('modules/excelModules/attendanceTwo')
        },
        // 大数据虚拟滚动1.0
        {
          path: 'virtualRollingOne',
          name: 'virtualRollingOne',
          meta: { title: '虚拟滚动1.0' },
          component: () =>
            import('modules/virtualRolling/virtualRollingOne.vue')
        },
        // 大数据虚拟滚动2.0
        {
          path: 'virtualRollingTwo',
          name: 'virtualRollingTwo',
          meta: { title: '虚拟滚动2.0' },
          component: () =>
            import('modules/virtualRolling/virtualRollingTwo.vue')
        },
        // 大数据虚拟滚动3.0
        {
          path: 'virtualRollingThree',
          name: 'virtualRollingThree',
          meta: { title: '虚拟滚动3.0' },
          component: () =>
            import('modules/virtualRolling/virtualRollingThree.vue')
        }
      ]
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
