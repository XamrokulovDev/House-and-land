
// Icons
import { SlArrowDown } from "react-icons/sl";
import { TfiSearch } from "react-icons/tfi";



import Sidebar from '../Sidebar/Sidebar'

const Elon = () => {


  return (
    <div>
        <div className="page_out flex items-center gap-2">
           <div className="sidebar flex">
            <div className="sidebar_page max-lg:hidden">
              <Sidebar />
            </div>
            <div className="w-[75vw] profile py-[3vh] px-[5vw] max-md:w-[97vw] max-lg:w-[100vw] max-md:px-5">
              <div className="my_text flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-2">
                <h1 className='text-[#000000] text-[40px] font-semibold pb-2 max-sm:text-[30px]'>Mening e’lonlarim</h1>
                
              </div>
              <div className=' font-[500] flex gap-[100px] max-lg:gap-[40px] max-xl:gap-[70px] mt-[30px] max-md:gap-[10px] max-md:mt-[10px] max-xl:w-full text-[24px] font-[500]'>
                        <h2 className='text-[#FBA460]   max-md:text-[13.15px]'>Aktivlar</h2>
                        <h2 className='text-[#002349] border-b-[2px] border-[#000] max-md:border-b-[1px] max-md:text-[13.15px] '>Noaktiv</h2>
                        <h2 className='text-[#002349] border-b-[2px] border-[#000] max-md:border-b-[1px] max-md:text-[13.15px] '>Moderatsiyada</h2>
                        <h2 className='text-[#002349] border-b-[2px] border-[#000] max-md:border-b-[1px] max-md:text-[13.15px]'>Rad etilgan</h2>
                    </div>

                    <div className="hidden border border-[#B7B7B7]  max-md:block max-xl:w-full mt-[3vw]"></div>

              <div className="user_data w-full flex items-start max-md:items-center max-lg:flex-col gap-[5vw] max-lg:gap-[0vh]  max-xl:w-full">
               

                <div className="mt-[5vw] w-full flex gap-3 max-lg:flex-col">
                
                  <button className="flex items-center border border-[#B7B7B7] w-[227px] h-[40px] rounded-[10px] px-4 justify-between max-lg:w-full">
                    <h1 className="text-[11px] font-[400]">Hisob boyicha jarayonlar </h1>
                    <SlArrowDown className="hidden max-lg:block max-lg:w-[9.07px] max-lg:h-[15.12px]"/>
                  </button>

                  <button className="flex items-center border border-[#B7B7B7] w-[227px] h-[40px] rounded-[10px] px-4 justify-between max-lg:w-full">
                    <h1 className="text-[11px] font-[400]">Hamma ko’chmas mulklar </h1>
                    <SlArrowDown className="block max-lg:w-[9.07px] max-lg:h-[15.12px]"/>
                  </button>           

                  <div className="flex justify-between w-[34vw] max-lg:flex-col max-lg:w-full max-lg:gap-3">
                    <button className="flex items-center border border-[#B7B7B7] w-[117px] h-[40px] rounded-[10px] px-4 justify-between max-lg:w-full">
                      <h1 className="text-[11px] font-[400]">Narx </h1>
                      <SlArrowDown className="block max-lg:w-[9.07px] max-lg:h-[15.12px]"/>
                    </button>  
                    <button className="text-[11px] font-[600] w-[108px] h-[40px] border border-[#B7B7B7] rounded-[10px] max-lg:w-full max-lg:border-[3px]">
                      Qayta o’rnatish
                    </button>
                  </div> 

                 
                  </div>

              </div>
                  <div className="border-b border-[#B7B7B7] w-full my-[2vw] max-lg:my-[4vw]"></div>
           
                    <div className="hidden max-lg:flex flex-col  w-full gap-3">
                      <button className="px-4 font-[400] text-[11px] h-[43.12px] flex justify-between items-center border border-[#B7B7B7] rounded-[10px] w-full">
                        <h1>По умолчанию</h1>
                        <SlArrowDown className="w-[10px] h-[10px]"/>
                      </button>

                      <button className="px-4  mb-[5vw] font-[400] text-[11px] h-[43.12px] flex justify-between items-center border border-[#B7B7B7] rounded-[10px] w-full">
                        <h1>Поиск по ID</h1>
                        <TfiSearch className="w-[18px] h-[18px] text-[#B7B7B7]"/>
                      </button>

                    </div>


                  <div className="flex gap-3 max-lg:hidden">
                    <button className="text-[11px] font-[400] text-[#9D9D9D] w-[107px] h-[40px] border border-[#B7B7B7] rounded-[10px] ml-[3vw] max-lg:px-[10vw]">
                      Diaktivatsiya
                    </button>

                    <div className="flex items-center justify-between w-[840px]  ">
                    <button className="text-[11px] font-[400] text-[#9D9D9D] w-[107px] h-[40px] border border-[#B7B7B7] rounded-[10px]  ">
                       O’chirish
                    </button>
                    <button className="flex justify-between items-center text-[11px] font-[400] w-[134px] h-[40px] border border-[#B7B7B7] rounded-[10px] px-2  max-lg:hidden">
                      
                      <TfiSearch className="w-[20px] h-[20px] text-[#B7B7B7] ml-[5.859375vw] "/>
                    </button>
                    </div>
                    

                  </div>

                  <div className="hidden max-lg:flex max-lg:gap-3 items-center">
                    <input type="checkbox" name="" className="border-2 border-[#333] w-[20px] h-[20px]"/>
                    <button className="text-[11px] font-[400] w-[142px] h-[41px] border-[3px] border-[#B7B7B7] rounded-[10px]">
                      Diaktivatsiya
                    </button>
                    <button className="text-[11px] font-[400] w-[123px] h-[41px] border-[3px] border-[#B7B7B7] rounded-[10px]">
                      O'chirish
                    </button>
                  </div>
                  
                  <div>
                    <h1 className="text-[15px] font-[500] mt-[5vw] text-center">Sizning so'rovingiz uchun hech narsa topilmadi</h1>
                  </div>
            </div>
           </div> 
        </div>
    </div>
  )
}

export default Elon
