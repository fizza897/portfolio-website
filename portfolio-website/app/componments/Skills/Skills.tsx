import React from "react";
import Skills1 from "../../Images/7.png";
import Skills2 from "../../Images/8.png";
import Skills3 from "../../Images/9.png";
import Skills4 from "../../Images/10.png";
import Skills5 from "../../Images/11.png";
import Skills6 from "../../Images/12.png";
import Skills7 from "../../Images/13.png";
import Skills8 from "../../Images/14.png";
import Skills9 from "../../Images/15.png";

import Image from "next/image";

export default function Skills() {
  return (
  <>
  <div className="flex items-center max-w-7xl mx-auto leading-8 mb-10" id="skills">
    <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Skills</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-20">
            <div className="p-5">
                <Image src={Skills1} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills2} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills3} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills4} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills5} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills6} alt="skills1"/>
            </div>
            <div className="p-30">
                <Image src={Skills7} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills8} alt="skills1"/>
            </div>
            <div className="p-5">
                <Image src={Skills9} alt="skills"/>
            </div>

        </div>
    </div>
  </div>
  
  
  </>
  );
}
