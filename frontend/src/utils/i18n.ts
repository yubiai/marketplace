import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";

const i18nInit = () =>
  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
      en,
    },
  });

export default i18nInit;
