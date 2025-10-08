"use client"; // ต้องใส่ถ้าใช้ App Router

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import th from "../locales/th.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    th: { translation: th },
  },
  lng: "th",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
