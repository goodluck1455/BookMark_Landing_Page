// import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from "../Utility/Animation"



import Tapdisplay from "../components/Tapdisplay";
import { useTabFeatureStore } from "../Store/useTabFeature";

export default function Features() {
  const { openTab, setOpenTab } = useTabFeatureStore();

  return (
    <div >
      <section id="features">
        <div className="text-center mt-8 max-lg:mt-15">
          <h3 className="text-[#252b46] text-4xl font-semibold">Features</h3>
          <p className="text-gray-400 text-[1.2rem] mt-4 mb-6 max-sm:text-[1rem]">
            Our aim is to make it quick and easy for you <br className="hidden max-sm:block"/> to access your <br className="max-sm:hidden" />
            favourite websites. Your <br className="hidden max-sm:block"/>  bookmarks sync between your devices <br className="max-sm:hidden" />
            so <br className="hidden max-sm:block"/>  you can access them on the go.
          </p>
        </div>
      </section>

      <section className="mx-[28rem] max-2xl:mx-[20rem] max-xl:mx-15 max-sm:mx-[2rem] max-sm:mt-10  max-lg:mt-12 max-lg:mx-[2rem]">
        <div className="flex  max-sm:flex-col max-lg:flex-col justify-center gap-20 max-sm:gap-1 max-lg:gap-1 items-center mb-[10rem] max-sm:mb-[7rem] border-b-1 border-gray-400/30 inset-1  leading-20 max-sm:leading-14 ">
          <div className="max-sm:border-t-1 max-sm:border-b-1 max-sm:border-gray-400/30 max-sm:w-full max-sm:text-center
          max-lg:border-t-1 max-lg:border-b-1 max-lg:border-gray-400/30 max-lg:w-full max-lg:text-center"> 
          <button
            type="button"
            className={` text-[1.2rem] max-lg:text-2xl max-sm:text-[1rem] cursor-pointer outline-0 hover:text-[#fa5757]
             after:w-[15rem] after:absolute relative  ${
               openTab === "Simple-Bookmarking" ? "text-black" : "text-gray-400"
             }
            after:left-[-2rem] max-sm:after:left-[-2rem] after:h-[0.3rem] max-sm:after:top-[2.2rem]  after:bottom-0 after:top-[4.8rem] 
             max-lg:after:top-[3.3rem] max-lg:after:left-[0rem]  ${
              openTab === "Simple-Bookmarking" && "after:bg-[#fa5757]"
            }  `}
            onClick={() => setOpenTab("Simple-Bookmarking")}
          >
            Simple Bookmarking
          </button>
                </div>
                <div className=" max-sm:border-b-1 max-sm:border-gray-400/30 max-sm:w-full max-sm:text-center
                max-lg:border-b-1 max-lg:border-gray-400/30 max-lg:w-full max-lg:text-center">
          <button
            type="button"
            className={` text-[1.2rem]  max-lg:text-2xl max-sm:after:left-[-2rem] max-sm:text-[1rem]  cursor-pointer hover:text-[#fa5757]
            after:w-[12rem] after:absolute relative 
            max-lg:after:top-[3.3rem] max-lg:after:left-[0rem]  ${
              openTab === "Speedy-Searching" ? "text-black" : "text-gray-400"
            }
            after:left-[-1rem]  max-sm:after:left-[-2rem] after:h-[0.3rem] after:bottom-0 after:top-[4.8rem] max-sm:after:top-[2.2rem] outline-0 
            ${openTab === "Speedy-Searching" && "after:bg-[#fa5757]"} 
            `}
            onClick={() => setOpenTab("Speedy-Searching")}
          >
            Speedy Searching
          </button>
             </div>

             <div className=" max-sm:border-b-1 max-sm:border-gray-400/30 max-sm:w-full max-sm:text-center">
          <button
            type="button"
            className={` text-[1.2rem]  max-lg:text-2xl max-sm:text-[1rem] after:w-[12rem] after:absolute relative cursor-pointer outline-0
            after:left-[-2rem]  max-sm:after:left-[-2.5rem] after:h-[0.3rem] after:bottom-0 after:top-[4.8rem] max-sm:after:top-[2.2rem] hover:text-[#fa5757]
             max-lg:after:top-[3.3rem] max-lg:after:left-[-1.5rem] ${
              openTab === "Easy-Sharing" ? "text-black" : "text-gray-400"
            }
             ${openTab === "Easy-Sharing" && "after:bg-[#fa5757]"} 
            
            `}
            onClick={() => setOpenTab("Easy-Sharing")}
          >
            Easy Sharing
          </button>
          </div>
        </div>
      </section>
      <section >
        {openTab === "Simple-Bookmarking" && (
          <SubFeature
            title={"Bookmark one click"}
            text={
              <>
                Organize your bookmarks however you like. <br className="hidden max-sm:block" /> Our <br className="max-sm:hidden" />
                simple drag-and-drop interface gives <br className="hidden max-sm:block" /> you complete <br className="max-sm:hidden"/>
                control over how you manage <br className="hidden max-sm:block" /> your favourite site
              </>
            }
            image={"/images/illustration-features-tab-1.svg"}
            padding={"max-sm:px-4 max-md:p-9"}
            titleSize={"text-4xl"}
          />
        )}

        {openTab === "Speedy-Searching" && (
          <SubFeature
            title={"Intelligent search"}
            text={
              <>
                Our powerful search feature will help <br className="hidden max-sm:block" /> find saved<br className="max-sm:hidden"/>
                sites in no time at all. No need to <br className="hidden max-sm:block" /> trawl through all of <br className="max-sm:hidden"/>
                your bookmarks
              </>
            }
            image={"/images/illustration-features-tab-2.svg"}
             padding={"max-sm:px-6 max-sm:mt-[-1rem]"}
             titleSize={"text-4xl"}
          />
        )}

          {openTab === "Easy-Sharing" && (
          <SubFeature
            title={"Share your bookmarks"}
            text={
              <>
                Easily share your bookmarks and <br className="hidden max-sm:block" /> collections with <br className="max-sm:hidden"/>
                others. Create a <br className="hidden max-sm:block" /> shareable link that you can <br className="hidden max-sm:block" />  send at <br className="max-sm:hidden"/>
                the click of a button.
              </>
            }
            image={"/images/illustration-features-tab-3.svg"}
             padding={"max-sm:px-5  max-sm:mt-[-3rem]"}
             titleSize={"text-3xl"}
          />
        )}
      </section>
    </div>
  );
}

