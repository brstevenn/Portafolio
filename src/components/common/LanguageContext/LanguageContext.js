import React, { createContext, useState, useEffect } from "react";
import en from "../../../assets/data/en.json"
import es from "../../../assets/data/es.json"

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("es");
  const [data, setData] = useState(es);

  useEffect(() => {
    switch (language) {
      case "en":
        setData(en)
        break;
      default:
        setData(es)
        break;
    }
  }, [language]);

  const changeLanguage = (language) => setLanguage(language);

  return (
    <LanguageContext.Provider value={{ language, data, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
