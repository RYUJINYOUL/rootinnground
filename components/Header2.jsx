"use client"
import React, { useEffect, useState, useRef } from 'react'
import Logo from './elements/Logo'
import Menu from '@/components/Menu'
import Menu2 from '@/components/Menu2'
import Navigator from './elements/Navigator'
import PagePadding from './PagePadding'
import useUIState from "@/hooks/useUIState";
import Gallery from '@/components/Gallery3'
import { usePathname } from 'next/navigation'

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils";


const HeaderDrawer = ({ children }) => {
  return (<Drawer direction='left'>
  <DrawerTrigger>{children}</DrawerTrigger>
  <DrawerContent className='w-[320px] h-full'>
  <nav className='w-[320px] h-full border-r-[1px] border-neutral-600 '>
        <div className='p-[24px]'><Logo total={true}/></div>
        <div className='bg-[#7f88e8] h-full'><Navigator /></div>
      </nav>
  </DrawerContent>
</Drawer>
  );
}



const Header2 = ({children}) => {
   const pathname = usePathname()
   const [isScrolled, setIsScrolled] = useState(false);
   const { homeCategory, setHomeCategory, headerImageSrc, setHeaderImageSrc } = useUIState();
   const headRef = useRef();

 

   useEffect(() => {
      const handleScroll = () => {
        const scrollValue = headRef?.current?.scrollTop;
        // console.log("-->scrollValue", scrollValue);
        setIsScrolled(scrollValue !== 0);
      };
  
      headRef?.current?.addEventListener("scroll", handleScroll);
      return () => {
        headRef?.current?.removeEventListener("scroll", handleScroll);
      }
    }, []);




  return (
    <header ref={headRef} className="overflow-y-auto w-full h-full">
      
     <section className="relative top-0 w-full">
        <div className={cn('block sticky top-100 w-full', (pathname !== "/")&&"hidden")}><Gallery/></div>
      </section>

       <PagePadding>  
   <section className={cn('absolute w-full top-0 left-0 flex md:h-[62px] h-[55px] z-10 items-start md:justify-center sm:justify-between', 
    isScrolled&&"md:bg-white bg-[#4a5937]", 
    homeCategory === "시설안내"&&"lg:h-[101px] h-[100px]",
    pathname !== "/"&&"md:bg-white bg-[#4a5937]"
    )}>
      
   <div className='flex flex-col'>
      <div className='md:absolute sm:absolute lg:relative lg:w-[1100px] items-center w-full md:justify-between sm:justify-between'>
          <section className='flex flex-row items-center md:h-[62px] h-[50px] '>
            <HeaderDrawer>
              <article className='lg:hidden ml-2 sm:pr-10'>
            <GiHamburgerMenu className={"md:text-black text-white"} size={30} />
              </article>
              </HeaderDrawer>
            <div className='lg:block hidden ml-2 sm:pr-10'>
              <Logo total={isScrolled}/>
            </div>  

            <article>
            <Menu total={isScrolled} />
            </article>
        </section>
     </div> 
  {/* <hr className="h-0.5 border-t-0 hidden md:block bg-neutral-100 opacity-100 dark:opacity-50"/> */}
   

   {/* <div className='md:pt-1 mt-1 bg-[#fafafa]' /> */}

   <div className='flex w-full bg-[#fafafa] items-center justify-start'>
   <div className={cn('hidden h-[0px]', homeCategory === "시설안내"&&"block h-[50px]")}>
     <article className={cn("md:relative sm:absolute lg:relative hidden md:top-10 lg:top-0 top-0 left-0 lg:w-[1100px]", 
      homeCategory === "시설안내"&&"block")}>
          <Menu2 total={true} />
     </article>
     <div className='mt-2.5' />
      <hr className="border-1 bg-neutral-100 opacity-100 dark:opacity-50 md:w-full w-[1100px]"/>
     </div>
    </div>
   </div>
   </section>
  </PagePadding>
 <section>{children}</section>

</header>
  )
}

export default Header2

