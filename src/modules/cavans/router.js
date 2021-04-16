/*
 * @Author: xiangjie
 * @Date: 2021-02-03 17:16:28
 * @Last Modified by: xiangjie
 * @Last Modified time: 2021-04-16 10:14:00
 */

export default [
  {
    name: 'cavansOne',
    path: 'cavansOne',
    meta: { title: 'cavans Demo_1' },
    component: () => import('./cavans1.vue')
  },
  {
    name: 'echartsOne',
    path: 'echartsOne',
    meta: { title: 'Echarts Demo_1' },
    component: () => import('./echarts1.vue')
  }
]
