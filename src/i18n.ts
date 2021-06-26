import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import history from './utils/history';

i18n.on('languageChanged', (lng) => {
  const allPaths = window.location.pathname.split('/');

  if (allPaths[1]) {
    allPaths[1] = lng;
  }

  history.push(allPaths.join('/'));
});

// @ts-ignore
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available

    debug: process.env.NODE_ENV === 'development',

    // saveMissing: true, // send not translated keys to endpoint

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
    },

    whitelist: ['en', 'pt'],
  });

export default i18n;
