import { lazy } from 'react'

interface Route {
  // 页面路径
  path: string
  // 页面名称
  name?: string
  // 是否在侧边菜单显示
  showInSider: boolean
  element: React.ComponentType | React.LazyExoticComponent<any>
  children?: Route[]
}
const routes = [
  {
    path: '/',
    name: '首页',
    showInSider: true,
    element: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/404',
    name: '404',
    showInSider: true,
    element: lazy(() => import('@/pages/Test')),
  },
  {
    path: '/test/:id',
    name: '测试',
    showInSider: false,
    element: lazy(() => import('@/pages/Test')),
  },
] as Route[]

export default routes
