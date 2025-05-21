"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { HiPhone } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';
import Mapping from '@/components/Mapping';
import useUIState from "@/hooks/useUIState";

const page = () => {
   const { push } = useRouter();
   const [ widths, setWidths ] = useState(false);
   const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();
 

   const onClickCategory = (item:any ,src:any) => {
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
   {/* ---모바일간격--- */}
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
    {/* ---간격--- */}    

    <div className='md:mb-18 mb-4' />


     <section className='w-full flex flex-row items-center justify-center'>
      <div className="w-[1100px] md:block hidden items-center justify-center gap-1">
        <div className='flex flex-col'>
          <span className="text-[#4a5937] text-center text-[15px]">루틴그라운드 개포</span>
          <span className="text-[#333333] text-center text-[18px]" id="introText">
             리뉴얼 오픈한 구룡역 도보 5분 거리 합리적인 주거공간 루틴그라운드 개포입니다. 
          </span>
           <span className="text-[#333333] text-center text-[18px]" id="introText">
            첫 달 계약시 15만원 할인 이벤트 진행중입니다!
          </span>
       </div>   
       <div className='mt-5'/>
      </div>
     </section> 
 

  {/* ---갤러리 사진링크 열기 닫기--- */}
     <section className='md:hidden flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
            <div className='flex flex-row gap-2'>
              <div className='lg:text-start font-semibold text-center text-[20px] text-[#000000]'>루틴그라운드 개포</div>
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
              리뉴얼 오픈한 구룡역 도보 5분 거리 합리적인 주거공간 루틴그라운드 개포입니다.
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
    {/* ---end--- */}



    {/* ---모바일간격--- */}
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>
    {/* ---end--- */}
     
     
     
       <div className='md:mb-18 mb-4'></div>


   
    {/* ---시설안내 start--- */}
    <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>시설안내</div>
          <hr className="mt-1 h-0.5 md:bg-[#4a5937] bg-white border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
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

    {/* ---end--- */}  


      <div className='md:mt-0 mt-4' />
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>


       <div className='md:h-[150px]' />

    {/* ---질문--- */}  
     <div className='md:mb-18 mb-4'></div>
   
    <section className='flex flex-col justify-center items-center'>
      
      <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>자주묻는질문</div>
          <hr className="mt-1 h-0.5 md:bg-[#4a5937] border-t-0 opacity-100 w-[110px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("자주묻는질문" ,"/so")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[990px]"/>
       </div>
       </div>
       </div>
           {/* pc */}
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='md:w-[1100px] w-full flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='md:mt-7' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937] text-[20px]'>현재 진행중인 할인 이벤트가 있나요?</div>
                    <div className='text-[#999999] text-[15px]'>리뉴얼기념, 첫 달 15만원 이벤트 진행중입니다!</div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
             <div className='md:mt-7' />
           <section className='md:block hidden flex flex-col justify-center items-center'>
                <div className='w-[1100px] flex flex-col'>
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
                  <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937 text-[20px]'>현재 입주가능한 방이 있나요?</div>
                    <div className='text-[#333333] text-[15px]'>현재 입주가능한 방 목록은 전화주시거나 홈페이지에 입실문의를 남겨주시면 자세하게 안내해드리고 있습니다.</div>
                  </div>
                    </div>
                  </div>  
                  <div className='md:mt-7' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
             </section>
           {/* pc */}


           {/* 모바일 */}
            <section className='md:hidden block w-full'>
                <div className='w-full flex flex-col px-5'>
                    <div className='text-[#333333] text-[17px]'>현재 진행중인 할인 이벤트가 있나요?</div>
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>리뉴얼기념, 첫 달 15만원 이벤트 진행중입니다!</div>
                    <div className='mt-3' />
                    <div className='text-[#333333] text-[17px]'>현재 입주가능한 방이 있나요?</div>
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>현재 입주가능한 방 목록은 전화주시거나 홈페이지에 …</div>
                    <div className='mt-3' />
                    <div className='text-[#333333] text-[17px]'>방 가격이 어떻게 되나요?</div>
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>루틴그라운드의 방은 총 세 가지 타입으로 되어있으며…</div>
                    <div className='mt-3' />
                    <div className='text-[#333333] text-[17px]'>방을 실제로 보고싶어요.</div>
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>루틴그라운드는 현재 네이버 예약으로 방문투어 예약…</div>
                    <div className='mt-3' />
                    <div className='text-[#333333] text-[17px]'>위치가 어떻게 되나요?</div>
                    <div className='mt-1' />
                    <div className='text-[#999999] text-[16px]'>루틴그라운드는 구룡역 도보 5분에 위치해 강남권과 …</div>

                </div>
                   
             </section>
           {/* 모바일 */}
             <div className='mt-7' />
              <div className='flex flex-col md:w-[530px] w-full px-3'>
                <div className='md:hidden flex flex-col h-[40px] justify-end'>
                <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
                <div className='md:mt-3 mt-3' />
                <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("자주묻는질문" ,"/so")}}>더보기 &nbsp;&gt;</div>
              </div>
              </div>
          </section>          
  {/* ---질문 끝--- */}  



  
       <div className='md:h-[50px]' />


        <section className='md:hidden block'>
        <div className='md:mb-18 mb-4'></div>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    


         <Mapping/>

      <div className='md:h-[100px]' />
  
    
        <section className='md:hidden block'>
        <div className='md:mb-18 mb-1'></div>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    

      <div className='md:mb-0 mb-4'></div>
     
    
     {/* 입실문의 시작 */}
     <section className='flex flex-col md:justify-center justify-start md:items-center items-start'>
         <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>입실문의</div>
          <hr className="mt-1 h-0.5 md:text-[#4a5937] bg-[#4a5937] border-t-0 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("입실문의" ,"/ta")}}>더보기 &nbsp;&gt;</div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
      
       <div className='md:mt-7'/>
        
        <div>
            <div className="p-5 md:w-[1100px] w-full flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start md:gap-7 gap-1">
              
              <div className='md:[1100px] w-[330px]' onClick={() => {onClickCategory("입실문의" ,"/ta")}}>
                <span className="text-[#222222] font-semibold text-[16px]">
                  <a href="/?link=oknt2bfo&messageNo=524&mode=view">단기입실 문의드립니다.</a>
                  </span>
                <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <p className="text-[#BBBBBB] text-[13px] md:h-[110px]">
                    <a href="/?link=oknt2bfo&messageNo=524&mode=view">비밀글입니다.</a>
                  </p>
                 <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <span className="text-[#666666] text-[13px]">lsys****&nbsp;|&nbsp;</span>
                  <span className="text-[#AAAAAA] text-[13px]">2025.5.14</span>
              </div>

              <div className='mt-2' />
             <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full md:hidden block"/>
               <div className='mt-2' />

                <div className='md:[1100px] w-[330px]'>
                <span className="text-[#222222] font-semibold text-[16px]" onClick={() => {onClickCategory("입실문의" ,"/ta")}}>
                  <a href="/?link=oknt2bfo&messageNo=524&mode=view">단기입실 문의드립니다.</a>
                  </span>
                <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <p className="text-[#BBBBBB] text-[13px] md:h-[110px]">
                    <a href="/?link=oknt2bfo&messageNo=524&mode=view">비밀글입니다.</a>
                  </p>
                 <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <span className="text-[#666666] text-[13px]">lsys****&nbsp;|&nbsp;</span>
                  <span className="text-[#AAAAAA] text-[13px]">2025.5.14</span>
              </div>

             <div className='mt-2' />
             <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full md:hidden block"/>
               <div className='mt-2' />

                <div className='md:[1100px] w-[330px]'>
                <span className="text-[#222222] font-semibold text-[16px]" onClick={() => {onClickCategory("입실문의" ,"/ta")}}>
                  <a href="/?link=oknt2bfo&messageNo=524&mode=view">단기입실 문의드립니다.</a>
                  </span>
                <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <p className="text-[#BBBBBB] text-[13px] md:h-[110px]">
                    <a href="/?link=oknt2bfo&messageNo=524&mode=view">비밀글입니다.</a>
                  </p>
                 <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <span className="text-[#666666] text-[13px]">lsys****&nbsp;|&nbsp;</span>
                  <span className="text-[#AAAAAA] text-[13px]">2025.5.14</span>
              </div>
         </div>
        </div>

          <div className='flex flex-col'>
       </div>

        
        <div className='flex flex-col md:w-[530px] w-full px-3'>
          <div className='md:hidden flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-3 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("입실문의" ,"/ta")}}>더보기 &nbsp;&gt;</div>
       </div>
       </div>
     </section>
    {/* 입실문의 끝 */}




    <div className='md:h-[100px]' />
    <div className='md:mb-0 mb-4'></div>


      {/* 이미지 갤러리 시작 */}
      
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
    {/* 이미지 갤러리 끝 */}


   <div className='md:h-[100px]' />
      <Footer />
   </div>
   
 )
}

export default page;