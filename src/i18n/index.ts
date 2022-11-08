import * as Sentry from '@sentry/react'
import i18next, { Resource, ThirdPartyModule } from 'i18next'
import _merge from 'lodash/merge'

import defaultResources from './resources'

class TranslationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TranslationError'
  }
}

const initI18n = (
  i18n: typeof i18next,
  initReactI18next: ThirdPartyModule,
  resources: Resource,
) => {
  i18n.use(initReactI18next).init({
    resources: _merge(defaultResources, resources),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
  })

  i18n.on('missingKey', (lngs, namespace, key, res) => {
    console.error(
      new TranslationError(
        `翻译错误 lngs: ${lngs.join(
          ',',
        )}; namespace: ${namespace}; key: ${key}; res: ${res};`,
      ),
    )

    Sentry.captureException(
      new TranslationError(
        `翻译错误 lngs: ${lngs.join(
          ',',
        )}; namespace: ${namespace}; key: ${key}; res: ${res};`,
      ),
    )
  })
}

export default initI18n
