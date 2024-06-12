// import sidebar page 
import Sidebar from '../Sidebar/Sidebar'
// import images 
import copy from "../../assets/sidebar_img/Copy.svg"
import male from "../../assets/sidebar_img/male.svg"

const Myprofil = () => {
  // ID ni copy qilish uchun funksiya
  const handleCopyText = () => {
    const textToCopy = document.getElementById('profile-id').innerText;
    navigator.clipboard.writeText(textToCopy)
  };

  return (
    <div>
        <div className="page_out flex items-center gap-2">
           <div className="sidebar flex">
            <div className="sidebar_page max-lg:hidden">
              <Sidebar />
            </div>
            <div className="profile w-[75vw] py-[3vh] px-[5vw] max-md:w-[97vw] max-lg:w-[100vw] max-md:px-5">
              <div className="my_text flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-2">
                <h1 className='text-[#000000] text-[40px] font-semibold pb-2 max-sm:text-[30px]'>Mening profilim</h1>
                <div className='flex items-center border border-[#000000] pl-2 rounded-lg overflow-hidden'>
                  <h1 className='text-lg pr-12' id='profile-id'>ID: 446789</h1>
                  <div className="copy_img bg-[#9D9D9D] cursor-pointer relative" onClick={handleCopyText}>
                    <img src={copy} alt="Copy" className='bg-[#9D9D9D] p-1.5'/>
                  </div>
                </div>
              </div>
              <div className="user_data w-full flex items-start max-md:items-center max-xl:flex-col gap-[5vw] max-xl:gap-[0vh] mt-[3vh] max-xl:w-full">
                <div className="user_img w-[230px] h-[230px]">
                  <img src={male} alt="" />
                </div>
                <div className="user_info mt-[4vh] flex flex-col gap-10 max-xl:w-full max-xl:gap-4">
                  <div className="input-data flex items-center justify-between gap-5 max-xl:flex-col max-xl:items-start max-xl:gap-2">
                    <label for="name" className='text-2xl cursor-pointer'>Ism</label>
                    <input type="text" id='name'className='w-[25vw] outline-none bg-[#EEEEEE] py-3 px-5 rounded-md max-xl:w-full'/>
                  </div>
                  <div className="input-data flex items-center justify-between gap-5 max-xl:flex-col max-xl:items-start max-xl:gap-2">
                    <label for="surname" className='text-2xl cursor-pointer'>Familiya</label>
                    <input type="text" id='surname' className='w-[25vw] outline-none bg-[#EEEEEE] py-3 px-5 rounded-md max-xl:w-full'/>
                  </div>
                  <div className="input-data flex items-center justify-between gap-5 max-xl:flex-col max-xl:items-start max-xl:gap-2">
                    <label for="Organization" className='text-2xl cursor-pointer'>Tashkilot</label>
                    <input type="text" id='Organization' className='w-[25vw] outline-none bg-[#EEEEEE] py-3 px-5 rounded-md max-xl:w-full'/>
                  </div>
                  <div className="input-data flex items-center justify-between gap-5 max-xl:flex-col max-xl:items-start max-xl:gap-2">
                    <label for="gender" className='text-2xl cursor-pointer'>Foydalanuvchi turi</label>
                    <input type="text" id='gender' className='w-[25vw] outline-none bg-[#EEEEEE] py-3 px-5 rounded-md max-xl:w-full'/>
                  </div>
                </div>
              </div>
            <div className="btn_submit w-full flex justify-end border-b-2 border-[#B7B7B7] pb-[6vh] max-xl:pb-6">
              <button className='bg-[#FBA460] text-[#FFFFFF] font-medium py-2 px-10 rounded-md mt-[8vh] max-xl:mt-6'>Saqlash</button>
            </div>
            <div className="number flex items-center gap-20 text-[16px] text-[#000000] mt-[15vh] max-md:mt-10 max-md:pb-[10vh] max-md:flex-col max-md:items-start max-md:gap-3">
              <h1 className='font-medium'>Основной номер</h1>
              <div className='w-[20vw] border-2 border-[#B7B7B7] px-5 py-2.5 rounded-lg max-md:w-full max-xl:w-[30vw]'>
                <h1>+998 (93) 578-49-90</h1>
              </div>
            </div>
            </div>
           </div> 
        </div>
    </div>
  )
}

export default Myprofil
