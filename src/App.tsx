import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import routes from '@/routes'
import { getRouterBasename, runtime } from '@/utils'

import './App.scss'

const routerBaseName = getRouterBasename({
  hostname: window.location.hostname,
  entryKey: 'changxi',
  isDevelopment: runtime.isDevelopment,
  isProdEnv: runtime.isProdEnv,
})

function App() {
  return (
    <BrowserRouter basename={routerBaseName}>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
