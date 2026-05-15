"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { blogs1, blogs2, blogs3 } from "../../../data/Blogs";
import { IoCalendarOutline, IoPricetagsOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";

function OurBlogs2Cards() {
  const { setLoaderToggel } = useAppContext();
  const [viewMoreBtn, setViewMoreBtn] = useState("flex");
  const [viewLessBtn, setViewLessBtn] = useState("hidden");
  const [cardsData, setCardsData] = useState(blogs3);
  const [cardsDataCon, setCardsDataCon] = useState(true);

  const handleBlogsData = () => {
    if (window.innerWidth < 413 && cardsDataCon) {
      setCardsDataCon(false);
      setCardsData(blogs1);
      setViewLessBtn("hidden");
      setViewMoreBtn("flex");
    } else {
      setCardsDataCon(true);
      setCardsData(blogs3);
      setViewLessBtn("hidden");
      setViewMoreBtn("flex");
    }
  };

  const handleViewToggle = (more = true) => {
    if (more) {
      setCardsDataCon(true);
      setCardsData(blogs2);
      setViewMoreBtn("hidden");
      setViewLessBtn("flex");
    } else {
      handleBlogsData();
      setViewLessBtn("hidden");
      setViewMoreBtn("flex");
      document.querySelector("#all-blogs").scrollIntoView();
    }
  };
  useEffect(() => {
    handleBlogsData();

    const handleResizeEvent = () => {
      if (window.innerWidth > 411) {
        window.addEventListener("resize", handleBlogsData);
      } else {
        window.removeEventListener("resize", handleBlogsData);
      }
    };

    handleResizeEvent();

    window.addEventListener("resize", handleResizeEvent);

    return () => {
      window.removeEventListener("resize", handleBlogsData);
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []);
  return (
    <div className="our-blogs-2-cards-container w-70% flex items-start justify-between flex-wrap gap-y-4 mt-4 1004px:justify-center 1004px:gap-y-6 1004px:gap-[4%] 412px:w-[58%]">
      {cardsData &&
        cardsData.map((data, ind) => {
          return (
            <motion.div
              initial={{ y: "18%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              key={ind}
              className="card-div-of-our-blogs-2-cards-container w-32% flex flex-col items-start justify-start bg-white  group relative overflow-hidden gap-2 1004px:w-48% 576px:min-h-[340px] 538px:min-h-0 490px:min-h-[380px] 446px:min-h-0 412px:w-full"
            >
              <Image
                width={100}
                height={100}
                priority={true}
                alt="post pattern png"
                className="pattern-1-img-of-card-div-of-our-blogs-2-cards-container w-1/4 absolute opacity-0 -bottom-6 -right-6 group-hover:opacity-100 transition-all duration-500 ease-in-out 576px:-bottom-4 576px:-right-4"
                title="Post Background Pattern"
                src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/post-pattern2.png"
              />
              <Image
                width={300}
                height={150}
                priority={true}
                src={data._img}
                title={data.img_title}
                alt="img"
                className=" min-h-32 saturate-0 transition-all duration-500 ease-in-out group-hover:saturate-100"
              />
              {/* <div className=" mx-4 date-and-role-div-of-card-div-of-our-blogs-2-cards-container flex items-center justify-center gap-2">
                <p className="  flex text-p4 font-medium items-center justify-center text-color_gray  gap-1 792px:text-p5">
                  <IoCalendarOutline className="text-p3 font-medium text-color_orange 792px:text-p4" />
                  {data._d}
                </p>
                <p className="text-color_gray text-p4 font-medium flex items-center justify-center gap-1 792px:text-p5">
                  <IoPricetagsOutline className=" text-color_orange text-p3 font-medium 792px:text-p4" />
                  {data._p4}
                </p>
              </div> */}

              <h4 className=" leading-h5 mx-4 text-p1 font-semibold bricolage_grotesque_head 792px:text-p2">
                {data._h4}
              </h4>
              <p className=" mx-4 text-p3 font-medium text-color_gray public_sans_body 792px:text-p4">
                {data._p5}
              </p>
              {/* <Link
                onClick={() => setLoaderToggel(true)}
                // href={`/info/${"blog"}-${"blog_info"}-${ind + 1}`}
                href={`/info/${data.slug}`}
                title={data._h4 + " Page"}
                className=" 576px:absolute 576px:bottom-1 538px:static 490px:absolute 446px:static"
              > */}
              <Link
                onClick={() => setLoaderToggel(true)}
                href={`/blogs/${data.slug || `blog-blog_info-${ind + 1}`}`}
                title={data._h4 + " Page"}
                className=" 576px:absolute 576px:bottom-1 538px:static 490px:absolute 446px:static"
              >
                <span className=" mx-4 mb-2 flex items-center justify-start gap-2 cursor-pointer text-color_blue hover:text-color_orange">
                  <b className=" text-p3 font-medium bricolage_grotesque_head 792px:text-p4">
                    {data._span}
                  </b>
                  <b className=" text-h4 font-h4 792px:text-h5new">
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

export default OurBlogs2Cards;
