"use client";
import React, { useEffect, useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { blogs1, blogs2 } from "../../../data/Blogs";
import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppContext } from "@/context";
 
function OurBlogs2Sidebar() {
  const [cardsData, setCardsData] = useState(null);
  const { setLoaderToggel } = useAppContext();
  useEffect(() => {
    setCardsData(blogs1);
  }, []);
  function searchBlogs(val) {
    val
      ? setCardsData(
          blogs2.filter((blog) => {
            return blog._h4.toLowerCase().includes(val.toLowerCase());
          })
        )
      : setCardsData(blogs1);
  }
  return (
    <div className=" w-28% mt-4 flex items-center justify-between flex-col gap-8 412px:w-2/5">
      <motion.div
        initial={{ opacity: 0, y: "18%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className=" w-full bg-white flex items-center justify-center p-6 relative public_sans_body  text-p1 font-p1 1004px:text-p2 1004px:p-4 792px:text-p3 662px:p-3"
      >
        <input
          onChange={(e) => searchBlogs(e.target.value)}
          placeholder="Search"
          type="text"
          className=" placeholder-color_gray text-color_gray border-2 border-gray-200 w-full focus:outline-none py-2 pl-2 pr-8 792px:py-1 792px:pl-1 792px:pr-5"
        />
        <span className=" absolute right-8 text-[22px] text-color_gray 1004px:text-h5 792px:text-p1 792px:right-5">
          <RxMagnifyingGlass />
        </span>
      </motion.div>
      <div className=" w-full flex items-start justify-start flex-col p-6 bg-white gap-4 662px:p-3">
        <h4 className=" w-full leading-h4 text-h4 font-h4 bricolage_grotesque_head pb-2 relative 1004px:text-h5new 1004px:pb-1 792px:text-h5 792px:pb-[2px]">
          Recent Blogs
          <span className=" w-1/3 h-1 bg-color_orange absolute bottom-0 left-0 1004px:h-[2px] 792px:h-[1px]"></span>
        </h4>
        <div className=" w-full flex items-center justify-center flex-col gap-4">
          {cardsData &&
            cardsData.map((data, ind) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: "18%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  key={ind}
                  className=" w-full flex items-center justify-between border-b-2 pb-4 border-color_orange 1004px:border-b 1004px:pb-2 800px:flex-col 800px:items-start"
                >
                  <div className="w-1/3 h-full flex items-center justify-center 800px:w-full 800px:justify-start">
                    <Link
                      href={`/blogs/${data.slug || `blog-blog_info-${ind + 1}`}`}
                      title={data._h4 + " Page"}
                      onClick={() => setLoaderToggel(true)}
                    >
                      <Image
                        width={100}
                        height={100}
                        className=" w-full h-20 1004px:h-16 800px:h-full"
                        src={data._img}
                        alt="img"
                        title={data._h4 + " Image"}
                        priority={true}
                      />
                    </Link>
                  </div>
                  <div className=" w-3/5 flex items-center justify-center gap-4 flex-col h-full 800px:w-full 800px:gap-2 800px:mt-2">
                    <h5 className=" w-full bricolage_grotesque_head text-p1 font-p1 leading-5 1004px:text-p2 1004px:leading-p1 792px:text-p3">
                      {data._h4}
                    </h5>
                    <span className=" w-full public_sans_body text-color_gray font-p2 text-p2 1004px:text-p3 792px:text-p4">
                      {data._d}
                    </span>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "18%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="banner-of-sidebar-of-our-blogs-2 w-full min-h-[464px] flex items-center justify-center"
      ></motion.div>
    </div>
  );
}

export default OurBlogs2Sidebar;
