import Vue from 'vue'
import { Message } from 'element-ui'
import moment from 'moment'

import { clone, toArrayTree, toTreeArray } from 'xe-utils'

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
 *
 * @param {Array} data 带层级的数据列表
 * @param {object} obj 树形数据参数
 * @returns 树结构数据
 */
const arrToTree = (data, obj) => {
  return toArrayTree(data, obj)
}

/**
 *
 * @param {*} data 树结构数据
 * @returns 带层级的数据列表
 */
const treeToArr = data => {
  return toTreeArray(data)
}

/**
 *
 * @param {Array} data 带层级的数据列表
 * @param {string} key 父子级关联字段
 * @param {*} parentId 最高级父级id
 * @param {string} parentKey 父级id字段
 * @param {string} childrenKey 子级字段
 * @returns 树结构数据
 */
// obj = {key, parentId, parentKey, childrenKey}

const arrToTreeX = (data, obj) => {
  function handleFn (pId) {
    let res = []
    data.forEach(item => {
      if (item[obj.parentKey] === pId) {
        item[obj.childrenKey] = handleFn(item[obj.key])
        res.push(item)
      }
    })
    if (res.length === 0) {
      return null
    } else {
      return res
    }
  }
  return handleFn(obj.parentId)
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

/**
 * 下划线转驼峰
 * @param {String} str 需进行转换的字符串
 * @param {String} a replace中正则匹配的字符串片段
 * @param {String} b replace中正则匹配的字符串片段中第一个（）中的片段
 */
const underlineToCamel = str => str.replace(/_([a-z])/g, function (a, b) {
  return b.toUpperCase()
})

const utils = {
  copy,
  arrToTree,
  treeToArr,
  arrToTreeX,
  formatToTimeStamp,
  formatToTime,
  tipsWarning,
  tipsErr,
  tipsSuccess,
  underlineToCamel,
  install (Vue) {
    Vue.prototype.$utils = utils
  }
}

Vue.use(utils)

export default utils
