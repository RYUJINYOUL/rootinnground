import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer'

function page (){
  return (
 <div className='md:my-10 my-25 p-3.5'>
     {/* ---질문--- */}  

      <div className='flex flex-col items-center justify-center w-full '>
          <div className='lg:mt-13' />
      <div className='flex md:flex-row flex-col md:justify-between items-center lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#4a5937] text-[#000000]'>자주묻는질문</div>
          <hr className="mt-1 h-0.5 md:bg-[#4a5937] bg-white border-t-0 opacity-100 w-[110px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          {/* <div className='lg:text-end md:block hidden text-center text-[14px]' onClick={() => {onClickCategory("이용안내" ,"/dastory")}}>더보기 &nbsp;&gt;</div> */}
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[990px]"/>
       </div>
       </div>
         <div className='lg:mt-13' />
       </div>
           <section className='flex flex-col justify-center items-center'>
                <div className='w-[1100px] flex flex-col'>
                  {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
                  <div className='mt-10' />
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937] text-[20px]'>현재 진행중인 할인 이벤트가 있나요?</div>
                    <div className='text-[#999999] text-[15px]'>리뉴얼기념, 첫 달 15만원 이벤트 진행중입니다!</div>
                  </div>
                   
                 
                  </div>  
                  <div className='mt-10' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
                </section>
          
          
          
                 <div className='mt-10' />
              
                <section className='flex flex-col justify-center items-center'>
                <div className='w-[1100px] flex flex-col'>
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
                  <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937] text-[20px]'>현재 입주가능한 방이 있나요?</div>
                    <div className='text-[#333333] text-[15px]'>현재 입주가능한 방 목록은 전화주시거나 홈페이지에 입실문의를 남겨주시면 자세하게 안내해드리고 있습니다.</div>
                  </div>
                    </div>
                  </div>  
                  <div className='mt-10' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
                </section>

                  <div className='mt-10' />
              
                <section className='flex flex-col justify-center items-center'>
                <div className='w-[1100px] flex flex-col'>
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
                  <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937] text-[20px]'>방 가격이 어떻게 되나요?</div>
                    <div className='text-[#333333] text-[15px]'>루틴그라운드의 방은 총 세 가지 타입으로 되어있으며, 각 타입과 가격은 다음과 같습니다. </div>
                     <div className='mt-10' />
                    <div className='text-[#333333] text-[15px]'>A Type. 큰 외창방 (35만원) </div>
                    <div className='text-[#333333] text-[15px]'>B Type. 외창방 (30만원) </div>
                    <div className='text-[#333333] text-[15px]'>C Type. 내창방 (28만원)</div>
                  </div>
                  
                    </div>
                  </div>  
                  <div className='mt-10' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
                </section>


                  <div className='mt-10' />
              
                <section className='flex flex-col justify-center items-center'>
                <div className='w-[1100px] flex flex-col'>
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
                  <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937 text-[20px]'>방을 실제로 보고싶어요.</div>
                    <div className='text-[#333333] text-[15px]'>루틴그라운드는 현재 네이버 예약으로 방문투어 예약을 받고 있습니다. 투어는 전화통화를 통해 진행되며, 네이버 예약해주신 뒤 시간에 맞춰 '개포동 170'으로 찾아오셔서 전화주시면 됩니다. </div>
                  </div>
                    </div>
                  </div>  
                  <div className='mt-10' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
                </section>


                  <div className='mt-10' />
              
                <section className='flex flex-col justify-center items-center'>
                <div className='w-[1100px] flex flex-col'>
                  <div className='flex flex-row gap-30'>
                    <div className='flex flex-row gap-1.5 lg:text-start text-center text-[15px]'>
                  <div className='flex flex-col gap-1.5 lg:text-start text-center text-[15px]'>
                  
                    <div className='text-[#4a5937 text-[20px]'>위치가 어떻게 되나요?</div>
                    <div className='text-[#333333] text-[15px]'>루틴그라운드는 구룡역 도보 5분에 위치해 강남권과 분당권 이동이 편리합니다.</div>
                    <div className='mt-10' />
                    <div className='text-[#333333] text-[15px]'>찾아오시는 방법은 다음과 같습니다.</div>
                    <div className='mt-10' />
                    <div className='text-[#333333] text-[15px]'>1. 구룡역 5번출구로 나와 개포고교 교차로까지 쭉 직진해주세요. </div>
                    <div className='text-[#333333] text-[15px]'>2. 개포고등학교를 왼쪽에 두고 좌회전하여 쭉 직진하세요. </div>
                    <div className='text-[#333333] text-[15px]'>3. 파리바게트와 세븐일레븐 사이 골목으로 들어오세요.</div>
                    <div className='text-[#333333] text-[15px]'>4. 식당 '리애'를 왼쪽에 두고 좌회전하세요. </div>
                    <div className='text-[#333333] text-[15px]'>5. 카페 '오로미아' 2층이 루틴그라운드 개포 입니다.</div>
                  </div>
                    </div>
                  </div>  
                  <div className='mt-10' />
                  <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
                </div>
                </section>
  {/* ---질문 끝--- */}  
       <div className='h-[150px]'/>
         <Footer />
       </div>
       
  )
}

export default page
