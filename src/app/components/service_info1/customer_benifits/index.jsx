import Image from "next/image";
import React from "react";
import { LiaHandPointRightSolid } from "react-icons/lia";

function CustomerBenifits({ _img1,serviceInfoData}) {
  return (
    <div className=" w-70% flex items-start justify-between 662px:flex-col 662px:gap-4 500px:w-full 500px:justify-center ">
      <Image
        width={500}
        height={250}
        alt="img"
        title="Customer Benefits Page"
        className=" w-48% 662px:w-full"
        src={_img1}
        priority={true}
      />
      <div className=" w-48% flex items-start justify-center flex-col gap-4 662px:w-full 662px:gap-0">
        <h5 className="text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5new 792px:text-h5 662px:w-full">
          Customer Benefits!
        </h5>
        <p className=" public_sans_body font-p1 text-p1 text-justify text-color_gray 1004px:text-p2 1004px:text-start 792px:text-p3 662px:w-full ">
          {serviceInfoData.customerBenefitsTitle}
        </p>
        <ul className=" select-none w-full flex gap-1 items-start justify-center flex-col 662px:mt-2">
          {serviceInfoData.customerBenefits?.map((data, ind) => {
            return (
              <li
                key={ind}
                className=" w-full flex items-center justify-start gap-2 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
              >
                <span className=" text-color_orange text-h5 font-h5 1004px:text-p1 792px:text-p2">
                  <LiaHandPointRightSolid />
                </span>
                <span>{data}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CustomerBenifits;
