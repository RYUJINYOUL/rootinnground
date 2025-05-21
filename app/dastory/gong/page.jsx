import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
    <div className='md:my-20 my-25 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
      <div className='lg:mt-13' />
       <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
             <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] text-[#4a5937]'>공용시설</div>
          <hr className="mt-1 h-0.5 md:bg-[#4a5937] border-t-0 bg-neutral-700 opacity-70 w-[70px] dark:opacity-50"/>
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
            src={"/Image/mosalmQYXL.jpeg"}
          />

         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaUNecoI.jpeg"}
          />

          <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaCrGvkU.jpeg"}
          />

         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaAzsUcM.jpeg"}
          />
          
            <div className='mt-5' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaDgsemg.jpeg"}
          />

         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaJ6YUEo.jpeg"}
          />
         
          <div className='mt-5' />
               <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaXtR3BL.jpeg"}
          />

         <div className='mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={800}
            src={"/Image/mosaq5QoSU.jpeg"}
          />

      </section>
      
       
       <div className='h-[150px]'/>
         <Footer />
       </div>
       
  )
}

export default page
