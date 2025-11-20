"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Autoplay } from "swiper/modules";
import { teams2 } from "../../../data/Teams";
import Image from "next/image";
import "./style.css";
import "swiper/css";
import Link from "next/link";
function OurTeamMember1Swiper() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slideData, setSlideData] = useState(null);
  const [spaceBetween1, setSpaceBetween1] = useState(50);
  const [slidesPerView1, setSlidesPerView1] = useState(4);
  function handleSpaceBetween() {
    if (window.innerWidth < 436) {
      setSlidesPerView1(2);
      setSpaceBetween1(25);
    } else if (window.innerWidth < 540) {
      setSlidesPerView1(3);
      setSpaceBetween1(12);
    } else if (window.innerWidth < 664) {
      setSlidesPerView1(3);
      setSpaceBetween1(25);
    } else if (window.innerWidth < 901) {
      setSlidesPerView1(4);
      setSpaceBetween1(25);
    } else if (window.innerWidth > 900) {
      setSlidesPerView1(4);
      setSpaceBetween1(50);
    }
  }
  useEffect(() => {
    setSlideData(teams2);
    handleSpaceBetween();
    window.addEventListener("resize", handleSpaceBetween);

    return () => {
      window.removeEventListener("resize", handleSpaceBetween);
    };
  }, []);

  return (
    <div className=" our-team-member-1-swiper flex items-center justify-center w-full mt-7">
      <span
        className="absolute right-7 swiper-button-next2 text-color_blue text-6xl font-thin 1400px:right-5 1250px:right-2 1100px:right-0 1004px:text-5xl cursor-pointer 792px:text-4xl 792px:right-2 576px:right-0 456px:-right-1 378px:-right-2"
        onClick={() => swiperInstance?.slideNext()}
      >
        <BsChevronRight />
      </span>
      <span
        className="absolute left-7 swiper-button-prev2 text-color_blue text-6xl font-thin 1400px:left-5 1250px:left-2 1100px:left-0 1004px:text-5xl cursor-pointer 792px:text-4xl 792px:left-2 576px:left-0 456px:-left-1 378px:-left-2"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <BsChevronLeft />
      </span>

      <Swiper
        spaceBetween={spaceBetween1}
        loop={true}
        slidesPerView={slidesPerView1}
        navigation
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={() => swiperInstance?.autoplay.start()}
      >
        {slideData &&
          slideData.map((data, ind) => {
            return (
              <SwiperSlide
                onClick={() => swiperInstance?.autoplay.stop()}
                key={ind}
              >
                <div className="team-member-card-div flex items-center justify-end flex-col relative w-full h-72 rounded-md overflow-hidden group 1004px:h-60 792px:h-48">
                  <Image
                    width={250}
                    height={500}
                    priority={true}
                    alt={data.img_title}
                    title={data.img_title}
                    className=" w-full h-full absolute"
                    src={data._img}
                  />

                  <div className="content-div-of-team-member-card-div relative w-88% bg-color_orange rounded-md flex items-center justify-center mb-4 h-1/5 828px:w-full 828px:mb-0 1004px:h-1/4">
                    <div
                      className={`social-div-of-team-member-card-div flex items-center justify-center bg-white w-3/4 rounded-3xl py-2 px-5 gap-3 text-p2 font-p2 text-center absolute transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 828px:text-p4`}
                    >
                      <Link href="https://www.facebook.com" 
                      title="Facebook Profile" target="blank">
                        <span className=" hover:text-blue-900">
                          <FaFacebookF />
                        </span>
                      </Link>
                      <Link href="https://www.twitter.com" target="blank" title="Twitter Profile">
                        <span className=" hover:text-sky-400">
                          <FaTwitter />
                        </span>
                      </Link>
                      <Link href="https://www.instagram.com" target="blank" title="Instagram Profile">
                        <span className=" hover:text-pink-500">
                          <FaInstagram />
                        </span>
                      </Link>
                      <Link href="https://www.linkedin.com" target="blank" title="Linkdin Profile">
                        <span className=" hover:text-blue-500">
                          <FaLinkedinIn />
                        </span>
                      </Link>
                    </div>
                    <div className="name-and-profession-div-of-team-member-card-div w-full flex flex-col items-center justify-center absolute bg-color_orange rounded-md transition-all duration-300 ease-in-out group-hover:-translate-y-[80%] py-2">
                      <h5 className=" bricolage_grotesque_head font-h5 text-h5 text-white text-center bg-color_orange w-full 1004px:text-p1 792px:text-p2">
                        {data._name}
                      </h5>
                      <span className=" text-p1 font-p1 text-white text-center bricolage_grotesque_head bg-color_orange w-full 1004px:text-p2 792px:text-p3">
                        {data._span}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default OurTeamMember1Swiper;
