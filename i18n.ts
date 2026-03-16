import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import hi from "./locales/hi/translation.json";

i18n
  .use(LanguageDetector) // detect browser language
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: en,
      },
      hi: {
        translation: hi,
      },
    },
  });

export default i18n;
