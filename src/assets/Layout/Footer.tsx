// import React from 'react'

import { useState } from "react";

export default function Footer() {
const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value:any) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Whoops, make sure it's an email");
    } else if (!validateEmail(email)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
      setEmail(""); // Clear error
      // Submit logic here
      alert("Email submitted successfully!");
    }
  };

  return (
    <div>
      <div className="bg-[#5368df] text-center py-5 ">
        <section>
            <p className="text-white ">35,000+ Already Joined </p>
        <h3 className="text-white text-3xl font-bold mt-4 max-sm:text-2xl">Stay up-to-date with what <br />
            we're doing</h3>
        </section>

         <section className="mt-4 ">
          <form action="" onSubmit={handleSubmit} className="flex gap-3 justify-center  max-sm:flex-col">

          <div className="max-sm:flex relative max-sm:justify-center max-sm:flex-col max-sm:items-center max-sm:px-4">
              <input type="email" placeholder="Enter your email address" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              
              className={`bg-[#f7f7f7] w-[20rem] rounded-[5px] border-transparent-3   ${error && "border-[#fa5757] border-3 rounded-tl-[5px] rounded-tr-[5px]  rounded-bl-[0px] rounded-br-[0px]"} outline-none p-3 text-gray-400 `} />
               {error && (<img src="/images/icon-error.svg" alt="error" className="absolute right-3 top-1/3 transform -translate-y-1/2"/>)} 
               
               {error && (<p className="bg-[#fa5757] text-white italic text-left pl-3.5 rounded-bl-[5px] rounded-br-[5px] max-sm:w-[20rem] ">
               {error}</p>)} 
          </div>
              <div>
            <button type="submit" className="bg-[#fa5757] hover:bg-white hover:text-[#fa5757] hover:border-[#fa5757] hover:border-3 border-transparent py-3 px-5 rounded-[5px] text-[#f7f7f7] cursor-pointer max-sm:w-[20rem]">Contact Us</button>
               </div>
         </form>
         </section>
        

      </div>
      <div className="bg-[#252b46] px-32    py-5 max-lg:px-8 max-sm:py-9 flex justify-between items-center max-sm:flex-col max-sm:gap-8 max-sm:justify-center">
        <div>
          <ul className="flex gap-10 max-sm:gap-8 max-md:gap-4 text-white items-center max-sm:flex-col max-sm:justify-center max-sm:text-center">
            <li className="flex items-center max-sm:justify-center">
                <img src="/images/footer-logo.png" alt="" /><p className="font-semibold">  BOOKMARK </p>
              </li>
            <li className="font-thin text-[14px]">FEATURES</li>
            <li className="font-thin text-[14px]">PRICING</li>
            <li className="font-thin text-[14px]">CONTACT</li>
            
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <img src="/images/icon-facebook.svg" alt=""  />
           <img src="/images/icon-twitter.svg" alt=""  />
        </div>

      </div>
    </div>
  )
}
