import React from "react";
import "./style.css";
import ContactUs1BrandSlider from "./contact_us1_brand_swiper";
import Image from "next/image";
import ContactUs1Form from "./contact_us1_form";
import { motion } from "framer-motion";
function ContactUs1({ _d, _d2, _pt, _mW_pt }) {
  return (
    <main className="main-of-contact-us-1 w-full flex items-center justify-center relative overflow-hidden">
      <div className="contact-us-1-container max-w-1600px w-full flex items-center justify-center relative">
        <Image
          width={500}
          height={250}
          priority={true}
          title="Dark Map Background Pattern"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-1/2 right-0"
          alt="Map Pattern Image"
        />
        <Image
          width={500}
          height={250}
          priority={true}
          title="Dark Map Background Pattern"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-1/2 left-0"
          alt="Map Pattern Image"
        />
        <Image
          width={500}
          height={250}
          priority={true}
          title="Dark Map Background Pattern"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-1/2 right-0 bottom-0"
          alt="Map Pattern Image"
        />
        <Image
          width={500}
          height={250}
          priority={true}
          title="Dark Map Background Pattern"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-1/2 left-0 bottom-0"
          alt="Map Pattern Image"
        />
        <div
          className={`contact-us-1 w-88% flex items-center justify-start flex-col ${_pt} ${_mW_pt} gap-16 792px:gap-12 relative`}
        >
          <Image
            width={500}
            height={250}
            priority={true}
            title="Dark Map Background Pattern"
            src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
            className={` ${_d2} w-1/2 top-0`}
            alt="Map Pattern Image"
          />
          <ContactUs1BrandSlider _d={_d} />
          <div className="top-div-of-contact-us-1 w-full flex items-center justify-center gap-16 flex-col relative 662px:gap-8">
            <Image
              width={500}
              height={250}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-1/2 left-0 top-0"
              alt="Map Pattern Image"
            />
            <Image
              width={500}
              height={250}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-1/2 right-0 top-0"
              alt="Map Pattern Image"
            />
            <Image
              width={500}
              height={250}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-1/2"
              alt="Map Pattern Image"
            />
            <Image
              width={500}
              height={250}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-1/2 bottom-0 left-0"
              alt="Map Pattern Image"
            />
            <Image
              width={500}
              height={250}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-1/2 bottom-0 right-0"
              alt="Map Pattern Image"
            />
            <div className="first-div-of-top-div-of-contact-us-1 flex flex-col items-center justify-center gap-4 w-full">
              <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                viewport={{ once: true }}
                className="h2-div-for-contact-us-1 text-center"
              >
                <span className="span-for-h2-div-for-contact-us-1"></span>
                <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                  Contact Us!
                </h2>
              </motion.div>
              <motion.h3
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                viewport={{ once: true }}
                className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4 456px:text-center"
              >
                Exploring opportunities to
                <br className=" 456px:hidden" /> deliver digital campaigns!
              </motion.h3>
            </div>
            <div className="second-div-of-top-div-of-contact-us-1 flex items-start justify-center w-full min-h-[600px] 1100px:min-h-[550px] relative mb-10 900px:min-h-[450px] 792px:min-h-[400px] 662px:min-h-[350px] 538px:min-h-[350px]">
              <motion.div
                initial={{ x: "-18%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                viewport={{ once: true }}
                className="left-div-of-second-div-of-top-div-of-contact-us-1 w-500px h-500px flex items-center justify-center absolute left-0 900px:w-[400px] 900px:h-[400px] 900px:bottom-0 792px:h-[350px] 792px:w-[350px] 662px:h-[250px] 662px:w-[250px] 538px:h-[200px] 538px:w-[200px] 538px:bottom-8 538px:-left-8 500px:hidden"
              >
                <div className="bg-orange-div-of-left-div-of-second-div-of-top-div-of-contact-us-1 bg-color_orange 1250px:h-[90%] 1250px:w-[90%] 1100px:h-[80%] 1100px:w-[80%] 1100px:left-0  h-full w-full rounded-50% absolute 900px:h-full 900px:w-full"></div>
              </motion.div>
              <motion.div
                initial={{ x: "-18%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                viewport={{ once: true }}
                className="img-div-of-second-div-of-top-div-of-contact-us-1 absolute -bottom-10 left-7  h-[650px] 1250px:h-[610px] 1180px:left-0 1100px:h-[560px] flex items-center justify-center 900px:h-500px 792px:h-450px 662px:h-340px 538px:h-[300px] 538px:-left-8 500px:hidden"
              >
                <Image
                  width={500}
                  height={1000}
                  priority={true}
                  title="Contact Home Page Image"
                  src="/callback-men.png"
                  className=" h-full w-full"
                  alt="img"
                />
              </motion.div>

              <ContactUs1Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs1;
