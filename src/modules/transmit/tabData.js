import Vue from 'vue'

// 声明tabData为observable里的一个对象
const state = Vue.observable({ tabData: {} })
// const state = {tabData: {}}

// 在外部创建数据，然后父/子组件分别引入数据，这样子组件可修改父组件使用的外部引入数据
export default state
