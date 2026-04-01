"use client";
import React, { useState } from "react";
import "./style.css";
import ProjectPageCards from "./project_page_cards";
import { motion } from "framer-motion";

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "social-media", label: "Social Media Management" },
  { id: "website", label: "Web Development" },
  { id: "e-commerce", label: "E-Commerce Development" },
  { id: "video", label: "Video Editing" },
  { id: "meta-ads", label: "Meta Ads" },
];
 
function OurProjects2() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main
      id="all-projects"
      className="w-full flex items-center justify-center bg-color_navy"
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
            <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
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
            className="text-white bricolage_grotesque_head text-h2 font-h2 leading-h2 text-center 1004px:text-h3 1004px:leading-h3 792px:text-h4"
          >
            Explore our Portfolio and see
            <br />
            the Be Beyond difference in action.
          </motion.h3>

          {/* Tabs Section */}
          <motion.div
            initial={{ y: "30%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center mb-4 792px:px-4"
          >
            {/* Tabs - Vertical on desktop, Horizontal on mobile */}
            <div className="flex 792px:flex-col flex-row items-center justify-center gap-0 bg-color_navy border border-white/10 792px:rounded-2xl rounded-full p-1 792px:w-full w-1024px overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-5 sm:px-6 1004px:px-8 py-3 1004px:py-3.5 792px:rounded-xl rounded-full text-p2 sm:text-p1 1004px:text-h5 font-h5 bricolage_grotesque_head
                    transition-all duration-300 whitespace-nowrap 792px:w-full w-auto flex-shrink-0
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-color_orange to-orange-600 text-white shadow-lg"
                        : "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
                    }
                  `}
                > 
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <ProjectPageCards activeTab={activeTab} />
        </div>
      </div>
    </main>
  );
}

export default OurProjects2;