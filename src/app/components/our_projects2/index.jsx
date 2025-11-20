"use client";
import React from "react";
import "./style.css";
import OurProjects2Cards from "./our_projects2cards";
import { motion } from "framer-motion";
function OurProjects2() {
  return (
    <main
      id="all-projects"
      className=" w-full flex items-center justify-center bg-color_navy"
    >
      <div className="our-projects-2-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="our-projects-2 w-88% flex items-center justify-center flex-col pt-16 pb-32 gap-7 792px:pb-24">
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="h2-div-for-our-projects-2 text-center"
          >
            <span className="span-for-h2-div-for-our-projects-2"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Our Projects
            </h2>
          </motion.div>
          <motion.h3
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" text-white bricolage_grotesque_head text-h2 font-h2 leading-h2 text-center 1004px:text-h3 1004px:leading-h3 792px:text-h4"
          >
            Explore our Portfolio and see
            <br />
            the Be Beyond difference in action.
            {/* Market-leading digital
                <br />
                expertise at your fingertips! */}
          </motion.h3>
          <OurProjects2Cards />
        </div>
      </div>
    </main>
  );
}

export default OurProjects2;
