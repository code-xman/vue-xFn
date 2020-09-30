import Vue from 'vue'
import { Message } from 'element-ui'
import moment from 'moment'

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

/**
 * 将时间格式改为时间戳
 *
 * @param {*} time 时间值
 */
const formatToTimeStamp = time => String(moment(time).valueOf())

/**
 * 将时间戳改为对应格式
 *
 * @param {*} time 时间戳
 * @param {string} [format='YYYY-MM-DD'] 格式
 */
const formatToTime = (time, format = 'YYYY-MM-DD') =>
  time ? moment(Number(time)).format(format) : ''

/**
 * 统一警告提示
 * 封装于ELEMENT-UI
 * @param {String} msg
 */
const tipsWarning = msg => {
  Message({
    message: msg,
    type: 'warning',
    showClose: true
  })
}

/**
 * 统一错误提示
 * 封装于ELEMENT-UI
 * @param {String} msg
 */
const tipsErr = msg => {
  Message({
    message: msg,
    type: 'error',
    showClose: true
  })
}

/**
 * 统一成功提示
 *
 * @param {String} msg
 */
const tipsSuccess = msg => {
  Message({
    message: msg,
    type: 'success',
    showClose: true
  })
}

const utils = {
  copy,
  formatToTimeStamp,
  formatToTime,
  tipsWarning,
  tipsErr,
  tipsSuccess,
  install (Vue) {
    Vue.prototype.$utils = utils
  }
}

Vue.use(utils)

export default utils
