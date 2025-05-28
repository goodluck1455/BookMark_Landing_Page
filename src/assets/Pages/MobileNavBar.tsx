// import React from 'react'

import { useTabFeatureStore } from "../Store/useTabFeature";

export default function MobileNavBar() {
  const { toggle } = useTabFeatureStore();
  return (
    <div className="fixed h-screen inset-0 z-10 bg-[#252b46]/90  scroll-auto overflow-y-scroll hidden max-sm:block max-lg:block">
      <section>
        <div className="flex justify-between items-center px-7 py-3 max-sm:px-8 max-lg:px-15">
          <div>
            <img
              src="/images/logo_navbar.png"
              alt="Page-Logo"
              className="w-full"
            />
          </div>

          <div>
            <img
              src="/images/icon-close.svg"
              alt="Page-Logo"
              className="w-full"
              onClick={toggle}
            />
          </div>
        </div>
      </section>

      <section className="px-7 max-lg:px-15 flex flex-col justify-between h-full py-12">
        <div>
          {  ["FEATURES", "PRICING", "CONTACT"].map((list)=>{
            return(
                     <div className=" border-t-1 border-b-1 border-white/40 w-full text-center">
            <button
              type="button"
              className={` text-[#f7f7f7] text-[1.2rem]  tracking-widest py-5`}>
              {list}
            </button>
          </div>
            )
          })
         }

          <div className="  border-2 border-white w-full text-center mt-10">
            <button
              type="button"
              className={` text-[#f7f7f7] text-[1.2rem]  tracking-widest py-2 font-semibold`}
            >
              LOGIN
            </button>
          </div>
        </div>

        <div className="flex items-center gap-8  justify-center">
          <img src="/images/icon-facebook.svg" alt="" />
          <img src="/images/icon-twitter.svg" alt="" />
        </div>
      </section>
    </div>
  );
}
