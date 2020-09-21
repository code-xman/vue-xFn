import Index from 'modules/excelModules/demo1'

//  路由去中心化
const getRoutes = modules => {
  const mods = []
  const keys = modules.keys()
  keys.forEach(key => {
    const path = key.replace(/^.\//, 'modules/').replace(/\.js$/, '')
    mods.push(...require(`../${path}.js`).default)
  })
  return mods
}

const modules = getRoutes(require.context('../modules/', true, /router\.js$/))
console.groupCollapsed('自动注册的路由')
console.dirxml(modules)
console.groupEnd('自动注册的路由')

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: () => import('@/components/Hello'),
    children: [
      // home
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/components/Home')
      },
      ...modules
    ]
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]

export default routes
