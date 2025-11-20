"use client";
import React from "react";
import "./style.css";
function Header4(params) {
  let _from = params._dynamic1;
  let _name = params._dynamic2;
  return (
    <header className="header-4-main w-full flex items-center justify-center">
      <div className="header-4-main-banner-overlay"></div>
      <div className="header-4-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="header-4 w-88% flex items-center justify-between h-340px  ">
          <div className="left-div-of-header flex items-start justify-center flex-col gap-7 w-1/2 792px:gap-3">
            <div className="top-div-of-left-div-of-header flex items-center justify-start w-full">
              <h1 className=" text-h1 font-h1 leading-h1 bricolage_grotesque_head 1004px:text-h2 792px:text-h3 text-white">
                {_name === "brand_info" ? "Client" : "Client"}
              </h1>
            </div>
            <div className="bottom-div-of-left-div-of-header bricolage_grotesque_head flex items-center justify-start w-full gap-2 text-h4 font-h4 1004px:text-h5new 792px:text-h5">
              <span className="text-color_blue ">
                {_from === "services" ? "Services" : "Home"}
              </span>
              <span className=" text-white">|</span>
              <span className=" text-color_orange ">
                {_name === "brand_info" ? "Client" : "Client"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header4;
