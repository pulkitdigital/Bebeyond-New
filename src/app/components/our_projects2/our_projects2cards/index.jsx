"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { projects1, projects2, projects3 } from "../../../data/Projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";

function OurProjects2Cards() {
  const { setLoaderToggel } = useAppContext();
  const [viewMoreBtn, setViewMoreBtn] = useState("flex");
  const [viewLessBtn, setViewLessBtn] = useState("hidden");
  const [cardsData, setCardsData] = useState(null);
  const [cardsDataCon, setCardsDataCon] = useState(true);

  const handleProjectsData = () => {
    if (window.innerWidth < 413 && cardsDataCon) {
      setCardsDataCon(false);
      setCardsData(projects1);
      setViewLessBtn("hidden");
      setViewMoreBtn("flex");
    } else {
      setCardsDataCon(true);
      setCardsData(projects3);
      setViewLessBtn("hidden");
      setViewMoreBtn("flex");
    }
  };

  const handleViewToggle = (more = true) => {
    if (more) {
      setCardsDataCon(true);
      setCardsData(projects2);
      setViewMoreBtn("hidden");
      setViewLessBtn("flex");
    } else {
      handleProjectsData();
      setViewLessBtn("hidden");
      setViewMoreBtn("flex");
      document.querySelector("#all-projects").scrollIntoView();
    }
  };
  useEffect(() => {
    handleProjectsData();

    const handleResizeEvent = () => {
      if (window.innerWidth > 411) {
        window.addEventListener("resize", handleProjectsData);
      } else {
        window.removeEventListener("resize", handleProjectsData);
      }
    };

    handleResizeEvent();

    window.addEventListener("resize", handleResizeEvent);

    return () => {
      window.removeEventListener("resize", handleProjectsData);
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []);
  return (
    <div className="our-projects-2-cards-container w-full flex items-start justify-between flex-wrap gap-y-7 922px:flex-wrap 922px:justify-center 922px:gap-y-8 922px:gap-[4%] 400px:flex-col 400px:items-center 400px:justify-center 400px:gap-6">
      {cardsData &&
        cardsData.map((data, ind) => {
          return (
            // <motion.div
            //   initial={{ opacity: 0, y: "18%" }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{
            //     duration: 0.5,
            //   }}
            //   viewport={{ once: true }}
            //   key={ind}
            //   className="card-div-of-our-projects-2-cards-container w-32% flex flex-col items-start justify-start bg-white  group relative overflow-hidden h-[560px] 1180px:h-[580px] 1050px:h-[600px] 1004px:h-[500px] 922px:h-[460px] 792px:h-[400px] 620px:h-[420px] 538px:h-[440px] 476px:h-[480px] 400px:h-[440px] 922px:w-48%  400px:w-full 400px:gap-2"
            // >
            //   <div className="curve-line-div-for-card-div-of-our-projects-2-cards-container min-h-20 min-w-20 border-2 border-color_orange absolute rounded-50% opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out 792px:min-w-16 792px:min-h-16"></div>
            //   <Image
            //     width={250}
            //     height={100}
            //     priority={true}
            //     src={data._img}
            //     title={data.img_title}
            //     alt="img"
            //     className=" w-full min-h-64 1004px:min-h-56 792px:min-h-48"
            //   />
            //   <p className="p-of-card-div-of-our-projects-2-cards-container mx-4 text-h5 font-h5 text-color_orange bricolage_grotesque_head mt-7 mb-2 1004px:mt-4 1004px:text-p1 792px:text-p2">
            //     {data._p2}
            //   </p>
            //   <h4 className=" mx-4 text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5  792px:text-p1 leading-none my-2">
            //     {data._h4}
            //   </h4>
            //   <p className=" mx-4 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
            //     {data._p3}
            //   </p>
            //   <Link
            //     onClick={() => setLoaderToggel(true)}
            //     className=" absolute -bottom-1 "
            //     href={`/info/${"services"}-${"project_info"}-${ind + 1}`}
            //     title={`${data._h4} Page`}
            //   >
            //     <span className=" mb-4 mt-2 mx-4 flex items-center justify-start gap-2 cursor-pointer text-color_blue hover:text-color_orange">
            //       <b className=" text-p1 font-p1 bricolage_grotesque_head 1004px:text-p2 792px:text-p3">
            //         {data._span}
            //       </b>
            //       <b className=" text-h3 font-h3 1004px:text-h4 792px:text-h5new">
            //         <HiArrowLongRight />
            //       </b>
            //     </span>
            //   </Link>
            // </motion.div>

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
                <Link
                  onClick={() => setLoaderToggel(true)}
                  className="absolute -bottom-1"
                  href={`/info/${"services"}-${"project_info"}-${ind + 1}`}
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
        })}
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className={` w-full ${viewMoreBtn} items-center justify-center mt-10`}
      >
        <button
          onClick={() => handleViewToggle(true)}
          className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
                relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p2 400px:px-3 400px:py-2
                transition-all duration-700
                before:absolute before:inset-0
                before:-z-10 before:translate-x-[150%]
                before:translate-y-[150%] before:scale-[2.5]
                before:rounded-[100%] before:bg-color_orange
                before:transition-transform before:duration-700
                hover:before:translate-x-[0%]
                hover:before:translate-y-[0%]
                active:scale-75
                "
        >
          View More
        </button>
      </motion.div>
      <div
        className={` w-full ${viewLessBtn} items-center justify-center mt-10`}
      >
        <button
          onClick={() => handleViewToggle(false)}
          className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
          relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
          transition-all duration-700
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-color_orange
          before:transition-transform before:duration-700
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-75
          "
        >
          View Less
        </button>
      </div>
    </div>
  );
}

export default OurProjects2Cards;
