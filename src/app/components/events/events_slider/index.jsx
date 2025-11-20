"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import { events } from "../../../data/Events";
import Image from "next/image";
import "./style.css";
import "swiper/css";
function EventSwiper() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slideData, setSlideData] = useState(null);
  const [spaceBetween1, setSpaceBetween1] = useState(16);
  const [slidesPerView1, setSlidesPerView1] = useState(5);
  function handleSpaceBetween() {
    if (window.innerWidth > 900) {
      setSlidesPerView1(5);
      setSpaceBetween1(16);
    } else if (window.innerWidth <= 900 && window.innerWidth > 556) {
      setSlidesPerView1(4);
      setSpaceBetween1(16);
    } else if (window.innerWidth <= 556 && window.innerWidth > 444) {
      setSlidesPerView1(3);
      setSpaceBetween1(16);
    } else if (window.innerWidth <= 444) {
      setSlidesPerView1(2);
      setSpaceBetween1(16);
    }
  }
  useEffect(() => {
    setSlideData(events);
    handleSpaceBetween();
    window.addEventListener("resize", handleSpaceBetween);

    return () => {
      window.removeEventListener("resize", handleSpaceBetween);
    };
  }, []);

  return (
    <div className=" events-swiper flex items-center justify-center w-full mt-7">
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
                <div className="team-member-card-div flex items-center justify-end flex-col relative w-full h-64 1400px:h-60 1300px:h-56 1200px:h-52 1100px:h-48 1004px:h-44 800px:h-40 700px:h-36 608px:h-32 556px:h-36 490px:h-32 444px:h-48 400px:h-44 380px:h-40 350px:h-36 330px:h-32">
                  <Image
                    width={250}
                    height={500}
                    priority={true}
                    alt={data.title}
                    title={data.title}
                    className=" w-full h-full absolute"
                    src={data._img}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default EventSwiper;
