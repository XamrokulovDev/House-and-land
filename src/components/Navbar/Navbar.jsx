// import Translation page
import Translation from '../Translation/Translation'
// import Translation react-i18next
import { useTranslation } from 'react-i18next'
// import icons 
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const {t,i18n} = useTranslation();
  return (
    <>
      <nav className='navbar bg-[#002349] py-7'>
        <div className="container mx-auto w-[80vw] flex justify-between items-center">
          <div className="translation">
            <Translation />
          </div>
          <div className="Profil flex items-center gap-2">
            <button className='text-[#FFFFFF] text-md bg-[#FBA460] py-1 px-3 rounded-xl font-medium'>{t('header.nav-button')}</button>
            <div className='flex items-center gap-1'>
              <FaRegCircleUser className='text-[#FBA460] text-4xl'/>
              <a href="" className='text-[#FFFFFF] text-lg'>{t('header.profil')}</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar