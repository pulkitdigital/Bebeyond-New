"use client";
import React from "react";

function Platforms({ platforms }) {
  return (
    <div className="w-70% flex flex-col gap-6 500px:w-full">
      <h4 className="text-h4 font-h4 bricolage_grotesque_head relative pb-2 1004px:text-h5 792px:text-p1">
        Platforms We Manage
        <span className="w-1/3 h-1 bg-color_orange absolute bottom-0 left-0 1004px:h-[2px] 792px:h-[1.5px]"></span>
      </h4>
      <div className="flex flex-col gap-4">
        {platforms.map((platform, ind) => (
          <div
            key={ind}
            className="flex flex-col gap-2 bg-white rounded-[12px] px-6 py-4 500px:px-4"
          >
            <h5 className="text-p1 font-h4 bricolage_grotesque_head text-color_blue 1004px:text-p2 792px:text-p3">
              {platform.platformName}
            </h5>
            <p className="text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
              {platform.platformDesc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Platforms;