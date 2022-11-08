import * as Sentry from '@sentry/react'
import i18next from 'i18next'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { initReactI18next } from 'react-i18next'

import initI18n from '@/i18n'
import i18nResource from '@/i18n/resources'
import { initSentry } from '@/utils'

import App from './App'

import './index.css'

initSentry()
initI18n(i18next, initReactI18next, i18nResource)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
)
