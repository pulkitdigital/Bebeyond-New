"use client";
import React, { useRef } from "react";
import "./style.css";
import { motion } from "framer-motion";
import Image from "next/image";
function AboutBrand1({ _brandName, _para, about_img }) {
  const imgRef = useRef();
  return (
    <main className=" w-full flex items-center justify-center">
      <div className="about-brand-1-container max-w-1600px w-full flex items-center justify-center">
        <div className="about-brand-1 w-88% flex items-center justify-between py-16">
          <motion.div
            initial={{ x: "-18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className={`left-div-of-about-brand-1 w-48% flex items-center justify-center 596px:hidden`}
          >
            <div className=" relative bg-img-div-of-left-div-of-about-brand-1 w-full">
              {about_img && (
                <Image
                  src={about_img}
                  alt={`${_brandName} About Image`}
                  width={600}
                  height={350}
                  className="w-full h-[290px] object-contain"
                  priority
                />
              )}
            </div>
          </motion.div>
          <motion.div
            ref={imgRef}
            initial={{ x: "18%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="right-div-of-about-brand-1 w-1/2 flex items-start justify-center flex-col gap-4 828px:gap-2 462px:gap-2 596px:w-full 596px:items-center"
          >
            <div className="h2-div-for-right-div-of-about-brand-1 w-full mb-0 1004px:mb-0 596px:mb-4 ">
              <span className="span-for-h2-div-for-right-div-of-about-brand-1 596px:hidden"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 absolute 792px:text-p2 ">
                <span className="span-for-h2-div-for-right-div-of-about-brand-1 hidden 596px:block"></span>
                About
              </h2>
            </div>
            <h3 className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 relative w-full 1004px:text-h3 1004px:leading-h3 792px:text-h4 596px:text-center">
              {_brandName}
            </h3>
            {/* <h5 className=" text-color_orange bricolage_grotesque_head text-h5 font-h5 w-full 1004px:text-p1 792px:text-p2 596px:text-center">
              We Are A Digital Agency With Added Commercial Value For Your
              Startup Company Business!
            </h5> */}
            <p className=" public_sans_body text-p1 font-p1 w-full text-justify text-color_gray 1004px:text-p2 792px:text-p3 ">
              {_para}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default AboutBrand1;
