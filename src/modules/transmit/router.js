/*
 * @Author: xiangjie
 * @Date: 2020-01-07 16:44:45
 * @Last Modified by: xiangjie
 * @Last Modified time: 2020-09-27 17:07:30
 */

export default [
  {
    path: 'transmitOne',
    name: 'transmitOne',
    meta: { title: '组件传值 Demo_1' },
    component: () => import('./transmit1')
  },
  {
    path: 'transmitTwo',
    name: 'transmitTwo',
    meta: { title: '组件传值 Demo_2' },
    component: () => import('./transmit2')
  },
  {
    path: 'transmitThree',
    name: 'transmitThree',
    meta: { title: '组件传值 Demo_3' },
    component: () => import('./transmit3')
  }
]
