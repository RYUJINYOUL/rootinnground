"use client"
import React from 'react'
import useUIState from "@/hooks/useUIState";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'

function Logo(props) {
    const { push } = useRouter();
    const pathname = usePathname()
    const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
    let total = props
    const onClickLogo = () =>{

        push("/", {scroll: false});
    }


  return (
    <section className='items-center'>
        {/* <div className="lg:hidden">
        <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
        />
        </div> */}
        <div className='cursor-pointer flex flex-row items-center' onClick={onClickLogo} >
           
            <div className={cn('font-semibold md:text-[22px] text-[18px] text-white cursor-pointer', 
            total.total&&"text-black",
            pathname!=="/"&&"text-black",
          )}
             onClick={onClickLogo}>루틴그라운드 개포</div>
        </div>
       
    </section>
  )
}

export default Logo
