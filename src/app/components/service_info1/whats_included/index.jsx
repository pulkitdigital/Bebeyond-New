"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";

function WhatsIncluded({ whatsIncluded }) {
  return (
    <div className="w-70% flex flex-col gap-4 bg-white rounded-[12px] px-6 py-5 500px:w-full 500px:px-4">
      <h4 className="text-h4 font-h4 bricolage_grotesque_head relative pb-2 1004px:text-h5 792px:text-p1">
        What&apos;s Included
        <span className="w-1/3 h-1 bg-color_orange absolute bottom-0 left-0 1004px:h-[2px] 792px:h-[1.5px]"></span>
      </h4>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 500px:grid-cols-1">
        {whatsIncluded.map((item, ind) => (
          <li
            key={ind}
            className="flex items-start gap-2 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
          >
            <span className="text-color_orange text-p3 mt-[3px] shrink-0">
              <FaCheck />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhatsIncluded;