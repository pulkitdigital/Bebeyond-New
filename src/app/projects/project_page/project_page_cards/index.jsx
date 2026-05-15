"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { projects1, projects2, projects3 } from "../../../data/Projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/context";

function ProjectPageCards({ activeTab }) {
  const { setLoaderToggel } = useAppContext();

  // Filter projects based on active tab
  const getFilteredProjects = () => {
    if (activeTab === "all") {
      return projects2;
    }
    
    return projects2.filter((project) => {
      const category = project._p2.toLowerCase();
      
      if (activeTab === "social-media") {
        return category.includes("marketing") || category.includes("social media");
      }
      if (activeTab === "website") {
        return category.includes("website") || category.includes("web development");
      }
      if (activeTab === "e-commerce") {
        return category.includes("e-commerce") || category.includes("ecommerce");
      }
      if (activeTab === "video") {
        return category.includes("video");
      }
      if (activeTab === "meta-ads") {
        return category.includes("meta") || category.includes("ads");
      }
      
      return false;
    });
  };

  const filteredProjects = getFilteredProjects();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="our-projects-2-cards-container w-full flex items-start justify-between flex-wrap gap-y-7 922px:flex-wrap 922px:justify-center 922px:gap-y-8 922px:gap-[4%] 400px:flex-col 400px:items-center 400px:justify-center 400px:gap-6"
      >
        {filteredProjects && filteredProjects.length > 0 ? (
          filteredProjects.map((data, ind) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: "18%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: ind * 0.1,
                }}
                key={ind}
                className="card-div-of-our-projects-2-cards-container w-32% flex flex-col items-start justify-start bg-white group relative overflow-hidden h-[560px]  1050px:h-[500px] 1004px:h-[500px] 922px:h-[460px] 792px:h-[400px] 620px:h-[420px] 538px:h-[440px] 476px:h-[480px] 400px:h-[440px] 922px:w-48% 400px:w-full 400px:gap-2"
              >
                <div className="curve-line-div-for-card-div-of-our-projects-2-cards-container min-h-20 min-w-20 border-2 border-color_orange absolute rounded-50% opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 792px:min-w-16 792px:min-h-16"></div>
                <Image
                  width={250}
                  height={100}
                  priority={true}
                  src={data._img}
                  title={data.img_title}
                  alt="img"
                  className="w-full min-h-54 1004px:min-h-50 792px:min-h-36 object-contain"
                />
                <p className="p-of-card-div-of-our-projects-2-cards-container mx-4 text-h5 font-h5 text-color_orange bricolage_grotesque_head mt-7 mb-2 1004px:mt-4 1004px:text-p1 792px:text-p2">
                  {data._p2}
                </p>
                <h4 className="mx-4 text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5 792px:text-p1 leading-none my-2">
                  {data._h4}
                </h4>
                <p className="mx-4 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                  {data._p3}
                </p>
                {/* <Link
                  onClick={() => setLoaderToggel(true)}
                  className="absolute -bottom-1"
                  // href={`/info/${"services"}-${"project_info"}-${ind + 1}`}
                  href={`/info/${"services"}-${"project_info"}-${projects2.indexOf(data) + 1}`}
                  title={`${data._h4} Page`}
                > */}
                <Link
                  onClick={() => setLoaderToggel(true)}
                  className="absolute -bottom-1"
                  href={`/projects/${data.slug}`}
                  title={`${data._h4} Page`}
                >

                  <span className="mb-4 mt-2 mx-4 flex items-center justify-start gap-2 cursor-pointer text-color_blue hover:text-color_orange">
                    <b className="text-p1 font-p1 bricolage_grotesque_head 1004px:text-p2 792px:text-p3">
                      {data._span}
                    </b>
                    <b className="text-h3 font-h3 1004px:text-h4 792px:text-h5new">
                      <HiArrowLongRight />
                    </b>
                  </span>
                </Link>
              </motion.div>
            );
          })
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full text-center py-20"
          >
            <p className="text-white/60 text-p1 bricolage_grotesque_head">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectPageCards;