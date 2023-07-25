import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
export const HomeHero = () => {
  return (
    <section className='max-w-2xl mx-auto flex md:flex-row flex-col mt-6'>
      <div className='p-6 mx-w-lg'>

      <h1>I am full Stack Developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo exercitationem odit, earum voluptate aspernatur nihil, sequi, nemo assumenda placeat est odio. Aliquid aliquam autem voluptatem itaque modi nostrum impedit perferendis voluptate consectetur mollitia! Optio, ipsum quis harum rem deleniti enim et fugit. Unde fuga ea libero magnam reiciendis, inventore, sapiente fugiat, totam nemo repudiandae nesciunt.</p>
      <button className='group text-xl flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-xl'>Profile
      
      <IoIosArrowForward className='group hover:rotate-90 duration-700' size={20}/>
      </button>
      </div>

    <div className='md:w-full w-1/2 mx-auto '>
        <img  src={"/Fizza.jpg"}  />
    </div>
    
    
    </section>
  )
}
