"use client";
import React, { useState } from "react";
import "./style.css";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function AboutUs1() {
  const [counterCon, setCounterCon] = useState(false);
  function handleCounter() {
    setCounterCon(true);
  }

  return (
    <main className=" w-full flex items-center justify-center 596px:bg-color_creame">
      <div className="about-us-1-container max-w-1600px w-full flex items-center justify-center">
        <div className="about-us-1 w-88% flex items-center justify-between py-16">
          <motion.div
            initial={{ x: "-18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="left-div-of-about-us-1 w-48% flex items-center justify-center 596px:w-20  386px:hidden"
          >
            <div className=" relative bg-img-div-of-left-div-of-about-us-1 h-450px w-full flex items-center justify-center overflow-hidden 1004px:h-[400px] 792px:h-[350px] ">
              <div className=" absolute text-div-of-left-div-of-about-us-1 text-center text-about font-black leading-none left-0 h-full w-20">
                <span className=" flex items-center justify-center w-full h-full text-nowrap -rotate-90 text-[86px] public_sans_body text-outline 1004px:text-[76px] 792px:text-[66px]">
                  ABOUT US
                </span>
              </div>
              <Image
                width={500}
                height={500}
                src="/about-header-img.jpg"
                title="About Header Image"
                alt="img"
                className=" w-full left-20 absolute h-full 596px:hidden"
              />
              <motion.div
                whileInView={handleCounter}
                className=" absolute left-20 bottom-0 flex items-start flex-col justify-center counter-div-of-bg-img-div-of-left-div-of-about-us-1 bg-color_orange p-4 text-white gap-2 596px:hidden"
              >
                {counterCon ? (
                  <CountUp
                    start={0}
                    end={100}
                    duration={2}
                    suffix="+"
                    separator=""
                    className=" text-h3 font-h3 leading-none 1004px:text-h4 792px:text-h5new"
                  />
                ) : (
                  <span className=" text-h3 font-h3 leading-none 1004px:text-h4 792px:text-h5new">
                    0+
                  </span>
                )}
                <h5 className=" text-h5 font-h5 1004px:text-p1 792px:text-p2">
                  Project Done
                </h5>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="right-div-of-about-us-1 w-48% 1035px:w-1/2 flex items-start justify-center flex-col gap-4 828px:gap-2 596px:w-full 596px:pl-2 596px:h-[350px] 596px:justify-start 596px:gap-4 relative 462px:gap-2 378px:items-center 378px:p-0 378px:m-0"
          >
            <div className="h2-div-for-right-div-of-about-us-1 w-full mb-4 1004px:mb-2 596px:mb-4 ">
              <span className="span-for-h2-div-for-right-div-of-about-us-1 378px:hidden"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 absolute 792px:text-p2 ">
                <span className="span-for-h2-div-for-right-div-of-about-us-1 hidden 378px:block"></span>
                About Our Company
              </h2>
            </div>
            <h3 className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 relative w-full 1004px:text-h3 1004px:leading-h3 792px:text-h4 378px:text-center">
              Unlock The Potential Of
              <br className=" 1172px:hidden" />
              Your Business With
              <br className=" 1172px:hidden" />
              Creative Design!
            </h3>
            <h5 className=" text-color_orange bricolage_grotesque_head text-h5 font-h5 text-justify w-full 1004px:text-p1 792px:text-p2 378px:text-center">
              We Are A Digital Agency With Added Commercial Value For Your
              Startup Company Business!
            </h5>
            <p className=" public_sans_body text-p1 font-p1 w-full text-justify text-color_gray 1004px:text-p2 792px:text-p3 378px:text-justify">
              At BeBeyond Digital Solutions, we empower businesses with
              innovative strategies and 360-degree solutions, minimizing efforts
              while maximizing results, driving online and offline growth in
              today&apos;s evolving digital landscape.
            </p>
            <Link href="/contact" title="Contact Us Page">
              <button
                className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white mt-4
              relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 1004px:mt-2 792px:text-p2 596px:absolute 596px:left-2 596px:bottom-0 426px:px-3 426px:py-2 378px:left-0 
              transition-all duration-700
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-color_white_light
              before:transition-transform before:duration-700
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-75
              "
              >
                Get In Touch
              </button>
            </Link>
            <motion.div
              whileInView={handleCounter}
              className=" absolute right-0 bottom-0 hidden items-center flex-col justify-center counter-div-of-bg-img-div-of-left-div-of-about-us-1 bg-color_orange p-4 text-white gap-2 596px:flex 500px:flex-row 462px:p-2 "
            >
              {counterCon ? (
                <CountUp
                  start={0}
                  end={100}
                  duration={2}
                  suffix="+"
                  separator=""
                  className=" text-h3 font-h3 leading-none 1004px:text-h4 792px:text-h5new"
                />
              ) : (
                <span className=" text-h3 font-h3 leading-none 1004px:text-h4 792px:text-h5new">
                  0+
                </span>
              )}
              <h5 className=" text-h5 font-h5 1004px:text-p1 792px:text-p2">
                Project Done
              </h5>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs1;
