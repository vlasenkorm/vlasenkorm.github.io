import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/main.json';
import ua from './ua/main.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: false,
  resources: {
    en: {
      translations: en,
    },
    ua: {
      translations: ua,
    }
  },
  // ns: ["translations"],
  defaultNS: "translations",

});