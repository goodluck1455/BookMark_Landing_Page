// import React from 'react'

import ExtentionDisplay from "../components/ExtentionDisplay";

export default function Extentions() {
  return (
    <div id="pricing">
        <section>
            <div className="text-center mt-[8rem]">
          <h3 className="text-[#252b46] text-3xl font-semibold max-sm:text-[1.732rem]">Download the extensions</h3>
          <p className="text-gray-400 text-[1.2rem] mt-4 mb-6 ">
           We've got more browsers in the  <br className="hidden max-sm:block" /> pipeline. Please do let us know <br className="hidden max-sm:block" /> if <br className="max-sm:hidden" />
            you've got a favourite you'd like <br className="hidden max-sm:block" /> us to prioritize. <br />
          </p>
          </div>
        </section>

        <div className="flex justify-center items-center gap-5 max-lg:gap-0 max-sm:gap-0 mt-[-2rem] max-sm:mt-[1rem] max-lg:mt-[1rem] max-sm:flex-col max-lg:flex-col ">
            <ExtentionDisplay marginTop={""} image={"/images/logo-chrome.svg"} title={"Add to Chrome"} paragraph={"Minimum version 62"} />
            <ExtentionDisplay marginTop={"mt-[6rem] max-sm:mt-[0.1rem] max-lg:mt-[0.1rem]"} image={"images/logo-firefox.svg"} title={"Add to Firefox"} paragraph={"Minimum version 55"}/>
            <ExtentionDisplay marginTop={"mt-[10rem] max-sm:mt-[0.1rem] max-lg:mt-[0.1rem]"} image={"images/logo-opera.svg"} title={"Add to Opera"} paragraph={"Minimum version 46"}/>
        </div>
      
    </div>
  )
}
