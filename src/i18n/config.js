/* eslint-disable global-require */
import i18next from 'i18next'
import detector from 'i18next-browser-languagedetector'

const locales = process.env.GATSBY_AVAILABLE_LOCALES || 'en zh-hant'
const availableLocales = locales.split(' ')

i18next
  .use(detector)
  .init({
    defaultLanguage: process.env.GATSBY_DEFAULT_LOCALE,
    fallbackLng: availableLocales,
    resources: {
      ph: {
        translations: require('./locales/ch.json'),
      },
      en: {
        translations: require('./locales/en.json'),
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false,
    },

  })

i18next.languages = availableLocales

export default i18next
