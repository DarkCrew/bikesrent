/* eslint-disable no-constant-condition */
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

// Import all translation files
import translationEnglish from './Translations/English/translation.json';
// Import translation2 file
import translationPolish from './Translations/Polish/translation.json';
import translationRussian from './Translations/Russian/translation.json';

// ---Using translation
// const resources = {
//     en: {
//         translation: translationEnglish,
//     },
//     es: {
//         translation: translationSpanish,
//     },
//     fr: {
//         translation: translationFrench,
//     },
// }

// ---Using different namespaces
const resources = {
  en: {
    home: translationEnglish,
  },
  pl: {
    home: translationPolish,
  },
  ru: {
    home: translationRussian,
  },
};

let currentLanguage = 'pl';
if (localStorage.getItem('language') !== null) {
  if (localStorage.getItem('language') === 'ru' || 'pl' || 'en') {
    currentLanguage = localStorage.getItem('language') as string;
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: currentLanguage, // default language
});

export default i18next;
