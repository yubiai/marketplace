import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import es from "../locales/es/es.json";
import it from "../locales/it/it.json";

const i18nInit = () =>
  i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
      en,
      es,
      it,
    },
  });

export default i18nInit;
