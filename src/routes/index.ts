import { lazy } from 'react'

interface Route {
  path: string
  element: React.ComponentType | React.LazyExoticComponent<any>
}
const routes = [
  {
    path: '/',
    element: lazy(() => import('@/pages/home')),
  },
] as Route[]

export default routes
