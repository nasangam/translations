import './App.css';
import './i18n';
import {useTranslation} from "react-i18next";
import {useState, useEffect} from 'react';

function App() {
  const {t, i18n} = useTranslation();
  const [lng, setLng] = useState("eng");
  const changeLanguage = () => {
    i18n.changeLanguage(lng);
  }

  const onLanguageChange = (lng)=>console.log("language changed:", lng);
  useEffect(() => {
    i18n.on("languageChanged", onLanguageChange)
    return () => {
      i18n.off("languageChanged", onLanguageChange)
    }
  }, []);

  return (
    <div className="App">
      <form>
        <fieldset>
          <div>{t("common:Hello")}</div>
          <div>{t("Welcome to react tutorials")}</div>
          <legend>{t("Multilingual Application")}</legend>
          {t("export_message", {number: 2000})} <br/>
          {t("now", {date: Date.now(),formatParams: {
              date: { hour: 'numeric', minute: 'numeric', second: 'numeric',weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
            }})} <br/>
            {i18n.format('edit', 'capitalize')}
          <select onChange={(e) => setLng(e.target.selectedOptions[0].value)}>
            <option value="en">{t("English")}</option>
            <option value="es">{t("Spanish")}</option>
          </select>
          <link rel="alternate" href="https://example.com/en" hrefLang="en" />
          <link rel="alternate" href="https://example.com/es" hrefLang="es" />
          <button type="button" onClick={changeLanguage}>{t("Apply")}</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
