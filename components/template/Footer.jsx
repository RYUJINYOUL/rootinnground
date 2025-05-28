import Image from "next/image";
import PagePadding from '@/components/PagePadding';

const Footer = () => {


return (
     
    <section>
    
     <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
     </section>       
     <PagePadding>     
     <div className='mt-7'/>
         <div className='md:mb-18 mb-4'>
         <div className='w-full flex flex-col justify-center items-center gap-3'>
   
          <Image
             alt="logo"
             className="object-cover rounded-full"
             width={70}
             height={70}
             src={"/Image/mainmiddle.jpeg"}
           />  
        
             <ul className="list_info flex flex-col items-center">
                 <li className='text-[#000000] text-[15px] font-semibold'>
                   <span className="item_description">루틴그라운드 개포</span>
                 </li>
                 <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">전화번호 : </span>
                   <span className="item_description"><a href="tel:010-3896-0696" className="_callTel">
                      02-571-5335
                    </a></span>
                 </li>
                <li className='text-[#959595] text-[13px]'>
                   <span className="item_title">주소 : </span>
                   <span className="item_description">서울특별시 강남구 선릉로12길 5 2층</span>
                 </li>
                 <div className='mt-5'/>  
                 
                 <a href='https://m.search.naver.com/search.naver?query=%EB%A3%A8%ED%8B%B4%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C+%EA%B0%9C%ED%8F%AC%40' target='_blank'>
                 <li className='text-[#959595] p-2 text-[13px] border-1 border-[#9d9d9d]'>
                   <span className="item_title">루틴그라운드 개포@ </span>
                 </li>
                 </a>
               </ul>
           </div>
         </div>
          </PagePadding> 
      <div className='mt-7'/>    
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
     </section>
 )
}

export default Footer;