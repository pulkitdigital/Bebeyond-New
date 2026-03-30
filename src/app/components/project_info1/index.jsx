import React from "react";
import Image from "next/image";
import { IoMdPricetag } from "react-icons/io";
import "./style.css";
import ServicesIncludes from "../service_info1/sevices_includes";
import Get_A_Quote1 from "./get-a-quote1";
function ProjectInfo1({ projectInfoData }) {
  return (
    <>
      {projectInfoData && (
        <main className=" w-full flex items-center justify-center bg-color_creame overflow-hidden">
          <div className="info-container max-w-1600px w-full flex items-center justify-center">
            <div className="info w-88% flex items-start justify-start flex-col gap-8 pt-16 relative 500px:items-center">
              <>
                <h3 className=" w-70% text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5 500px:w-full">
                  {projectInfoData._h4_new}
                </h3>
                <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                  {projectInfoData._p_new}
                </p>
                <div className="project-detail-div-of-img-div-of-info w-70% flex items-start justify-between flex-wrap gap-y-4 px-2 pt-8 pb-2 1004px:pb-8 1004px:pt-4">
                  {projectInfoData._pDetails.map((d, i) => {
                    return (
                      <div
                        key={i}
                        className=" w-32% flex items-start justify-center flex-col 662px:w-48%"
                      >
                        <span className=" bricolage_grotesque_head text-p1 font-p1 1004px:text-p2 792px:text-p3">
                          {d._h6}
                        </span>
                        <span className=" text-p2 font-p2 text-color_gray public_sans_body 1004px:text-p3 792px:text-p4">
                          {d._h6 === "Live Website:" ? (
                            <a
                              href={d._pD}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-color_blue underline"
                            >
                              {d._pD}
                            </a>
                          ) : (
                            <p>{d._pD}</p>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="img-div-of-info w-70% flex items-center justify-center flex-col 500px:w-full">
                  <Image
                    width={1000}
                    height={500}
                    priority={true}
                    title={projectInfoData._h4_new + " Image"}
                    alt="img"
                    className=" w-full h-full object-contain rounded-md"
                    src={projectInfoData._img}
                  />
                </div>
                <div className="right-div-of-info pl-6 mt-[65px] absolute right-0 w-30% flex items-start justify-start flex-col gap-8 1004px:mt-[55px] 792px:mt-[50px] 500px:hidden">
                  <ServicesIncludes
                    serviceUse={projectInfoData.serviceUse}
                    _sIncludesH="Services Use"
                  />
                  <div className="banner-of-right-div-of-info rounded-md overflow-hidden w-full min-h-[464px] flex items-center justify-center"></div>
                </div>
                {projectInfoData._newH5_1 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_1}
                    </h3>
                    <>
                      {projectInfoData._newp1.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {projectInfoData._newH5_2 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_2}
                    </h3>
                    <>
                      {projectInfoData._newp2.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_3 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_3}
                    </h3>
                    <>
                      {projectInfoData._newp3.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_4 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_4}
                    </h3>
                    <>
                      {projectInfoData._newp4.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_5 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_5}
                    </h3>
                    <>
                      {projectInfoData._newp5.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_6 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_6}
                    </h3>
                    <>
                      {projectInfoData._newp6.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_7 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_7}
                    </h3>
                    <>
                      {projectInfoData._newp7.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_8 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_8}
                    </h3>
                    <>
                      {projectInfoData._newp8.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_9 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_9}
                    </h3>
                    <>
                      {projectInfoData._newp9.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_10 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_10}
                    </h3>
                    <>
                      {projectInfoData._newp10.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_11 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_11}
                    </h3>
                    <>
                      {projectInfoData._newp11.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_12 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_12}
                    </h3>
                    <>
                      {projectInfoData._newp12.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_13 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_13}
                    </h3>
                    <>
                      {projectInfoData._newp13.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_14 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_14}
                    </h3>
                    <>
                      {projectInfoData._newp14.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_15 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_15}
                    </h3>
                    <>
                      {projectInfoData._newp15.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}{" "}
                {projectInfoData._newH5_16 && (
                  <>
                    <h3 className=" w-1/2 text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p2 500px:w-full">
                      {projectInfoData._newH5_16}
                    </h3>
                    <>
                      {projectInfoData._newp16.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                <p className="w-70% text-justify text-p2 font-p2 public_sans_body flex items-center justify-start gap-1 1004px:text-p3 792px:text-p4 500px:w-full">
                  <span className=" text-p1 font-p1 text-color_orange 1004px:text-p2 792px:text-p3">
                    <IoMdPricetag />
                  </span>
                  <span>{projectInfoData._pTag}</span>
                </p>
                <div className="w-full hidden items-center justify-center 500px:flex">
                  <ServicesIncludes
                    serviceUse={projectInfoData.serviceUse}
                    _sIncludesH="Services Use"
                  />
                </div>
                <Get_A_Quote1 />
              </>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default ProjectInfo1;
