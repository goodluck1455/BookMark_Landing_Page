import { useEffect, useState } from "react";
import MobileNavBar from "../Pages/MobileNavBar";
import { useTabFeatureStore } from "../Store/useTabFeature"
import { HashLink } from 'react-router-hash-link';

export default function Header() {
 const {isOpen, toggle} = useTabFeatureStore();

  const [scrolled, setScrolled] = useState(false)





  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Change background after 50px scroll
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`${scrolled && "bg-[#f7f7f7] shadow py-4 fixed w-screen"}  transition-all top-0 duration-300 z-50 `}>
    <div className={` ${scrolled ? "mt-4 max-sm:mt-3": "mt-10"}  mx-42 max-xl:mx-20 flex items-center justify-between max-sm:mx-6 max-lg:mx-19 max-sm:mt-6`}>
        <HashLink smooth to="#home" ><div>
          <img src="/images/logo-bookmark.svg" alt="Page-Logo" className="w-full" />
        </div> </HashLink> 

        <div className="max-sm:hidden max-lg:hidden  ">
          <ul className="flex gap-20 max-xl:gap-10">
         <HashLink smooth to="#features" >  <li className="font-medium hover:text-[#fa5757] cursor-pointer">FEATURES</li> </HashLink>
            <HashLink smooth to="#pricing" > <li className="font-medium hover:text-[#fa5757] cursor-pointer">PRICING</li> </HashLink>
            <HashLink smooth to="#contact" > <li className="font-medium hover:text-[#fa5757] cursor-pointer">CONTACT</li></HashLink>
            <li className=" group bg-[#fa5757] border border-transparent hover:border hover:border-[#fa5757]  hover:bg-white rounded-[5px] px-6 mt-[-5px] transition-all duration-200">
              <button type="button" className=" text-[#f7f7f7] py-1 group-hover:text-[#fa5757]
                font-semibold">LOGIN </button>
              </li>
          </ul>

        </div>
        <div className="hidden max-sm:block max-lg:block cursor-pointer">
          <img src="/images/icon-hamburger.svg" alt="" className="max-lg:w-full" onClick={toggle}/>
        </div>
      {isOpen && (<MobileNavBar />)}
    </div>
    </div>
  )
}
