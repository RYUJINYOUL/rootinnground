import React from 'react'
import { CiMap } from "react-icons/ci";
import { HiArrowTurnRightUp } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import { PiCalendarCheck } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import { IoWifiOutline } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import useUIState from "@/hooks/useUIState";
import { cn } from "@/lib/utils";
import Map from "@/components/map"
import { usePathname } from 'next/navigation'

const Mapping = () => {
   const { push } = useRouter();
   const pathname = usePathname()
   const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

   const onClickCategory = (item:any ,src:any) => {
    if (homeCategory === item) {
      setHeaderImageSrc("");
      setHomeCategory(item);
    } else {
      setHeaderImageSrc(src);
      setHomeCategory(item);
      push(src)
    }
  };

  return (
    <div className='md:my-10 p-3.5'>
    <section className={cn('flex flex-col justify-center items-center md:pt-0' , pathname === "/map"&&'pt-15')}>
    <div className='lg:mt-13' />
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>오시는길</div>
          <hr className="mt-1 h-0.5 bg-[#4a5937] border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className={cn('flex flex-col md:h-[40px] h-[20px] justify-end', pathname === "/map"&&'hidden')}>
          <div className={cn('lg:text-end md:block hidden text-center text-[14px]', pathname === "/map"&&'hidden')}
          onClick={() => {onClickCategory("오시는길" ,"/map")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
      </section>

      

        <section className='md:mt-7 mt-0 flex justify-center items-center'>
        <div className={cn('md:w-[1100px] md:h-[500px] w-[390px] h-[250px] md:pt-0', pathname === "/map"&&'mt-5')}>
          <Map />
        </div>
        </section>


        <div className='md:mt-8 mt-2' />
    
    <div className='md:block hidden'>
    <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <div className='lg:text-start text-center text-[15px]'>루틴그라운드</div>
          <div className='mt-1' />
          <div className='lg:text-start font-semibold text-[#4a5937] text-center text-[26px]'>서울특별시 강남구 선릉로12길 5 2층</div>
          <div className='mt-8' />
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#4a5937] text-white'>
          <HiArrowTurnRightUp className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/directions/-/14144297.547440428,4506735.373226055,%EB%A3%A8%ED%8B%B4%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C,,/-/transit?c=15.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px] p-2 bg-[#4a5937] text-white'>
          <CiMap className='text-[20px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p?title=%EB%A3%A8%ED%8B%B4%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C&lng=127.0603867&lat=37.4836349&zoom=15&type=0&c=15.00,0,0,0,dh")}}>지도에서 보기</div>
          </div>
        </div>  
      </div>
    </section>

  

      <div className='mt-7' />
    
      <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiPhone className='text-[20px] text-gray-400'/>
          <div className=''>전화번호</div>
          </div>
           <div className='text-[15px] text-[#888] text-start'><a href="tel:0507-1388-4838" className="_callTel">
            0507-1388-4838
          </a></div>
          <div className='mt-2' />
      
     
        </div>  
        <div className='mt-7' />
     
      </div>
      </section>

        <section className='flex flex-col justify-center items-center'>
      <div className='w-[1100px] flex flex-col'>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
        <div className='mt-7' />
        <div className='flex flex-row gap-30'>
          <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
          <HiMiniMapPin className='text-[20px] text-gray-400'/>
          <div className=''>오시는길</div>
          </div>
          <div className='lg:text-start text-center text-[15px]'>
           <span className="text">
              1. 구룡역 5번출구로 나와 개포고교 교차로까지 쭉 직진해주세요. <br/>2.
              개포고등학교를 왼쪽에 두고 좌회전하여 쭉 직진하세요. <br/>3. 파리바게트와
              세븐일레븐 사이 골목으로 들어오세요. <br/>4. 식당 '리애'를 왼쪽에 두고
              좌회전하세요. <br/>5. 카페 '오로미아' 2층이 루틴그라운드 개포 입니다.
            </span>
          </div>
        </div>  
         <div className='mt-10' />
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
      </div>
          
      </section>



       <div className='mt-14' />
    
   
      </div>


      

    <section className='md:hidden block'>
    <div className='flex flex-row gap-2'>
          <div className='flex rounded-md flex-row gap-1.5 lg:text-start text-center text-[12px] p-2 bg-[#4a5937] text-white'>
          <HiArrowTurnRightUp className='text-[15px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p/directions/-/14144297.547440428,4506735.373226055,%EB%A3%A8%ED%8B%B4%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C,,/-/transit?c=15.00,0,0,0,dh")}}>길찾기</div>
          </div>
          <div className='flex flex-row gap-1.5 rounded-md lg:text-start text-center text-[12px] p-2 bg-[#4a5937] text-white'>
          <CiMap className='text-[15px]'/>
          <div className='text-white' onClick={() => {window.open("https://map.naver.com/p?title=%EB%A3%A8%ED%8B%B4%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C&lng=127.0603867&lat=37.4836349&zoom=15&type=0&c=15.00,0,0,0,dh")}}>지도에서 보기</div>
          </div>
        </div>  
    </section>

    <section className='md:hidden flex justify-center items-center'>
    <div className='flex md:p-0 p-3 flex-col w-full'>
      <div className='md:mt-10 mt-2' />
      <div className='md:text-[15px] text-[#222] font-bold text-start'>루틴그라운드</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'>서울특별시 강남구 선릉로12길 5 2층</div>
        <div className='mt-5' />
         <div className='md:text-[15px] text-[#222] font-bold text-start'>전화번호</div>
        <div className='mt-1' />
        <div className='text-[15px] text-[#888] text-start'><a href="tel:0507-1388-4838" className="_callTel">
            0507-1388-4838
          </a></div>
        <div className='mt-5' />
      
         <div className='md:text-[15px] text-[#222] font-bold text-start'>오시는길</div>
        <div className='mt-1' />
        <div className='text-[15px] text-start'>

         <div className='lg:text-start text-center text-[15px]'>
           <span className="text">
              1. 구룡역 5번출구로 나와 개포고교 교차로까지 쭉 직진해주세요. <br/>2.
              개포고등학교를 왼쪽에 두고 좌회전하여 쭉 직진하세요. <br/>3. 파리바게트와
              세븐일레븐 사이 골목으로 들어오세요. <br/>4. 식당 '리애'를 왼쪽에 두고
              좌회전하세요. <br/>5. 카페 '오로미아' 2층이 루틴그라운드 개포 입니다.
            </span>
          </div>
          
        </div>
       

        <div className='mt-5' />
      </div>  
     </section>  

     <div className={cn('flex flex-col md:w-[530px] w-full', pathname === "/map"&&'hidden')}>
          <div className='md:hidden flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 md:hidden block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-3 mt-3' />
          <div className='lg:text-end text-center md:hidden block text-[14px]' onClick={() => {onClickCategory("오시는길" ,"/map")}}>더보기 &nbsp;&gt;</div>
       </div>
       </div>
     </div>
  )
}

export default Mapping
