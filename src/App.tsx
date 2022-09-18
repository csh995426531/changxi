import { InfoCircleFilled } from '@ant-design/icons'
import { DefaultFooter } from '@ant-design/pro-components'
import ProLayout from '@ant-design/pro-layout'
import { Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom'

import routes from '@/routes'
import { getRouterBasename, runtime } from '@/utils'

import './App.scss'

const routerBaseName = getRouterBasename({
  hostname: window.location.hostname,
  entryKey: 'changxi',
  isDevelopment: runtime.isDevelopment,
  isProdEnv: runtime.isProdEnv,
})

function AppContent() {
  const location = useLocation()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProLayout
        title='SpoonX CRM'
        logo={<InfoCircleFilled />}
        location={location}
        menu={{
          locale: true,
          defaultOpenAll: true,
        }}
        route={{
          routes: routes
            .filter(route => route.showInSider)
            .map(route => ({
              exact: true,
              path: route.path,
              name: route.name,
            })),
        }}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children) {
            return defaultDom
          }
          if (menuItemProps.path && location.pathname !== menuItemProps.path) {
            return (
              <Link
                to={menuItemProps.path.replace('/*', '')}
                target={menuItemProps.target}
              >
                {defaultDom}
              </Link>
            )
          }
          return defaultDom
        }}
        fixSiderbar
        fixedHeader
        footerRender={() => (
          <DefaultFooter
            copyright='2022 SpoonX'
            links={[
              {
                key: 'SpoonX Website',
                title: 'SpoonX Website',
                href: 'https://spoonx.com',
                blankTarget: true,
              },
            ]}
          />
        )}
      >
        <Routes>
          {routes.map(route => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
          <Route path='*' element={<Navigate to={routes[0].path} replace />} />
        </Routes>
      </ProLayout>
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={routerBaseName}>
      <AppContent />
    </BrowserRouter>
  )
}
