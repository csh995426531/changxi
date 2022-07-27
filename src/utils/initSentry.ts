import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import configs from '@/configs'

import { isProdEnv, isDevelopment } from './runtime'

const currentEnvConfig = configs[isProdEnv ? 'prod' : 'alpha']

const initSentry = () => {
  Sentry.init({
    environment: isProdEnv ? 'prod' : 'alpha',
    // TODO add plugin to inject release version
    // release: process.env.RELEASE_VERSION,
    enabled: !isDevelopment,
    debug: process.env.NODE_ENV !== 'production',
    dsn: currentEnvConfig.sentryDSN,
    maxBreadcrumbs: 30,
    sampleRate: isProdEnv ? 0.5 : 1,
    tracesSampleRate: isProdEnv ? 0.5 : 1,
    integrations: [new BrowserTracing()],
  })
}

export default initSentry
