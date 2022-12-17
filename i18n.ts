import i18n from "i18next";
import { initReactI18next } from "react-i18next";
export type Locales = "english" | "swahili";

export enum Languages {
  ENGLISH = "english",
  SWAHILI = "swahili",
}
export const resources = {
  ["english"]: {
    translation: {
      ...require("./src/locales/english.json"),
    },
  },
  ["swahili"]: {
    translation: {
      ...require("./src/locales/swahili.json"),
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "english",
  returnEmptyString: false,
  compatibilityJSON: "v3",
  partialBundledLanguages: true,
  ns: [],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
