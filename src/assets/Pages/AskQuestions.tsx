// import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import {fadeIn} from "../Utility/Animation"


interface AccordionItemType {
  id: number;
  title: string;
  content: string;
  custumClass: string;
   border: string;
}

interface AccordionItemProps {
  item: AccordionItemType;
  isOpen: boolean;
  onClick: () => void;
}




export default function AskQuestions() {
  const [openTab, setOpenTab] = useState<number | string | null>(null);

  const accordionItems:AccordionItemType[] = [
    {
      id: 1,
      title: 'What is Bookmark?',
      content: 'Vivamus luctus eros aliquet convallis ulticiies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ulticies non liqula. Suspendisse imperdiet',
      custumClass: " mt-12",
      border: ""
    },
    {
      id: 2,
      title: 'How can I request a new browser?',
      content: 'Vivamus luctus eros aliquet convallis ulticiies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ulticies non liqula. Suspendisse imperdiet',
      custumClass: "",
       border: "border-t"
    },
    {
      id: 3,
      title: 'Is there a mobile app?',
      content: 'Vivamus luctus eros aliquet convallis ulticiies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ulticies non liqula. Suspendisse imperdiet',
      custumClass: "",
       border: "border-t"
    },
     {
      id: 4,
      title: 'What about other Chromium browsers?',
      content: 'Vivamus luctus eros aliquet convallis ulticiies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ulticies non liqula. Suspendisse imperdiet',
      custumClass: "mb-12",
       border: "border-b border-t"
    },
  ];

  const toggleItem = (id: number | string): void => {
    setOpenTab(openTab === id ? null : id);
  };

  return (
    <div className="max-sm:px-5 overflow-x-hidden">
      <section>
        <div className="text-center mt-[3rem]">
          <h3 className="text-[#252b46] text-3xl font-semibold">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-400 text-[1.2rem] mt-4 mb-6 max-sm:text-[1rem]">
            Here are some of our FAQs. If you have any <br className="hidden max-sm:block" /> other questions <br className="max-sm:hidden" />
            questions you'd like answered please feel free to email us. <br />
          </p>
        </div>
      </section>

      {accordionItems.map((item) => (
        <OpenTabQuention
          key={item.id}
          item={item}
          isOpen={openTab === item.id}
          
          onClick={() => toggleItem(item.id)}
        />
      ))}
     

      <section>
        <div className="mt-2 mb-11 flex justify-center items-center">
          <button
            type="button"
            className="bg-[#5368df] font-semibold text-white shadow-2xs px-4 rounded-[5px] py-2 cursor-pointer"
          >
            More Info
          </button>
        </div>
      </section>
    </div>
  );
}

function OpenTabQuention({ item, isOpen, onClick }: AccordionItemProps) {
 

  return (
    <>
      <motion.section 
       variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}

      
      className={`flex justify-center items-center ${item.custumClass}  w-full `}>
        <div className={`border-gray-400/50   ${item.border}  w-[30rem]  `}>
          <div className=" flex group cursor-pointer justify-between items-center gap-3.5  py-2">
            <div>
              
              <h4 className="text-[#252b46]  group-hover:text-[#fa5757] text-[1.1rem] font-semibold max-sm:text-[0.9rem]">
                {item.title}
              </h4>
            </div>
            <div
              className="cursor-pointer mr-4"
              onClick={onClick}
              aria-expanded={isOpen}
               aria-controls={`content-${item.id}`}

            >

              {isOpen ? (<IoIosArrowUp className="text-[#fa5757] text-3xl" />): (<MdKeyboardArrowDown className="text-[#5368df] text-4xl" />)} 
              {/* {isOpen ? (<MdKeyboardArrowDown className="text-[#fa5757] text-4xl" />): (<img src="/images/icon-arrow.svg" alt="icon-arrow" />)} */}
            </div>
          </div>

          {isOpen && (
            <p className="mb-1 ">
            {item.content}
            </p>
          )}
        </div>
      </motion.section>
    </>
  );
}
