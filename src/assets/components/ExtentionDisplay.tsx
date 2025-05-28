// import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from "../Utility/Animation"

type ExtentionDisplayProps = {
marginTop: string;
image: string;
title:string;
paragraph: string
}



export default function ExtentionDisplay({marginTop, image, title, paragraph}:ExtentionDisplayProps) {
  return (
    <motion.div
     variants={fadeIn("up", 0.3, "scale")}
              initial="hidden"
              whileInView={"show"}
    
    >
        <div className={`w-[13rem] h-[16.8rem] bg-[#f7f7f7] box-shawdow mb-[4rem]  ${marginTop}`}>
            <section>
            <div className="flex flex-col justify-center items-center">
                <div>
                <img src={image} alt="" className="w-full p-4" />
                </div>
                <div className="leading-6 text-center">
                    <h4 className="text-[#252b46] text-[1.2rem] font-semibold">{title}</h4>
                    <p className="text-gray-400 text-[0.9rem]">{paragraph}</p>
                </div>
            </div>
                 </section>

                 <section className="my-4">
                    <img src="/images/bg-dots.svg" alt="" className="w-full"/>
                    {/* <hr className="tinted-border mt-5"/> */}
                 </section>
                 <section className="flex justify-center items-center mt-4">
                    <button type="button" className="bg-[#5368df] hover:text-[#5368df] border-2 border-transparent hover:border-2 hover:border-[#5368df] hover:bg-white cursor-pointer font-semibold text-white shadow-2xs px-2 rounded-[5px] py-1 transition-all duration-200"> Add & install Extention</button>
                 </section>

        </div>
      
    </motion.div>
  )
}
