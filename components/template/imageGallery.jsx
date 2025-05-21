"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import useUIState from "@/hooks/useUIState";

const ImageGallery = () => {
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
       <section className='flex flex-col justify-center items-center'>
          
          <div className='flex flex-col'>
          <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
              <div className='lg:px-0 px-3 flex flex-col md:h-[40px] h-[0px] justify-end'>
              <div className='lg:text-start md:block hidden font-semibold text-center text-[20px] text-[#4a5937]'>이미지 갤러리</div>
              <hr className="mt-1 h-0.5 md:text-[#4a5937] bg-[#4a5937] border-t-0 opacity-100 w-[110px] dark:opacity-50"/>
           </div>
           <div className='flex flex-col md:h-[40px] h-[0px] justify-end'>
              <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("시설안내" ,"/dastory/pro")}}>더보기 &nbsp;&gt;</div>
              <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[990px]"/>
           </div>
           </div>
           </div>
          
           <div className='md:mt-7' />
        
            <div className='flex flex-col md:w-[530px] w-full'>
              <div className='md:hidden flex flex-col md:h-[40px] h-[0px] justify-end'>
              <hr className="mt-1 h-0.5 md:block hidden border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
              <div className='md:mt-3 mt-3' />
              <div className='lg:text-end text-center md:block hidden text-[14px]' onClick={() => {onClickCategory("시설안내" ,"/dastory/pro")}}>더보기 &nbsp;&gt;</div>
           </div>
           </div>
    
           <div className='flex flex-col md:gap-5 gap-0'>
             <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-center items-start gap-5 rounded-md'>
                  <Image
                      alt="mediaItem"
                      className="w-full h-[350px] hidden md:block rounded-md"
                      width={510}
                      height={350}
                      style={{ objectFit: "cover" }}
                      src={"/Image/mosa78lcjv.jpeg"}
                    />
                    <Image
                      alt="mediaItem"
                      className="w-[350px] h-[350px] hidden md:block rounded-md"
                      width={350}
                      height={350}
                      src={"/Image/mosas71RrT.jpeg"}
                    />  
                    <div className='flex w-[350px] flex-col gap-3'>
                    <Image
                      alt="mediaItem"
                      className="w-[170px] h-[170px] hidden md:block rounded-md"
                      width={170}
                      height={170}
                      src={"/Image/mosa7rrOEN.jpeg"}
                    />   
                    <Image
                      alt="mediaItem"
                      className="w-[170px] h-[170px] hidden md:block rounded-md"
                      width={170}
                      height={170}
                      src={"/Image/mosatY8JnC.jpeg"}
                    /> 
                    </div>  
          </div>
    
          <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-center items-start gap-5 rounded-md'>
              <div className='flex w-[350px] flex-col gap-3'>
                  <Image
                    alt="mediaItem"
                    className="w-[170px] h-[170px] hidden md:block rounded-md"
                    width={170}
                    height={170}
                    src={"/Image/mosaemjEGm.jpeg"}
                  />   
                  <Image
                    alt="mediaItem"
                    className="w-[170px] h-[170px] hidden md:block rounded-md"
                    width={170}
                    height={170}
                    src={"/Image/mosaJudA3J.jpeg"}
                  />
              </div>
              <Image
                alt="mediaItem"
                className="w-full h-[350px] hidden md:block rounded-md"
                width={510}
                height={350}
                src={"/Image/mosaWtjeTu.jpeg"}
              />   
              <Image
                alt="mediaItem"
                className="w-[350px] h-[350px] hidden md:block rounded-md"
                width={350}
                height={350}
                style={{ objectFit: "cover" }}
                src={"/Image/mosaNJN0GY.jpeg"}
              />  
            </div>  
           
           <div className='md:w-[1100px] w-full md:px-0 px-3 flex md:flex-row flex-col justify-center items-start gap-5 rounded-md'>
                  <Image
                      alt="mediaItem"
                      className="w-full h-[350px] hidden md:block rounded-md"
                      width={510}
                      height={350}
                      style={{ objectFit: "cover" }}
                      src={"/Image/mosagfLoVy.jpeg"}
                    />
                    <Image
                      alt="mediaItem"
                      className="w-[350px] h-[350px] hidden md:block rounded-md"
                      width={350}
                      height={350}
                      src={"/Image/mosaXtR3BL.jpeg"}
                    />  
                    <div className='flex w-[350px] flex-col gap-3'>
                        <Image
                          alt="mediaItem"
                          className="w-[170px] h-[170px] hidden md:block rounded-md"
                          width={170}
                          height={170}
                          src={"/Image/mosarbxJpn.jpeg"}
                        />   
                        <Image
                          alt="mediaItem"
                          className="w-[170px] h-[170px] hidden md:block rounded-md"
                          width={170}
                          height={170}
                          src={"/Image/mosaCrGvkU.jpeg"}
                        /> 
                  </div>  
          </div>
           </div>
    
         </section>
  )
}

export default ImageGallery
