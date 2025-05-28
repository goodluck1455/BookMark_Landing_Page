// import React from 'react'

type TabdisplayProps = {
    mainpage: string;
    mainpageB:string;
    mainpageC:String;
    image: string;
    padding: string,
    
}

export default function Tapdisplay({mainpage, mainpageB, mainpageC, image, padding}:TabdisplayProps) {
  return (
    <>
       <div className={`w-full  ${mainpageC}`}>
            <div className={`bg-[#5368df]  relative  ${mainpage} `}>
                <div className={`absolute ${mainpageB}`}>        
                       <img src={image} alt="" className={` w-full ${padding} `}  />
                
                </div>

            </div>

        </div>
    </>
  )
}
