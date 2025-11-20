import React from "react";
import { FaCheck } from "react-icons/fa";
function ServicesIncludes({ _sIncludesH, serviceUse }) {
  return (
    <div
      className={` w-full flex items-start justify-center flex-col gap-4 ${
        _sIncludesH === "Services Use" ? "bg-white" : "bg-white"
      } py-6 px-8 rounded-md 662px:p-4 538px:p-2`}
    >
      <h4
        className={` ${
          _sIncludesH === "Services Use" && ""
        } text-h4 font-h4 leading-none bricolage_grotesque_head relative pb-2 1004px:text-h5 1004px:pb-1 792px:text-p2`}
      >
        {_sIncludesH}
        <span className=" w-1/3 h-1 bg-color_orange absolute bottom-0 left-0 1004px:h-[2px] 792px:h-[1.5px]"></span>
      </h4>
      <ul className=" select-none w-full flex gap-1 items-start justify-start flex-col 500px:flex-row 500px:items-center 500px:gap-0 500px:flex-wrap">
        {
          serviceUse?.map((service,ind)=>{
            return(

              <li key={ind}
              className={` w-full flex items-center justify-start gap-2 text-p1 font-p1 ${
                _sIncludesH === "Services Use"
                ? "text-color_gray"
                : "text-color_gray"
                } public_sans_body 1004px:text-p2 792px:text-p3 500px:w-1/2 500px:gap-[2px]`}
                >
          <span className=" text-color_orange text-p2 font-p2 1004px:text-p3 792px:text-p4">
            <FaCheck />
          </span>
          <span>{service}</span>
        </li>
        )
      })
    }
      </ul>
    </div>
  );
}

export default ServicesIncludes;
