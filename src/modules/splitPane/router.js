/*
 * @Author: xiangjie
 * @Date: 2021-04-23 14:44:49
 * @Last Modified by: xiangjie
 * @Last Modified time: 2021-04-26 16:42:11
 */

export default [
  {
    name: 'splitPane',
    path: 'splitPane',
    meta: {
      title: 'splitPane Demo'
    },
    component: () => import('./splitPane.vue')
  },
  {
    name: 'useBaseSplit',
    path: 'useBaseSplit',
    meta: {
      title: 'useBaseSplit Demo'
    },
    component: () => import('./useBaseSplit.vue')
  }
]
