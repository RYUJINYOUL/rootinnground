import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'

function page (){
  return (
    <div>
    <div className='md:my-20 my-25 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
       <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
             <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] text-[#4a5937]'>시설안내</div>
          <hr className="mt-1 h-0.5 md:bg-[#4a5937] border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
        <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosa78lcjv.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col md:w-[1100px] w-full items-start justify-start'>
          <div className='text-[18px] text-[#333333]'>제공 시설_개인공간</div>
          <div className='text-[13px] text-[#666666]'>침대, 책상, 옷장, 수납장, 냉장고</div>
          <div className='mt-10' />
        </div>

         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosas71RrT.webp"}
          />
        <div className='mt-10' />
        <div className='flex flex-col md:w-[1100px] w-full items-start justify-start'>
          <div className='text-[18px] text-[#333333]'>제공 시설_공용공간</div>
          <div className='text-[13px] text-[#666666]'>워시타워 2개, 샤워실, 화장실, 정수기, 밥솥, 전자레인지, 가스레인지, </div>
          <div className='mt-10' />
        </div>

         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosa7rrOEN.jpeg"}
          />
        <div className='mt-10' />
        <div className='flex flex-col md:w-[1100px] w-full items-start justify-start'>
          <div className='text-[18px] text-[#333333]'>제공 비품</div>
          <div className='text-[13px] text-[#666666]'>샴푸, 바디워시, 세탁세제, 섬유유연제, 쌀</div>
          <div className='mt-10' />
        </div>

      </section>
       </div>
         <Footer />
      </div> 
  )
}

export default page
