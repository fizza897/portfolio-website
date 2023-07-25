import React from 'react'
import Portfolio1 from "../../Images/1.png"
import Portfolio2 from "../../Images/2.jpeg"
import Portfolio3 from "../../Images/3.webp"
import Portfolio4 from "../../Images/4.jpeg"
import Portfolio5 from "../../Images/5.jpeg"
import Portfolio6 from "../../Images/6.webp"
import Image from 'next/image'
export default function Portfolio() {
  return (
    <>
    <div className='flex items-center max-w-7xl mx-auto leading-8 mb-10' id='portfolio'>
      <div className='text-gray-500 px-10 mt-32 mx-auto'>
    <h1 className='text-center text-4xl text-white mb-10'>Portfolio</h1>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto'>
    <div className='shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
      <div><Image src={Portfolio1} className='w-60 h-40 rounded-t-md' alt="abc"  /></div>
      <div className='flex justify-between px-5 text-black font-semibold'>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Demo</a> </button>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Code</a> </button>
      </div>
      </div>
      <div className='shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
      <div><Image src={Portfolio2} className='w-60 h-40 rounded-t-md' alt="abc"  /></div>
      <div className='flex justify-between px-5 text-black font-semibold'>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Demo</a> </button>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Code</a> </button>
      </div>
      </div>
      <div className='shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
      <div><Image src={Portfolio3} className='w-60 h-40 rounded-t-md' alt="abc"  /></div>
      <div className='flex justify-between px-5 text-black font-semibold'>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Demo</a> </button>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Code</a> </button>
      </div>
      </div>
      <div className='shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
      <div><Image src={Portfolio4} className='w-60 h-40 rounded-t-md' alt="abc"  /></div>
      <div className='flex justify-between px-5 text-black font-semibold'>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Demo</a> </button>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Code</a> </button>
      </div>
      </div>
      <div className='shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
      <div><Image src={Portfolio5} className='w-60 h-40 rounded-t-md' alt="abc"  /></div>
      <div className='flex justify-between px-5 text-black font-semibold'>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Demo</a> </button>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Code</a> </button>
      </div>
      </div>
      <div className='shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75'>
      <div><Image src={Portfolio6} className='w-60 h-40 rounded-t-md' alt="abc"  /></div>
      <div className='flex justify-between px-5 text-black font-semibold'>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Demo</a> </button>
        <button className='p-2 hover:scale-105 duration-200'><a href="https://www.google.com" target={"_blank"}>Code</a> </button>

      </div>
      </div>
      
    </div>
    </div>
    </div>
    
    </>
  )
}
