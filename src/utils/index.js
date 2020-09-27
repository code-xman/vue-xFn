import Vue from 'vue'
import { clone } from 'xe-utils'

/**
 * 按值而非引用复制对象
 *
 * @param {*} data 传入的DATA
 * @returns 返回的对象
 */
const copy = data => {
  return clone(data, true)
}

const utils = {
  copy,
  install (Vue) {
    Vue.prototype.$utils = utils
  }
}

Vue.use(utils)

export default utils
