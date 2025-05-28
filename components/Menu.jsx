"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";
import useUIState2 from "@/hooks/useUIState2";
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



export default function Menu(props) {
  const { push } = useRouter();
  const pathname = usePathname()
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
  const { homeCategory2, setHomeCategory2, setHeaderImageSrc2, headerImageSrc2} = useUIState2();
  let total = props
  const homeCategoryList = [
    {
      label: "홈",
      src: "/",
    },
   {
      label: "시설안내",
      src: "/dastory/pro",
    },
      {
      label: "입실문의",
      src: "/ta",
    },
      {
      label: "자주묻는질문",
      src: "/so",
    },
     {
      label: "오시는길",
      src: "/map",
    },
  ];

 

  const onClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory(item.label);
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
      push(item.src, {scroll: false})
    }
  };

  useEffect(() => {
     if(pathname === "/") {
      setHomeCategory("홈");
    } 
     if (pathname === "/dastory/pro") {
      setHomeCategory("시설안내");
      setHomeCategory2("시설안내");
    }  
     if (pathname === "/map") {
      setHomeCategory("오시는길");
    } 
     if (pathname === "/so") {
      setHomeCategory("자주묻는질문");
    } 
     if (pathname === "/ta") {
      setHomeCategory("입실문의");
    }  
     if (pathname === "/dastory/jun") {
      setHomeCategory("시설안내");
      setHomeCategory2("방-Type B");
    }  
     if (pathname === "/dastory/reser") {
      setHomeCategory("시설안내");
      setHomeCategory2("방-Type A");
    } 
     if (pathname === "/dastory/gyu") {
      setHomeCategory("시설안내");
      setHomeCategory2("방-Type C");
    }  
     if (pathname === "/dastory/gong") {
      setHomeCategory("시설안내");
      setHomeCategory2("공용시설");
     }


    slideRight()
}, [pathname]);





const slideRight = () => {
  var slider = document.getElementById('nav');
  var slider2 = document.getElementById('nav2');

  // if (headerImageSrc === "/dastory/pro") {
  //   slider.scroll(200, 400)
  // }
  if (headerImageSrc === "/ta") {
    slider.scrollTo(200, 400)
  }
  if (headerImageSrc === "/so") {
    slider.scrollTo(250, 500)
  }
  if (headerImageSrc === "/map") {
    slider.scrollTo(300, 600)
  }

  if (pathname === "/dastory/reser") {
    slider2.scrollTo(0, 100)
  }
  if (pathname === "/dastory/jun") {
    slider2.scrollTo(50, 100)
  }
  if (pathname === "/dastory/gyu") {
     slider2.scrollTo(100, 200)
  }
  if (pathname === "/dastory/gong") {
     slider2.scrollTo(150, 400)
  }

};
  
  return (
    <nav id="nav" className="md:m-0 md:px-60 ml-5 w-full+10 flex gap-3 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "md:h-[62px] h-[55px] md:text-[16px] text-[15px] lg:text-white text-[#ffffff80] min-w-fit px-2 flex justify-center items-center",
            total.total&&"md:text-black text-[#ffffff80]",
            pathname !== "/"&&"lg:text-black",
            item.label === homeCategory &&
              "underline underline-offset-8 md:text-[17px] text-[16px] lg:text-[#4a5937] text-white font-medium",
            pathname === "/"&&total.total&&"lg:text-black"
          )}
        >
            {item.label}
        </div>
        
      );
    })}
  </nav>
  )
}


