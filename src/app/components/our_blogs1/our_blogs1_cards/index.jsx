"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import { blogs1 } from "../../../data/Blogs";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoCalendarOutline, IoPricetagsOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";
function OurBlogs1Cards() {
  const [cardsData, setCardsData] = useState(null);
  const { setLoaderToggel } = useAppContext();
  useEffect(() => {
    setCardsData(blogs1);
  }, []);
  return (
    <div className="our-blogs-1-cards-container w-full flex items-start justify-between 922px:flex-wrap 922px:justify-center 922px:gap-y-8 922px:gap-[4%] 400px:flex-col 400px:items-center 400px:justify-center 400px:gap-6 400px:flex-nowrap ">
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
              id={`card-${ind + 1}-div-of-our-blogs-1-cards-container`}
              className="card-div-of-our-blogs-1-cards-container w-32% flex flex-col items-start justify-start gap-2 bg-white  group relative overflow-hidden 1004px:gap-0 922px:w-48% 456px:min-h-[470px] 444px:min-h-0  400px:w-full 400px:gap-2"
            >
              <Image
                width={100}
                height={100}
                priority={true}
                alt="post pattern png"
                className="pattern-1-img-of-card-div-of-our-blogs-1-cards-container w-1/4 absolute opacity-0 -bottom-8 -right-8 group-hover:opacity-100 transition-all duration-500 ease-in-out 700px:-bottom-7 700px:-right-7 662px:-right-6 662px:-bottom-6 556px:-bottom-5 556px:-right-5 456px:-right-4 456px:-bottom-4 400px:-bottom-[28px] 400px:-right-[29px]"
                title="Post Background Pattern"
                src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/post-pattern2.png"
              />
              <Image
                width={500}
                height={250}
                priority={true}
                src={data._img}
                title={data.img_title}
                alt="img"
                className=" min-h-64 saturate-0 transition-all duration-500 ease-in-out group-hover:saturate-100 1004px:min-h-56"
              />
              {/* <div className=" mx-4 my-4 date-and-role-div-of-card-div-of-our-blogs-1-cards-container flex items-center justify-center gap-4 1004px:my-2 1004px:gap-0 1004px:mx-2 426px:my-2 426px:p-0 426px:flex-col 426px:items-start 400px:flex-row">
                <p className=" text-p2 font-p2 flex items-center justify-center text-color_gray  gap-1 1004px:p-3 792px:text-p3 792px:p-2 426px:py-0">
                  <IoCalendarOutline className=" text-color_orange" />
                  {data._d}
                </p>
                <p className="text-color_gray text-p2 font-p2 flex items-center justify-center gap-1 1004px:p-3 792px:text-p3 792px:p-2 426px:py-0  ">
                  <IoPricetagsOutline className=" text-color_orange" />
                  {data._p4}
                </p>
              </div> */}

              <h4 className=" mx-4 text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5 1004px:leading-h5 792px:text-p1 leading-none mb-1 mt-6">
                {data._h4}
              </h4>
              <p className=" mx-4 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 400px:text-justify">
                {data._p5}
              </p>
              <Link
                onClick={() => setLoaderToggel(true)}
                href={`/info/${"home"}-${"blog_info"}-${ind + 1}`}
                title={`/info/${"home"}-${"blog_info"}-${ind + 1}`}
                className=" 456px:absolute 456px:bottom-0  444px:static "
              >
                <span className=" mb-4 mt-2 mx-4 flex items-center justify-start gap-2 cursor-pointer text-color_blue hover:text-color_orange">
                  <b className=" text-p1 font-p1 bricolage_grotesque_head 1004px:text-p2 792px:text-p3">
                    {data._span}
                  </b>
                  <b className=" text-h3 font-h3 1004px:text-h4 792px:text-h5new">
                    <HiArrowLongRight />
                  </b>
                </span>
              </Link>
            </motion.div>
          );
        })}
    </div>
  );
}

export default OurBlogs1Cards;
