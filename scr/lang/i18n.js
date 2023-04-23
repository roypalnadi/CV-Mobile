import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import indo from './indo.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'in',
  fallbackLng: 'in',
  resources: {
    en: en,
    in: indo,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
