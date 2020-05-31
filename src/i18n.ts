import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    debug: true,

    // saveMissing: true, // send not translated keys to endpoint

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    whitelist: [ 'en', 'pt' ]

  });

export default i18n;
