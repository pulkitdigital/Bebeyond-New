import { visionMissionData } from "@/app/data/VisionMission";
import { motion } from "framer-motion";
import Image from "next/image";
import "./style.css"
export default function ProcessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "18%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="vision-mission-cards-container w-full flex items-start justify-between relative mt-7 662px:mt-4 662px:flex-col 662px:gap-y-6"
    >
      {visionMissionData &&
        visionMissionData.map((data, ind) => {
          return (
            <div
              key={ind}
              className={` bg-white vision-mission-card group w-[48%] relative flex items-start justify-center py-4 px-8 rounded-3xl 662px:w-full`}
            >
              <div className=" relative w-full h-full">
                <div
                  className={` relative w-full h-full flex items-center justify-start flex-col gap-2`}
                >
                  <div className="  flex items-center justify-center flex-col w-full gap-8 500px:gap-4">
                    {/* <div
                      className={`group-hover:bg-color_orange_light transition-all duration-500 ease-in-out  h-[140px] w-[140px] flex items-center justify-center bg-color_blue_light ${
                        data._h4 === "Steps for Success" ? "p-6" : "p-4"
                      }  ${
                        data._radius
                      } 1004px:h-[100px] 1004px:w-[100px] 792px:h-[80px] 792px:w-[80px]  ${
                        data._h4 === "Steps for Success"
                          ? "792px:p-4"
                          : "792px:p-3"
                      } `}
                    >
                      <Image
                        width={100}
                        height={100}
                        src={data._icon}
                        priority={true}
                        alt="icon"
                        className=" w-full h-full"
                      />
                    </div> */}
                    <h4 className={` underline underline-offset-2 w-full text-h4 font-h4 leading-h3 bricolage_grotesque_head text-center 1004px:text-h5 1004px:leading-h5 792px:text-p1 ${data._text}`}>
                      {data._h4}
                    </h4>
                  </div>
                  <div className=" flex items-center justify-center flex-col w-full">
                    {" "}
                    <p className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                      {data._p}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </motion.div>
  );
}
