import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
    <div className='lg:my-10 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
    
          <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>다함시설</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
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
            height={724}
            src={"/Image/sisul/1.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/2.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/3.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/4.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/6.jpeg"}
          />
          <div className='mt-7' />

          <div className='flex flex-row'>
           <Image
            alt="mediaItem"
            className="object-contain"
            width={530}
            height={354}
            src={"/Image/sisul/8.jpeg"}
          />
           <div className='w-[30px]' />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={530}
            height={354}
            src={"/Image/sisul/9.jpeg"}
          />
          </div>

          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/10.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/12.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/13.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/14.jpeg"}
          />
           <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/15.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/17.jpeg"}
          />
          <div className='mt-7' />
           <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/sisul/19.jpeg"}
          />
           <div className='mt-7' />
    
      
       </section>

       <div className='h-[150px]'/>
       <Footer />
       </div>
  )
}

export default page
