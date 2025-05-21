"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getFirestore, collection, where, setDoc, onSnapshot, query} from "firebase/firestore";
import app from '../../firebase';
import moment from 'moment';
import useUIState from "@/hooks/useUIState";

const Notice = () => {
  const db2 = getFirestore(app);
  const [message, setMessages] = useState([]);
  const { push } = useRouter();
  const timeFromNow = timestamp => moment(timestamp).format('YYYY-MM-DD');
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();


  const TABLE_HEAD = ["번호", "글제목", "글쓴이", "작성일"];


  useEffect(() => {
    // addMessagesListener(new Map(categoryList2).get(homeCategory), reg)
    
    addMessagesListener()
 
    return () => {
    }
  }, [])


//   , orderBy('createdDate', 'desc')
  const addMessagesListener = async () => {

    const tweetsQuery = query(collection(db2, "reviews"))

      await onSnapshot(tweetsQuery, (snapshot) => { // <---- 
        const tweetList = snapshot.docs.map((doc) => {
          const { name, description, url, 
            title, phoneNumber, createdDate, NumOfLikes, userKey,
          } = doc.data();
          const id = doc.id
          const date = doc.data().createdDate.toDate();
          return {
            name, description, url, 
            title, phoneNumber, date, NumOfLikes, userKey,
          };
        });
          setMessages(tweetList);
      });
  };


  const onClickCard = ({ title, name, description, date }) => {
    onClickCategory("입실문의" ,"/ta")
    push(`/ta/playlist?title=${title}&name=${name}&des=${description}&date=${date}`);
    // push(`/test/?name=${id}collection=${collection}`);
  };

 const onClickCategory = (item ,src) => {
    if (homeCategory === item) {
        console.log(src)
      setHeaderImageSrc("");
      setHomeCategory(item);
    } else {
      setHeaderImageSrc(src);
      setHomeCategory(item);
      push(src)
    }
  };



  return (
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
        
        <div> {message.map(({ title, name, description, date }, index) => {
      
 
    
         return (
            <div className="p-5 md:w-[1100px] w-full flex md:flex-row flex-col md:justify-between justify-center md:items-center items-start md:gap-7 gap-1">
              
              <div key={index} className='md:[1100px] w-[330px]' onClick={()=> onClickCard({ title, name, description, date })}>
                <span className="text-[#222222] font-semibold text-[16px]">
                  {title}
                  </span>
                <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                 <div className='mt-3 md:block hidden md:[1100px] w-full'/>
                  <span className="text-[#666666] text-[13px]">{name}&nbsp;|&nbsp;</span>
                  <span className="text-[#AAAAAA] text-[13px]">{timeFromNow(date)}</span>
              </div>
            </div>
            );
          })}
        </div>

          <div className='flex flex-col'>
       </div>

         <div className='mt-7' />
        <div className='flex flex-col md:w-[530px] w-full px-3'>
          <div className='md:hidden flex flex-col h-[40px] justify-end'>
          <hr className="mt-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-full"/>
          <div className='md:mt-3 mt-3' />
          <div className='lg:text-end text-center text-[14px]' onClick={() => {onClickCategory("입실문의" ,"/ta")}}>더보기 &nbsp;&gt;</div>
       </div>
       </div>
     </section>
  )
}

export default Notice
