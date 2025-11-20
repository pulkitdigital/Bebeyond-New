import Link from "next/link";
import React from "react";
import Image from "next/image";
function Get_A_Quote1() {
  return (
    <div className=" w-full flex items-center justify-between bg-white py-20 relative mt-10 1004px:py-16 792px:py-12">
      <Image
        width={300}
        height={150}
        priority={true}
        className=" w-1/2 h-full absolute z-[5] -left-44"
        alt="img"
        src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
        title="Map Pattern Image"
      />
      <Image
        width={300}
        height={150}
        priority={true}
        className=" w-1/2 h-full absolute z-[5] -right-44"
        alt="img"
        src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
        title="Map Pattern Image"
      />
      <Image
        width={300}
        height={150}
        priority={true}
        className=" w-1/2 h-full absolute z-[5] left-1/4"
        alt="img"
        src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
        title="Map Pattern Image"
      />
      <div className="div-for-bg-white-of-get-a-quote-sec absolute w-[200vw] h-full bg-white -left-1/2"></div>
      <div className=" flex flex-col items-center justify-center w-1/2 gap-8 z-10 792px:gap-4">
        <h4 className=" w-full text-h4 font-h4 leading-none bricolage_grotesque_head text-color_orange relative pb-2 1004px:text-h5 1004px:pb-1 792px:text-p2">
          <span className=" absolute bg-color_orange h-1 w-1/12 bottom-0 1004px:h-[2px] 792px:h-[1px]"></span>
          Custom Projects
        </h4>

        <p className=" w-full text-justify text-p1 font-p1 text-color_gray_dark public_sans_body 1004px:text-p2 792px:text-p3">
          We have people of multiple kind in the house. Together we can provide
          high quality work to satisfy you. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <Link href="/contact" className=" z-10" title="Contact Page">
        <button
          className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
              relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 1004px:py-2 1004px:px-4 792px:text-p3
              transition-all duration-700
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-color_white_light
        before:transition-transform before:duration-700
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-75
        "
        >
          Get A Quote
        </button>
      </Link>
    </div>
  );
}

export default Get_A_Quote1;
