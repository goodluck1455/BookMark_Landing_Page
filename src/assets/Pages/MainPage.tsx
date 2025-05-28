// import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from "../Utility/Animation"
// import Tapdisplay from "../components/Tapdisplay";

export default function MainPage() {
  return (
    <motion.div
    variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
    
    >
      <div className="ml-[10rem] max-2xl:ml-[5rem] max-xl:ml-12  mt-8 flex justify-between max-sm:justify-center max-lg:text-center  items-center max-sm:flex-col-reverse max-lg:flex-col-reverse  max-sm:ml-[0rem] max-lg:ml-[0rem] ">
        <div className="mt-[1rem] max-sm:mt-[3rem] max-lg:mt-[4rem] w-full max-sm:text-center">
          <h3 className="text-[#252b46] text-4xl font-bold leading-10 max-sm:text-3xl">
            A Simple Bookmark <br className="max-sm:block max-lg:hidden" /> Manager
          </h3>
          <p className="text-gray-400 text-[1.2rem] mt-8 max-sm:text-[1rem]">
            A clean and simple interface to organize{" "}
            <br className="hidden max-sm:block" /> your favourite{" "}
            <br className="max-sm:hidden max-xl:hidden" />
            websites. <br className="md:block hidden lg:hidden" /> Open a new <br className="hidden max-sm:block " /> browser
            tab and see your sites load <br className="max-xl:hidden max-sm:block" />
            instantly. Try it for free.
          </p>
          <div className="mt-8 flex gap-3 max-sm:justify-center max-lg:justify-center">
            <button
              type="button"
              className="bg-[#5368df] border-2 border-transparent cursor-pointer hover:bg-white hover:border-2 hover:border-[#5368df] hover:text-[#5368df] font-semibold text-white shadow-2xs px-3 rounded-[5px] py-3 transition-all duration-200"
            >
              Get it on Chrome
            </button>
            <button
              type="button"
              className="bg-[#F7F7F7] font-semibold box-shawdow px-3 rounded-[5px] py-3
            border-2 border-transparent cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black"
            >
              Get it on Firefox
            </button>
          </div>
        </div>

        {/* <Tapdisplay mainpage={`h-[22rem] max-sm:ml-[6rem] max-lg:ml-[15rem] 
        max-sm:h-[11rem]  rounded-bl-full rounded-tl-full mt-[12rem] max-sm:mt-[7rem] w-full`}
      mainpageB={"mt-[-13rem] max-lg:mt-[-11rem] ml-[-16rem] max-sm:left-[-4rem]  "}
       mainpageC={"ml-[8rem] max-lg:ml-0 max-sm:ml-0 max-sm:overflow-hidden max-lg:overflow-hidden"} image={"/images/illustration-hero.svg"} 
      padding={"p-17 max-sm:p-18 max-sm:mr-[3rem]"}/> */}

        {/* <div className={`w-full  max-lg:overflow-hidden`}>
            <div className={`bg-[#5368df] h-[22rem] rounded-bl-full rounded-tl-full mt-[8rem] ml-[5rem] 
              max-sm:h-[11rem] max-sm:mt-[5rem] max-sm:ml-[6rem]
              max-lg:ml-[1rem]`}>
                <div className={` relative max-sm:w-full `}>        
                       <img src="/images/illustration-hero.svg" alt="" className={`  absolute  right-[10rem] top-[-6rem]
                        max-sm:top-[-3rem] max-sm:right-[4rem] 
                        max-lg:left `}  /> 
                </div>

            </div>
        </div> */}

         
          <div className="w-full mt-10 max-md:mt-[-2rem] max-sm:mt-4">
            <img src="images/mobile_version.png" alt="" className="w-full hidden  max-sm:block max-sm:pt-0 max-sm:pl-0 max-lg:block max-md:pl-20 max-md:pt-20" loading="lazy" />
             <img src="images/desktopversion.png" alt="" className="w-full  max-sm:hidden max-lg:hidden" loading="lazy"/>
          </div>




      </div>
    </motion.div>
  );
}