type SubFeatureProps = {
  title: string;
  text: string | React.ReactNode;
  image: string;
  padding:string;
  titleSize: string;
};

function SubFeature({ title, text, image, padding, titleSize }: SubFeatureProps) {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.3, "zoom")}
        initial="hidden"
        whileInView={"show"}
        className="flex    gap-35 max-xl:gap-10 max-xl:flex-col max-sm:gap-10 max-lg:gap-10 mb-14 justify-center max-sm:flex-col max-lg:flex-col "
        id="features"
      >
        <Tapdisplay
          mainpage={
            "h-[18rem] height max-sm:h-[14rem] max-lg:h-[22rem] max-sm:w-full max-lg:w-[80%] rounded-br-full rounded-tr-full mt-[3rem] w-full "
          }
          mainpageB={"mt-[-8rem] max-sm:mt-[-4rem]  right-[-4rem] padding"}
          mainpageC={
            "pr-[4.3rem] max-xl:pr-[18.3rem] max-lg:pr-[4.3rem] padding_right max-sm:pr-[4.3rem]"
          }
          image={image}
          padding={padding}
        />

        <div className="w-full max-sm:text-center max-lg:text-center max-xl:text-center ">
          <h3 className={`text-[#252b46]  ${titleSize} font-semibold`}>
            {title}
          </h3>
          <p className="text-gray-400 text-[1.2rem] max-sm:text-[1rem] mt-4">
            {text}
          </p>
          <div className="mt-8 flex gap-3 max-sm:justify-center max-xl:justify-center max-sm:hidden">
            <button
              type="button"
              className="bg-[#5368df] font-semibold text-white shadow-2xs px-3 rounded-[5px] py-3"
            >
              More Info
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
