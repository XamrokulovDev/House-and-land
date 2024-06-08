// import logo 
import logo from "../../assets/navbar-logo.svg"
// import { useTransition } "react";
import { useTranslation } from "react-i18next";
// import icons 
import { SlArrowDown } from "react-icons/sl";

const Header = () => {
    const {t,i18n} = useTranslation();
  return (
    <div className="navbar_last">
        <div className="logo w-[80px] h-[100px]">
            <img src={logo} alt="Bu yerda logo bor!" className="w-full h-full object-cover"/>
        </div>
        <div className="category">
            <button className="flex items-center gap-5 bg-[#FBA460] text-[#FFFFFF] text-[24px] font-medium py-1 px-2 pl-6">
                <p>{t('header.category-1')}</p>
                <SlArrowDown />
            </button>
            <button className="flex items-center">
                <p>{t('header.category-2')}</p>
                <SlArrowDown />
            </button>
        </div>
    </div>
  )
}

export default Header