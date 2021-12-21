import i18next from "i18next"
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import en from "./locales/en";
import jp from "./locales/jp";

i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    initImmediate: true,
    fallbackLng: "en-US",
    debug: true,
    resources: {
      "en": {
        translation: en
      },
      "en-US": {
        translation: en
      },
      "ja-JP": {
        translation: jp
      },
    }
  })


export default i18next
