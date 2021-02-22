/*
 * @Author: xiangjie
 * @Date: 2020-12-22 10:10:09
 * @Last Modified by: xiangjie
 * @Last Modified time: 2021-02-22 11:27:43
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
  }
]
