"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";




const Sisul = () => {
      const { push } = useRouter();
       const [ widths, setWidths ] = useState(false);
       const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
     
    
       const onClickCategory = (item ,src) => {
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
    <div>
      <section className='md:hidden flex flex-col justify-center items-center'>
            
            <div className='flex flex-col'>
            <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
                <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
                  <div className='flex flex-row gap-2'>
                     <div className='lg:px-0 flex flex-col h-[40px] justify-end'>
                      <div className='md:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>루틴그라운드 개포</div>
                      <hr className="mt-1 h-0.5 md:bg-[#4a5937] bg-[#4a5937] border-t-0 opacity-100 w-[145px] dark:opacity-50"/>
                  </div>
                  </div>
                <hr className="mt-1 h-0.5 md:bg-[#7f88e8] bg-white border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
             </div>
             </div>
             </div>
            
             
             <div className='md:mt-7 mt-2' />
      
             <div className='relative md:hidden flex flex-row w-full px-3 py-1 justify-center items-start rounded-md gap-1' 
             onClick={() => { push("/dae")}} >
                <Image
                  alt="mediaItem"
                  className="w-[225px] h-[155px] rounded-md"
                  width={225}
                  height={155}
                  src={"/Image/mosas71RrT.jpeg"}
                />
          
               <div className='flex flex-col gap-1'>
                <Image
                  alt="mediaItem"
                  className="w-[120px] h-[75px] rounded-md"
                  width={120}
                  height={75}
                  src={"/Image/mosa78lcjv.jpeg"}
                />  
      
                <Image
                  alt="mediaItem"
                    className="w-[120px] h-[75px] rounded-md"
                  width={120}
                  height={75}
                  src={"/Image/mosa7rrOEN.jpeg"}
                />  
            
                <div className='absolute w-[30px] h-[30px] text-[16px] flex justify-center items-center text-white right-3.5 bottom-1.5 bg-black md:opacity-40 opacity-60'>17</div> 
        
                </div>
             </div>
           <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
              <div className='md:mt-10' />
                <div className='text-[15px] text-[#222222] block md:hidden truncate text-start'>
                 <p className="text-[15px] text-[#222222]">
                    리뉴얼 오픈한 구룡역 도보 5분 거리 합리적인 <br/> 주거공간 루틴그라운드 개포입니다.
                    <br />첫 달 계약시 15만원 할인 이벤트 진행중입니다!
                  </p></div>
                <div className='md:mt-10 mt-2' />
                {/* <div className='md:hidden flex flex-col h-[40px] justify-end'>
                <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
                <div className='md:mt-10 mt-3' />
                <div className='lg:text-end text-center text-[14px]' onClick={() => { widths ? setWidths(false) : setWidths(true)}}>{widths === false ? "열기" : "닫기"} &nbsp;</div>
                </div> */}
              </div>  
             </section>
    </div>
  )
}

export default Sisul
