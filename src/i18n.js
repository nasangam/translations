import i18n from 'i18next';
import { initReactI18next, useTranslation} from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import resources from "./locales";

const apiKey = "OK5nRMUBNYVHUpFA3WXSUQ";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18n
.use(languageDetector)
.use(HttpBackend)
.use(initReactI18next)
.init({
//  lng:"en",
 fallbackLng: "en",
 debug:true,
 ns: ["translations"],
 defaultNS: "translations",
 keySeparator: false,
 whitelist: ["en","es","de"],
 backend: {
  loadPath: loadPath
 },
 interpolation: {
  escapeValue: false,
  format: function (value, format, lng) {
    if (format === 'uppercase') return value.toUpperCase();
    if (format === 'lowercase') return value.toLowerCase();
    if (format === 'capitalize') return `${value.substr(0, 1).toUpperCase()}${value.substr(1).toLowerCase()}`;
    return value;
  }
},
 resources2: resources,
 resources2: {
   "en" :{
     common: {
      "Hello": "Hello - commmon"
     },
     translations: {
        "Hello": "Hello",
        "Welcome to react tutorials": "Welcome to react tutorials",
        "Apply" : "Apply",
        "Multilingual Application": "Multilingual Application",
        "Spanish": "Spanish",
        "now": "current time: {{date, datetime}}",
        "export_message" : "Successfully exported {{number, number}} record",
        "export_message_plural" : "Successfully exported {{number, currency(USD)}} records"
     }
   },
   "es":{
     translations:{
      "Hello": "Holla",
      "Welcome to react tutorials": "Bienvenida a reaccionar tutorial",
      "Apply" : "Aplicar",
      "Multilingual Application": "Aplicación multilingüe",
      "Spanish": "Española",
      "English": "Inglesa",
      "now": "current time: {{date}}",
      "export_message" : "Exportado con éxito {{number, currency(USD)}} registros"
     }
   }
 }
});

// i18n.services.formatter.add('lowercase', (value, lng, options) => {
//   return value.toLowerCase();
// });

export default i18n;