"use client";
import { useEffect, useState, useMemo } from "react";
import { Phone, MessageSquare, Share2 } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "./ui/carousel";
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

const Gallery3 = () => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);


 

  return (
     <div className="w-full sm:w-auto">
      <div className='relative w-full md:h-[500px] h-[430px]'>
       <Image
          alt="mediaItem"
          className="object-cover"
          // width={530}
          // height={353}
          fill
          src={"/Image/3.jpeg"}
        /> 
        <div className='md:hidden absolute md:h-[500px] h-[430px] top-0 bg-black md:opacity-40 opacity-60 w-full'></div>

         <div className="absolute hidden md:block md:top-1/2 top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
              <img
                src="/Image/1.jpeg"
                alt="고시원 썸네일"
                className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full mx-auto mb-4"
              />
              <div className="text-[22px] md:text-[20px] md:w-screen w-[300px] font-bold text-[#fff] whitespace-pre-line">
                루틴그라운드 개포 
              </div>
              <p className="text-[15px] md:text-base text-[#ffffff99]">
                구룡역 5분, 합리적인 주거공간 루틴그라운드입니다.
              </p>
              <div className="mt-2"></div>
           </div>


           <div className="relative top-3/10 pt-20 flex flex-row w-full items-center justify-center">
              <div className="absolute md:hidden flex top-3/10 flex-row">
                  <div className="w-4/5 h-[230px] top-3/10 -ml-0 pr-38">
                <img
                  src="/Image/9.jpeg" // Replace with actual image path
                  alt=""
                  className="h-[230px] object-cover"
                />
              </div>
              </div>
              <div className="pr-38">
              <div className="-mt-3 m-5 md:hidden absolute flex flex-col items-center justify-center gap-3 
                 w-3/5 h-[252px] top-3/10 bg-[#4a5937]">
                <div>
                  <h2 className="text-[21px] text-[#FFFFFF] font-bold">루틴그라운드</h2>
                  <h3 className="text-[21px] text-[#FFFFFF] font-bold mb-2">개포</h3>
                 <p className="text-[14px] text-[#bab7b7] ">
                  구룡역 5분, 합리적인 <br/>주거공간 루틴그라운<br/>드입니다.
                </p>

                </div>
                <div className="flex gap-2 items-start">
                  <button className="bg-[#354027] text-white p-2">
                   <a href="tel:010-4317-4838">
                    <Phone className="w-4 h-4" />
                    </a>
                  </button>
                  <button className="bg-[#354027] text-white p-2">
                    <a href="sms:010-4317-4838">
                    <MessageSquare className="w-4 h-4" />
                    </a>
                  </button>
                  <button> 
                  {/* // onClick={()=>{ */}
                  {/* //   navigator.share({ */}
                  {/* //     title: "충청 미니추레라",
                  //     url: "https://cjselfloda.vercel.app"
                  //   })
                  // }}> */}
                    {/* <Share2 className="w-4 h-4" /> */}
                  </button>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  );
};


export default Gallery3;