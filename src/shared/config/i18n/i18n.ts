import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../../../../public/locales/en/translation.json';
import aboutPageEN from '../../../../public/locales/en/aboutPage.json';
import mainPageEN from '../../../../public/locales/en/mainPage.json';
import notFoundEN from '../../../../public/locales/en/notFoundPage.json';

const resources = {
    en: {
        translation: translationEN,
        aboutPage: aboutPageEN,
        mainPage: mainPageEN,
        notFoundPage: notFoundEN,
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV__,
        resources,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
