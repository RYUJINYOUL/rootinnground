"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { HiPhone } from "react-icons/hi2";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';
import Mapping from '@/components/Mapping';
import useUIState from "@/hooks/useUIState";
import Gallery from '@/components/Gallery';

const page = () => {
    let slides = [
   "/Image/mosazzlRst.jpeg", 
    "/Image/mosazV1S1U.jpeg", 
    "/Image/mosaZppelt.jpeg", 
    "/Image/mosazD0onx.jpeg", 
    "/Image/mosaXzIaZ6.jpeg", 
    "/Image/mosaYkiage.jpeg", 
    "/Image/mosawJnOJr.jpeg", 
    "/Image/mosau658pi.jpeg", 
    "/Image/mosaUg4MYi.jpeg", 
    "/Image/mosatpNBJw.jpeg", 
    "/Image/mosapTi9lG.jpeg", 
    "/Image/mosap47im9.jpeg", 
    "/Image/mosao63LFE.jpeg", 
    "/Image/mosajs9fUJ.jpeg", 
    "/Image/mosaIYUwQ9.jpeg", 
    "/Image/mosaiMoiDM.jpeg", 
    "/Image/mosad2oAnf.jpeg", 
    "/Image/mosa37JnzD.jpeg", 
    "/Image/mosa8DNMqr.jpeg", 
    "/Image/mosa0tPNd1.jpeg", 
    "/Image/mosa0Dia0d.jpeg", 
    "/Image/mainmiddle.jpeg", 
    "/Image/main4.jpeg", 
    "/Image/main3.jpeg", 
    "/Image/main2.jpeg", 
    "/Image/main1.jpeg", 
    "/Image/main.jpeg",
   ]
 

return (
    <div className='w-screen bg-[#000000C9] h-screen flex items-center justify-center'>
      <Gallery images={slides} />
   </div>
   
 )
}

export default page;