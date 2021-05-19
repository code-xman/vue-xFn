/*
 * @Author: xiangjie
 * @Date: 2020-12-22 10:10:09
 * @Last Modified by: xiangjie
 * @Last Modified time: 2021-05-18 16:03:37
 */

export default [
  {
    name: 'cssOne',
    path: 'cssOne',
    meta: { title: 'Css Demo_1' },
    component: () => import('./css1.vue')
  },
  {
    name: 'cssTwo',
    path: 'cssTwo',
    meta: { title: 'Css 时间翻牌' },
    component: () => import('./css2.vue')
  },
  {
    name: 'cssThree',
    path: 'cssThree',
    meta: { title: 'Css 转圈圈' },
    component: () => import('./css3.vue')
  },
  {
    name: 'cssCharge',
    path: 'cssCharge',
    meta: { title: 'Css 充电' },
    component: () => import('./cssCharge.vue')
  }
]
