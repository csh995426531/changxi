import * as Sentry from '@sentry/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { initSentry } from '@/utils'

import App from './App'
import './index.css'

initSentry()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
)
