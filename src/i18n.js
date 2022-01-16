import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

//manage languages in app
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'est',
      backend: {
        /* translation file path */
       loadPath: '/assets/i18n/translations/{{lng}}/{{ns}}.json'
      },
    fallbackLng: 'est',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations', 'landing'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: { 
      useSuspense: false //   <---- this will do the magic
    }
  })

export default i18n