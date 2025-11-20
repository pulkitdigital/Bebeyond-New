"use client";
import React from "react";
import "./style.css";
import OurBlogs2Cards from "./our_blogs2_cards";
import OurBlogs2Sidebar from "./our_blogs2_sidebar";
import { motion } from "framer-motion";

function OurBlogs2() {
  return (
    <main
      id="all-blogs"
      className=" w-full flex items-center justify-center bg-color_creame relative"
    >
      <div className="our-blogs-2-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="our-blogs-2 w-88% flex items-center justify-center flex-col py-16 gap-4">
          <div className="top-div-of-our-blogs-2 w-full flex items-center justify-center flex-col gap-4">
            <motion.div 
             initial={{  opacity: 0,y:"50%" }}
             whileInView={{ opacity: 1, y:0 }}
             transition={{
               duration: .5,
             }}
             viewport={{ once: true }}
            className="h2-div-for-our-blogs-2">
              <span className="span-for-h2-div-for-our-blogs-2"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                Our Blogs
              </h2>
            </motion.div>
            <motion.h3 
             initial={{  opacity: 0,y:"50%" }}
             whileInView={{ opacity: 1, y:0 }}
             transition={{
               duration: .5,
             }}
             viewport={{ once: true }}
            className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 text-center 1004px:text-h3 1004px:leading-h3 792px:text-h4">
              Stay Ahead with Be Beyond
                {/* Be Beyond Is A Ready <br className=" hidden 1200px:block" />
                To Protect
                <br className=" 1200px:hidden" />
                Your Business! */}
            </motion.h3>
          </div>
          <div
          id="all-blogs"
          className="bottom-div-of-our-blogs-2 w-full flex items-start justify-between">
            <OurBlogs2Cards />
            <OurBlogs2Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default OurBlogs2;
