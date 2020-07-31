// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// flex布局简化库
import 'flex.css'

// mockjs
import '../mock/index'

import App from './App'
import router from './router'
import axios from 'axios'

Vue.use(VXETable)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
