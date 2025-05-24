"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";

const SisulNotice = () => {
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
      <section className='flex flex-col justify-center items-center'>
            
            <div className='flex flex-col'>
            <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
                <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
                 <div className='lg:px-0 pb-1 flex flex-col h-[40px] justify-end'>
                      <div className='md:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>시설안내</div>
                      <hr className="mt-1 h-0.5 md:bg-[#4a5937] bg-[#4a5937] border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
                  </div>
             </div>
             <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
                <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("시설안내" ,"/dastory/pro")}}>더보기 &nbsp;&gt;</div>
                <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
             </div>
             </div>
             </div>
            
             
             <div className='md:mt-7' />
              
            <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-center items-start md:gap-7 gap-1 rounded-md' onClick={() => {onClickCategory("시설안내" ,"/dastory/pro")}}>
             {/* pc 사진 */}
             <div className='md:block hidden flex flex-col'>
             <Image
                alt="mediaItem"
                className="w-[540px] h-[360px] rounded-md"
                width={540}
                height={360}
                src={"/Image/mosa78lcjv.jpeg"}
              />
                <div className='mt-3' />
                <div className='md:text-[20px] md:block hidden text-[#4a5937] font-semibold text-[20px] text-start'>제공 시설_개인공간</div>
                <div className='md:mt-1 mt-0' />
                <div className='text-[15px] text-[#666] md:block hidden text-start'>
                  침대, 책상, 옷장, 수납장, 냉장고</div>
              </div>
      
               <div className='md:block hidden flex flex-col'>
              <Image
                alt="mediaItem"
                className="w-[540px] h-[360px] rounded-md"
                width={540}
                height={360}
                src={"/Image/mosas71RrT.jpeg"}
              />
               <div className='mt-3' />
                <div className='md:text-[20px] md:block hidden text-[#4a5937] font-semibold text-[20px] text-start'>제공 시설_공용공간</div>
                <div className='md:mt-1 mt-0' />
                <div className='text-[15px] text-[#666] md:block hidden text-start'>
                  워시타워 2개, 샤워실, 화장실, 정수기, 밥솥, 전자레인지, 가스레인지</div>
              </div>
              {/* pc 사진 */}
      
      
              {/* 모바일 사진 */}
              <div className='md:hidden flex flex-col gap-5'>
                  <div className='md:hidden flex flex-row gap-5'>
                    <Image
                    alt="mediaItem"
                    className="w-[100px] h-[100px] rounded-md"
                    width={100}
                    height={100}
                    src={"/Image/mosa78lcjv.jpeg"}
                  />
                    <div>
                      <div className='mt-3' />
                      <div className='md:text-[20px] text-[#4a5937] font-semibold text-[15px] text-start'>제공 시설_개인공간</div>
                      <div className='md:mt-1 mt-0' />
                      <div className='text-[15px] text-[#666] text-start'>
                        침대, 책상, 옷장, 수납장, 냉장고</div>
                      </div>
                    </div>  
                  
      
                <div className='md:hidden flex flex-row gap-5'>
                    <Image
                      alt="mediaItem"
                      className="w-[100px] h-[100px] rounded-md"
                      width={100}
                      height={100}
                      src={"/Image/mosas71RrT.jpeg"}
                    />
                    <div>
                      <div className='mt-3' />
                        <div className='md:text-[20px] text-[#4a5937] font-semibold text-[15px] text-start'>제공 시설_공용공간</div>
                        <div className='md:mt-1 mt-0' />
                        <div className='text-[15px] text-[#666] text-start'>
                          워시타워 2개, 샤워실, 화장실, 정수기,<br/> 밥솥, 전자레인지, 가스레인지</div>
                      </div>
                    </div>
               </div>
              </div> 
              {/* 모바일 사진 */}
      
      
              <div className='mt-7' />
               <div className='flex flex-col md:w-[530px] w-full px-3'>
                <div className='md:hidden flex flex-col h-[40px] justify-end'>
                <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
                <div className='md:mt-3 mt-3' />
                <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("시설안내" ,"/dastory/pro")}}>더보기 &nbsp;&gt;</div>
             </div>
             </div>
             </section>
    </div>
  )
}

export default SisulNotice
