/*
 * @Author: xiangjie
 * @Date: 2020-01-07 16:44:45
 * @Last Modified by: xiangjie
 * @Last Modified time: 2020-09-21 20:33:18
 */

export default [
  // 大数据虚拟滚动1.0
  {
    path: 'virtualRollingOne',
    name: 'virtualRollingOne',
    meta: { title: '虚拟滚动1.0' },
    component: () => import('./virtualRollingOne.vue')
  },
  // 大数据虚拟滚动2.0
  {
    path: 'virtualRollingTwo',
    name: 'virtualRollingTwo',
    meta: { title: '虚拟滚动2.0' },
    component: () => import('./virtualRollingTwo.vue')
  },
  // 大数据虚拟滚动3.0
  {
    path: 'virtualRollingThree',
    name: 'virtualRollingThree',
    meta: { title: '虚拟滚动3.0' },
    component: () => import('./virtualRollingThree.vue')
  }
]
