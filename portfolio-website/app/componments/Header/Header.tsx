"use client"
import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
export const Header = () => {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    <section className='bg-gray-700 text-white'>
      <div className='flex justify-between'>
        <h1 className='font-autograph m-7'>Fizza Azam</h1>
        <ul className='md:flex hidden m-7 '>
          <a className='cursor-pointer' href='#home'>
          <li className='mx-5 font-cookies text-2xl hover:scale-150 duration-500' >Home</li>
          </a>
          <a className='cursor-pointer' href='#about' >
          <li className='mx-5 font-cookies text-2xl hover:scale-150 duration-500' >About</li>
          </a>
          <a className='cursor-pointer' href='#portfolio'>
          <li className='mx-5 font-cookies text-2xl hover:scale-150 duration-500' >Portfolio</li>
          </a>            
          <a className='cursor-pointer' href='#skills'>
          <li className='mx-5 font-cookies text-2xl hover:scale-150 duration-500' >Skills</li>
          </a>  
          <a className='cursor-pointer' href='#contact'>
          <li className='mx-5 font-cookies text-2xl hover:scale-150 duration-500' >Contact</li>
          </a>  
          
        </ul>
        <div className='pr-5 md:hidden items-center z-20 ' onClick={()=>{
          setToggle(!toggle);
          console.log(toggle)
        }}>
          { toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30}/>
      }
        </div>
        {!toggle ?

          <div className='top-0 left-0 fixed bg-black h-screen text-red-400 w-full flex items-center justify-center'>
        <ul className='m-7 text-white'>
          <li className='mx-5 my-2  font-cookies text-4xl hover:scale-150 duration-500' >Home</li>
          <li className='mx-5 my-2  font-cookies text-4xl hover:scale-150 duration-500' >About</li>
          <li className='mx-5 my-2  font-cookies text-4xl hover:scale-150 duration-500'>Portfolio</li>
          <li className='mx-5 my-2  font-cookies text-4xl hover:scale-150 duration-500'>Skills</li>      
          <li className='mx-5 my-2  font-cookies text-4xl hover:scale-150 duration-500'>Contact</li>
          </ul>
          </div>
          : null}
      </div>
    </section>

    
    
    
    
    
    
    
    
    </>
  )
}
