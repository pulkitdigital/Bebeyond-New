import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import ProcessCard from "./process_card";
import Image from "next/image";
function VisionMission() {
  return (
    <main className=" w-full flex items-center justify-center relative">
      <div className="vision-mission-container max-w-1600px w-full flex items-center justify-center relative">
        <Image
                  width={100}
                  height={100}
                  priority={true}
                  src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
                  title="Map Pattern Image"
                  className=" absolute w-1/2 left-0 top-0 opacity-40"
                  alt="Map Pattern Image"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  title="Map Pattern Image"
                  src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
                  className=" absolute w-1/2 right-0 top-0 opacity-40"
                  alt="Map Pattern Image"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  title="Map Pattern Image"
                  src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
                  className=" absolute w-1/2 bottom-0 left-0 opacity-40"
                  alt="Map Pattern Image"
                />
                <Image
                  width={100}
                  height={100}
                  priority={true}
                  title="Map Pattern Image"
                  src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
                  className=" absolute w-1/2 bottom-0 right-0 opacity-40"
                  alt="Map Pattern Image"
                />
        <div className="vision-mission w-88% flex items-center justify-center flex-col py-16 gap-4 662px:gap-0">
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="h2-div-for-vision-mission text-center"
          >
            <span className="span-for-h2-div-for-vision-mission"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Our Principles
            </h2>
          </motion.div>
          <motion.h3
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 792px:text-h4"
          >
            {/* We collaborate closely with you to achieve your unique digital
            goals. Here&apos;s how */}
            What guides our actions?
          </motion.h3>
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" text-p1 font-p1 text-color_gray text-center public_sans_body 1004px:text-p2 792px:text-p3 662px:mt-2"
          >
            To minimize client efforts in their journey of digital
            transformation while bridging the gap between businesses and their
            audience.
          </motion.p>
          {/* <motion.p
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" public_sans_body w-full text-center font-p1 text-p1 text-color_gray 1004px:text-p2 792px:text-p3"
          >
            We collaborate closely with you to achieve your unique digital goals. Here's how
          </motion.p> */}
          <ProcessCard />
        </div>
      </div>
    </main>
  );
}

export default VisionMission;
