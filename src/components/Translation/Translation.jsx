// import useState react
import { useState, useEffect } from "react";
// import { useTranslation } react-i18next 
import { useTranslation } from "react-i18next";
// import icons 
import { TfiWorld } from "react-icons/tfi";

const Translation = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('uz');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const handleClick = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
  };

  return (
    <div className="flex items-center gap-1">
      <div>
        <TfiWorld className="text-[#FBA460] text-xl"/>
      </div>
      <select 
        onChange={handleClick}
        value={lang}
        className="bg-transparent text-[#FFFFFF] text-xl"
      >
        <option value="uz" className="bg-[#002349] text-md py-1">O'zb</option>
        <option value="ru" className="bg-[#002349] text-md py-1">Rus</option>
        <option value="en" className="bg-[#002349] text-md py-1">Eng</option>
      </select>
    </div>
  );
}

export default Translation;
