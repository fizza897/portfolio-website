import Link from 'next/link'
import React from 'react'
import {FaLinkedin,FaGithub} from "react-icons/fa"

export default function Socialicons() {
  return (
    <>
    <div className="top-[30vh] fixed">

     <Link href={"https://www.linkedin.com/in/fizza-azam-34749821b/"} target={"_blank"}>
        <div className="ml-[-86px] my-14  w-[150px] hover:ml-0 duration-200 flex justify-between text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
          Linkedin
          <FaLinkedin size={30} />
        </div>
      </Link>
    <Link href={"https://github.com/fizza897?tab=repositories"} target={"_blank"}>
        <div className=" ml-[-86px] my-28  w-[150px] flex justify-between hover:ml-0 duration-200  text-lg items-center gap-2 fixed text-white bg-gray-600  w-36 py-3 px-5 rounded-r-lg">
          Github
          <FaGithub size={30} />
        </div>
      </Link>
    </div>
    
    </>
  )
}
