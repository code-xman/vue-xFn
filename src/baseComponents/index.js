import Vue from 'vue'

const requireComponent = require.context('.', true, /index.js/).keys()

console.groupCollapsed('自动注册的全局组件')
requireComponent.forEach(filePath => {
  if (filePath === './index.js') {
    return
  }
  const fileName = filePath.replace(/^\.\//, '').replace(/\/.+$/, '')
  const componentConfig = require(`./${fileName}`)
  console.log(fileName, componentConfig.default || componentConfig)
  Vue.use(componentConfig.default || componentConfig)
})
console.groupEnd()
