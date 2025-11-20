import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";

function BlogInfo1({ blogInfoData }) {
  return (
    <>
      {blogInfoData && (
        <main className=" w-full flex items-center justify-center bg-color_creame">
          <div className="info-container max-w-1600px w-full flex items-center justify-center">
            <div className="info w-88% flex items-center justify-cente flex-col py-16 relative">
              <div className=" w-3/4 flex items-center justify-between flex-wrap gap-y-8 500px:w-full">
                {/* <Image
                  width={500}
                  height={250}
                  alt="img"
                  className=" w-full "
                  priority={true}
                  src={blogInfoData._img}
                /> */}
                {blogInfoData._newH4_1 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_1}
                    </h3>
                    <>
                      {blogInfoData._newp1.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_2 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_2}
                    </h3>
                    <>
                      {blogInfoData._newp2.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_3 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_3}
                    </h3>
                    <>
                      {blogInfoData._newp3.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_4 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_4}
                    </h3>
                    <>
                      {blogInfoData._newp4.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                <Image
                  width={300}
                  height={150}
                  className=" w-48%"
                  alt="img"
                  priority={true}
                  src={blogInfoData._img2}
                />
                <Image
                  width={300}
                  height={150}
                  className=" w-48% " 
                  alt="img"
                  priority={true}
                  src={blogInfoData._img3}
                />

                {blogInfoData._newH4_5 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_5}
                    </h3>
                    <>
                      {blogInfoData._newp5.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_6 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_6}
                    </h3>
                    <>
                      {blogInfoData._newp6.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_7 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_7}
                    </h3>
                    <>
                      {blogInfoData._newp7.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_8 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_8}
                    </h3>
                    <>
                      {blogInfoData._newp8.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                <div className=" w-full flex items-start justify-center flex-col p-8 bg-white border-l-[3px] border-color_orange 792px:py-6 792px:pl-8 792px:pr-6 ">
                  <span className=" text-color_orange text-h2 leading-none flex items-center justify-center flex-col mb-4 1004px:text-h3 792px:text-h4">
                    <FaQuoteRight />
                  </span>
                  <h4 className=" text-h4 font-h4 bricolage_grotesque_head w-4/5 1004px:text-h5new 792px:text-p2">
                    {blogInfoData._metaDes}
                  </h4>
                  {/* <p className=" text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                    - Winston Churchill.
                  </p> */}
                </div>
                {blogInfoData._newH4_9 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_9}
                    </h3>
                    <>
                      {blogInfoData._newp9.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_10 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_10}
                    </h3>
                    <>
                      {blogInfoData._newp10.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_11 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_11}
                    </h3>
                    <>
                      {blogInfoData._newp11.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_12 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_12}
                    </h3>
                    <>
                      {blogInfoData._newp12.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}

                {blogInfoData._newH4_13 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_13}
                    </h3>
                    <>
                      {blogInfoData._newp13.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}
                {blogInfoData._newH4_14 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_14}
                    </h3>
                    <>
                      {blogInfoData._newp14.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                      {blogInfoData._newH4_15 && (
                        <>
                          <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                            {blogInfoData._newH4_15}
                          </h3>
                          <>
                            {blogInfoData._newp15.map((para, ind) => {
                              return (
                                <p
                                  key={ind}
                                  className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                                >
                                  {para}
                                </p>
                              );
                            })}
                          </>
                        </>
                      )}{" "}
                    </>
                  </>
                )}
                {blogInfoData._newH4_16 && (
                  <>
                    <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                      {blogInfoData._newH4_16}
                    </h3>
                    <>
                      {blogInfoData._newp16.map((para, ind) => {
                        return (
                          <p
                            key={ind}
                            className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                          >
                            {para}
                          </p>
                        );
                      })}
                    </>
                  </>
                )}

                {/* <div className=" w-full flex items-center justify-start gap-4 548px:gap-1">
                  <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3 top-0 500px:px-2 ">
                    Business
                  </span>
                  <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3  bottom-0 500px:px-2">
                    Marketing
                  </span>
                  <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3  right-0 top-0 500px:px-2">
                    Startup
                  </span>
                  <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3  right-0 bottom-0 500px:px-2">
                    Design
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default BlogInfo1;
