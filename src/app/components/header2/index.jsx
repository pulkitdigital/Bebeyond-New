import React from "react";
import "./style.css";
function Header2(props) {
  return (
    <header className="header-2-main w-full flex items-center justify-center">
      <div className=" header-2-main-banner-overlay"></div>
      <div className="header-2-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="header-2 w-88% flex items-center justify-between h-340px ">
          <div className="left-div-of-header flex items-start justify-center flex-col gap-7 w-1/2 792px:gap-3">
            <div className="top-div-of-left-div-of-header flex items-center justify-start w-full">
              <h1 className=" text-white text-h1 font-h1 leading-h1 bricolage_grotesque_head 1004px:text-h2 792px:text-h3">
                {props.h_1}
              </h1>
            </div>
            <div className="bottom-div-of-left-div-of-header bricolage_grotesque_head flex items-center justify-start w-full gap-2 text-h4 font-h4 1004px:text-h5new 792px:text-h5">
              <span className="text-color_blue ">Home</span>
              <span className=" text-white">|</span>
              <span className=" text-color_orange ">{props.h_1}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header2;
