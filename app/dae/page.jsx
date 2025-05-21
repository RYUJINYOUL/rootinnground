"use client"
import React, { useState } from 'react'

import Gallery from '@/components/Gallery';

const page = () => {
    let slides = [
   "/Image/mosa7rrOEN.jpeg", 
   "/Image/mosa78lcjv-f48b9633b3362.jpeg", 
   "/Image/mosa78lcjv.jpeg", 
   "/Image/mosaAzsUcM.jpeg", 
   "/Image/mosaAzsUcM.webp", 
   "/Image/mosaCrGvkU.jpeg", 
   "/Image/mosaDgsemg.jpeg", 
   "/Image/mosaemjEGm.jpeg", 
   "/Image/mosagfLoVy.jpeg", 
   "/Image/mosaIBv3Bl.jpeg", 
   "/Image/mosaJ6YUEo.jpeg", 
   "/Image/mosaJudA3J.jpeg", 
   "/Image/mosalmQYXL.jpeg", 
   "/Image/mosaNJN0GY.jpeg", 
   "/Image/mosaq5QoSU.jpeg", 
   "/Image/mosarbxJpn.jpeg", 
   "/Image/mosas71RrT-6c69ffd5100ca8.jpeg", 
   "/Image/mosas71RrT.jpeg", 
   "/Image/mosas71RrT.webp", 
   "/Image/mosatY8JnC.jpeg", 
   "/Image/mosaUNecoI.jpeg", 
   "/Image/mosaWtjeTu.jpeg", 
   "/Image/mosaXtR3BL.jpeg",
   ]
 

return (
    <div className='w-screen bg-[#000000C9] h-screen flex items-center justify-center'>
      <Gallery images={slides} />
   </div>
   
 )
}

export default page;