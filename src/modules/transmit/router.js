/*
 * @Author: xiangjie
 * @Date: 2020-01-07 16:44:45
 * @Last Modified by: xiangjie
 * @Last Modified time: 2020-10-20 11:10:14
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
  },
  {
    path: 'transmitFour',
    name: 'transmitFour',
    meta: { title: '组件传值 Demo_4' },
    component: () => import('./transmit4')
  },
  {
    path: 'transmitFive',
    name: 'transmitFive',
    meta: { title: '组件传值 Demo_5' },
    component: () => import('./transmit5')
  }
]
