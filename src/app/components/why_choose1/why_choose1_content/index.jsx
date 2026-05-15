// "use client";
// import React, { useState } from "react";
// import "./style.css";
// import { FaRegHandPointRight } from "react-icons/fa6";
// import Image from "next/image";
// import CountUp from "react-countup";
// import { delay, motion } from "framer-motion";
// function WhyChoose1Content() {
//   const bottomDataContent = [
//     {
//       l1: "Creative Ideation",
//       l2: "Digital Experimentation",
//       l3: "Strategic Foresight",
//       l4: "Data-Driven Optimization",
//       percName1: "Success Innovative Campaigns",
//       percVal1: 90,
//       percName2: "Client Engagement",
//       percVal2: 75,
//     },
//     {
//       l1: "Client Partnerships",
//       l2: "Team Synergy",
//       l3: "Open Communication",
//       l4: "Shared Success",
//       percName1: "Client Satisfaction",
//       percVal1: 95,
//       percName2: "Project Completion",
//       percVal2: 80,
//     },
//     {
//       l1: "Agile Methodologies",
//       l2: "Flexible Solutions",
//       l3: "Continuous Learning",
//       l4: "Resilient Strategies",
//       percName1: "Dynamic Market Campaigns",
//       percVal1: 65,
//       percName2: "Client Retention",
//       percVal2: 90,
//     },
//   ];
//   const [startCount, setStartCount] = useState(true);
//   const [counterVal, setCounterVal] = useState({
//     counterVal1: 0,
//     counterVal2: 0,
//   });
//   const [handleClickData, setHandleClickData] = useState({
//     integrityTextColor: "bg-color_orange",
//     integrityBgColor: "text-white",
//     objectiveBgColor: "bg-white",
//     objectiveTextColor: "text-black",
//     excellenceBgColor: "bg-white",
//     excellenceTextColor: "text-black",
//   });
//   const [bottomData, setBottomData] = useState([
//     { _img: "/Home-Images/Innovation.webp",img_title:"Innovation Image", _display: "flex" },
//     { _img: "/Home-Images/collabration.webp",img_title:"Collabration  Image", _display: "hidden" },
//     { _img: "/Home-Images/adaptibility.webp",img_title:"Adaptibility", _display: "hidden" },
//   ]);
//   function changeContentOnClick(param) {
//     if (param === "INNOVATION") {
//       setStartCount(false);
//       setHandleClickData({
//         integrityTextColor: "bg-color_orange",
//         integrityBgColor: "text-white",
//         objectiveBgColor: "bg-white",
//         objectiveTextColor: "text-black",
//         excellenceBgColor: "bg-white",
//         excellenceTextColor: "text-black",
//       });
//       setBottomData([
//         { _img: "/Home-Images/Innovation.webp", img_title:"Innovation Image", _display: "flex" },
//         { _img: "/Home-Images/collabration.webp", img_title:"Collabration  Image", _display: "hidden" },
//         { _img: "/Home-Images/adaptibility.webp", img_title:"Adaptibility", _display: "hidden" },
//       ]);
//       setCounterVal({ counterVal1: 0, counterVal2: 0 });
//       setStartCount(true);
//     } else if (param === "COLLABORATION") {
//       setStartCount(false);
//       setHandleClickData({
//         integrityBgColor: "bg-white",
//         integrityTextColor: "text-black",
//         objectiveBgColor: "bg-color_orange",
//         objectiveTextColor: "text-white",
//         excellenceBgColor: "bg-white",
//         excellenceTextColor: "text-black",
//       });

//       setBottomData([
//         { _img: "/Home-Images/Innovation.webp", img_title:"Innovation Image", _display: "hidden" },
//         { _img: "/Home-Images/collabration.webp",img_title:"Collabration  Image", _display: "flex" },
//         { _img: "/Home-Images/adaptibility.webp",img_title:"Adaptibility", _display: "hidden" },
//       ]);
//       setCounterVal({ counterVal1: 1, counterVal2: 1 });
//       setStartCount(true);
//     } else if (param === "ADAPTABILITY") {
//       setStartCount(false);
//       setHandleClickData({
//         integrityTextColor: "text-black",
//         integrityBgColor: "bg-white",
//         objectiveBgColor: "bg-white",
//         objectiveTextColor: "text-black",
//         excellenceBgColor: "bg-color_orange",
//         excellenceTextColor: "text-white",
//       });

//       setBottomData([
//         { _img: "/Home-Images/Innovation.webp", img_title:"Innovation Image", _display: "hidden" },
//         { _img: "/Home-Images/collabration.webp", img_title:"Collabration  Image", _display: "hidden" },
//         { _img: "/Home-Images/adaptibility.webp",img_title:"Adaptibility", _display: "flex" },
//       ]);
//       setCounterVal({ counterVal1: 2, counterVal2: 2 });
//       setStartCount(true);
//     } else {
//       return;
//     }
//   }
//   return (
//     <motion.div
//       initial={{ y: "18%", opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{
//         duration: 0.5,
//         delay: 0,
//       }}
//       viewport={{ once: true }}
//       className=" why-choose-1-content-container w-full  flex justify-center items-center bg-white py-7 pl-7 relative rounded-tl-3xl 1004px:py-4 1004px:pl-4 662px:rounded-tr-3xl 662px:pr-4"
//     >
//       <div className="div-for-full-width-bg-white-of-why-choose-1-content-container absolute bg-white w-screen h-full left-full 662px:hidden"></div>
//       <div className="why-choose-1-content flex flex-col items-center justify-center w-full">
//         <div className="top-div-of-why-choose-1-content flex items-end justify-between w-full border-b-2 border-color_orange 792px:border-b">
//           <span
//             className={`${
//               handleClickData.integrityBgColor +
//               " " +
//               handleClickData.integrityTextColor
//             } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
//             onClick={() => changeContentOnClick("INNOVATION")}
//           >
//             INNOVATION
//           </span>
//           <span
//             className={`${
//               handleClickData.objectiveBgColor +
//               " " +
//               handleClickData.objectiveTextColor
//             } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
//             onClick={() => changeContentOnClick("COLLABORATION")}
//           >
//             COLLABORATION
//           </span>
//           <span
//             className={`${
//               handleClickData.excellenceBgColor +
//               " " +
//               handleClickData.excellenceTextColor
//             } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
//             onClick={() => changeContentOnClick("ADAPTABILITY")}
//           >
//             ADAPTABILITY
//           </span>
//         </div>
//         {bottomData &&
//           bottomData.map((data, ind) => {
//             return (
//               <div
//                 key={ind}
//                 className={`bottom-div-of-why-choose-1-content w-full ${data._display} flex-col items-start justify-center gap-7 mt-4`}
//               >
//                 <div className="content-div-of-bottom-div-of-why-choose-1-content w-full flex items-center justify-start 802px:items-start 792px:items-center">
//                   <Image
//                     width={250}
//                     height={100}
//                     priority={true}
//                     alt={data.img_title}
//                     title={data.img_title}
//                     className=" w-1/2 802px:w-48% 802px:h-32 792px:h-28"
//                     src={data._img}
//                   />
//                   <ul className=" w-1/2 flex items-start justify-center flex-col pl-7 gap-4 font-p1 text-p1 public_sans_body text-color_gray 1004px:text-p2 802px:w-[52%] 802px:pl-2 792px:text-p3">
//                     <li className=" flex items-center justify-start gap-2">
//                       <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
//                         <FaRegHandPointRight />
//                       </span>
//                       <span>{bottomDataContent[ind].l1}</span>
//                     </li>
//                     <li className=" flex items-center justify-start gap-2">
//                       <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
//                         <FaRegHandPointRight />
//                       </span>
//                       <span>{bottomDataContent[ind].l2}</span>
//                     </li>
//                     <li className=" flex items-center justify-start gap-2">
//                       <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
//                         <FaRegHandPointRight />
//                       </span>
//                       <span>{bottomDataContent[ind].l3}</span>
//                     </li>
//                     <li className=" flex items-center justify-start gap-2">
//                       <span className=" text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
//                         <FaRegHandPointRight />
//                       </span>
//                       <span>{bottomDataContent[ind].l4}</span>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="line-graph-div-of-bottom-div-of-why-choose-1-content w-full flex flex-col items-start justify-center gap-7">
//                   <span className=" w-[95%] text-h5 font-h5 bricolage_grotesque_head pb-4 relative 1004px:text-p1 1004px:pb-2 792px:text-p2 792px:pb-1">
//                   {bottomDataContent[ind].percName1}{" "}
//                     {startCount && (
//                       <CountUp
//                         start={counterVal.counterVal1}
//                         end={bottomDataContent[ind].percVal1}
//                         duration={2}
//                         suffix="%"
//                         separator=""
//                       />
//                     )}
//                   </span>
//                   <span className=" w-[85%] text-h5 font-h5 bricolage_grotesque_head pb-4 relative 1004px:text-p1 1004px:pb-2 792px:text-p2 792px:pb-1">
//                   {bottomDataContent[ind].percName2}{" "}
//                     {startCount && (
//                       <CountUp
//                         start={counterVal.counterVal2}
//                         end={bottomDataContent[ind].percVal2}
//                         duration={2}
//                         suffix="%"
//                         separator=""
//                       />
//                     )}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </motion.div>
//   );
// }

// export default WhyChoose1Content;



















"use client";
import React, { useState } from "react";
import "./style.css";
import { FaRegHandPointRight } from "react-icons/fa6";
import Image from "next/image";
import CountUp from "react-countup";
import { delay, motion } from "framer-motion";

function WhyChoose1Content() {
  const bottomDataContent = [
    {
      // OLD:
      // l1: "Creative Ideation",
      // l2: "Digital Experimentation",
      // l3: "Strategic Foresight",
      // l4: "Data-Driven Optimization",
      // percName1: "Success Innovative Campaigns",
      // percVal1: 90,
      // percName2: "Client Engagement",
      // percVal2: 75,

      l1: "Local Market Knowledge",
      l2: "Full-Funnel Strategy",
      l3: "Transparent Reporting",
      l4: "Dedicated Account Manager",
      percName1: "Successful Campaigns",
      percVal1: 90,
      percName2: "Client Engagement",
      percVal2: 75,
    },
    {
      // OLD:
      // l1: "Client Partnerships",
      // l2: "Team Synergy",
      // l3: "Open Communication",
      // l4: "Shared Success",
      // percName1: "Client Satisfaction",
      // percVal1: 95,
      // percName2: "Project Completion",
      // percVal2: 80,

      l1: "Client Partnerships",
      l2: "Open Communication",
      l3: "Shared Success",
      l4: "Result-First Contracts",
      percName1: "Client Satisfaction",
      percVal1: 95,
      percName2: "Project Completion",
      percVal2: 80,
    },
    {
      // OLD:
      // l1: "Agile Methodologies",
      // l2: "Flexible Solutions",
      // l3: "Continuous Learning",
      // l4: "Resilient Strategies",
      // percName1: "Dynamic Market Campaigns",
      // percVal1: 65,
      // percName2: "Client Retention",
      // percVal2: 90,

      l1: "Agile Methodologies",
      l2: "Flexible Solutions",
      l3: "Continuous Learning",
      l4: "Resilient Strategies",
      percName1: "Dynamic Market Campaigns",
      percVal1: 65,
      percName2: "Client Retention",
      percVal2: 90,
    },
  ];

  const [startCount, setStartCount] = useState(true);
  const [counterVal, setCounterVal] = useState({
    counterVal1: 0,
    counterVal2: 0,
  });
  const [handleClickData, setHandleClickData] = useState({
    integrityTextColor: "bg-color_orange",
    integrityBgColor: "text-white",
    objectiveBgColor: "bg-white",
    objectiveTextColor: "text-black",
    excellenceBgColor: "bg-white",
    excellenceTextColor: "text-black",
  });
  const [bottomData, setBottomData] = useState([
    { _img: "/Home-Images/Innovation.webp", img_title: "Innovation Image", _display: "flex" },
    { _img: "/Home-Images/collabration.webp", img_title: "Collabration Image", _display: "hidden" },
    { _img: "/Home-Images/adaptibility.webp", img_title: "Adaptibility", _display: "hidden" },
  ]);

  function changeContentOnClick(param) {
    if (param === "INNOVATION") {
      setStartCount(false);
      setHandleClickData({
        integrityTextColor: "bg-color_orange",
        integrityBgColor: "text-white",
        objectiveBgColor: "bg-white",
        objectiveTextColor: "text-black",
        excellenceBgColor: "bg-white",
        excellenceTextColor: "text-black",
      });
      setBottomData([
        { _img: "/Home-Images/Innovation.webp", img_title: "Innovation Image", _display: "flex" },
        { _img: "/Home-Images/collabration.webp", img_title: "Collabration Image", _display: "hidden" },
        { _img: "/Home-Images/adaptibility.webp", img_title: "Adaptibility", _display: "hidden" },
      ]);
      setCounterVal({ counterVal1: 0, counterVal2: 0 });
      setStartCount(true);
    } else if (param === "COLLABORATION") {
      setStartCount(false);
      setHandleClickData({
        integrityBgColor: "bg-white",
        integrityTextColor: "text-black",
        objectiveBgColor: "bg-color_orange",
        objectiveTextColor: "text-white",
        excellenceBgColor: "bg-white",
        excellenceTextColor: "text-black",
      });
      setBottomData([
        { _img: "/Home-Images/Innovation.webp", img_title: "Innovation Image", _display: "hidden" },
        { _img: "/Home-Images/collabration.webp", img_title: "Collabration Image", _display: "flex" },
        { _img: "/Home-Images/adaptibility.webp", img_title: "Adaptibility", _display: "hidden" },
      ]);
      setCounterVal({ counterVal1: 1, counterVal2: 1 });
      setStartCount(true);
    } else if (param === "ADAPTABILITY") {
      setStartCount(false);
      setHandleClickData({
        integrityTextColor: "text-black",
        integrityBgColor: "bg-white",
        objectiveBgColor: "bg-white",
        objectiveTextColor: "text-black",
        excellenceBgColor: "bg-color_orange",
        excellenceTextColor: "text-white",
      });
      setBottomData([
        { _img: "/Home-Images/Innovation.webp", img_title: "Innovation Image", _display: "hidden" },
        { _img: "/Home-Images/collabration.webp", img_title: "Collabration Image", _display: "hidden" },
        { _img: "/Home-Images/adaptibility.webp", img_title: "Adaptibility", _display: "flex" },
      ]);
      setCounterVal({ counterVal1: 2, counterVal2: 2 });
      setStartCount(true);
    } else {
      return;
    }
  }

  return (
    <motion.div
      initial={{ y: "18%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0 }}
      viewport={{ once: true }}
      className="why-choose-1-content-container w-full flex justify-center items-center bg-white py-7 pl-7 relative rounded-tl-3xl 1004px:py-4 1004px:pl-4 662px:rounded-tr-3xl 662px:pr-4"
    >
      <div className="div-for-full-width-bg-white-of-why-choose-1-content-container absolute bg-white w-screen h-full left-full 662px:hidden"></div>
      <div className="why-choose-1-content flex flex-col items-center justify-center w-full">
        <div className="top-div-of-why-choose-1-content flex items-end justify-between w-full border-b-2 border-color_orange 792px:border-b">
          <span
            className={`${
              handleClickData.integrityBgColor + " " + handleClickData.integrityTextColor
            } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
            onClick={() => changeContentOnClick("INNOVATION")}
          >
            INNOVATION
          </span>
          <span
            className={`${
              handleClickData.objectiveBgColor + " " + handleClickData.objectiveTextColor
            } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
            onClick={() => changeContentOnClick("COLLABORATION")}
          >
            COLLABORATION
          </span>
          <span
            className={`${
              handleClickData.excellenceBgColor + " " + handleClickData.excellenceTextColor
            } cursor-pointer text-p1 font-p1 public_sans_body w-1/3 text-center py-2 1004px:text-p2 792px:text-p3`}
            onClick={() => changeContentOnClick("ADAPTABILITY")}
          >
            ADAPTABILITY
          </span>
        </div>

        {bottomData &&
          bottomData.map((data, ind) => {
            return (
              <div
                key={ind}
                className={`bottom-div-of-why-choose-1-content w-full ${data._display} flex-col items-start justify-center gap-7 mt-4`}
              >
                <div className="content-div-of-bottom-div-of-why-choose-1-content w-full flex items-center justify-start 802px:items-start 792px:items-center">
                  <Image
                    width={250}
                    height={100}
                    priority={true}
                    alt={data.img_title}
                    title={data.img_title}
                    className="w-1/2 802px:w-48% 802px:h-32 792px:h-28"
                    src={data._img}
                  />
                  <ul className="w-1/2 flex items-start justify-center flex-col pl-7 gap-4 font-p1 text-p1 public_sans_body text-color_gray 1004px:text-p2 802px:w-[52%] 802px:pl-2 792px:text-p3">
                    <li className="flex items-center justify-start gap-2">
                      <span className="text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l1}</span>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <span className="text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l2}</span>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <span className="text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l3}</span>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <span className="text-h5 font-h5 text-color_orange 1004px:text-p1 792px:text-p2">
                        <FaRegHandPointRight />
                      </span>
                      <span>{bottomDataContent[ind].l4}</span>
                    </li>
                  </ul>
                </div>

                <div className="line-graph-div-of-bottom-div-of-why-choose-1-content w-full flex flex-col items-start justify-center gap-7">
                  <span className="w-[95%] text-h5 font-h5 bricolage_grotesque_head pb-4 relative 1004px:text-p1 1004px:pb-2 792px:text-p2 792px:pb-1">
                    {bottomDataContent[ind].percName1}{" "}
                    {startCount && (
                      <CountUp
                        start={counterVal.counterVal1}
                        end={bottomDataContent[ind].percVal1}
                        duration={2}
                        suffix="%"
                        separator=""
                      />
                    )}
                  </span>
                  <span className="w-[85%] text-h5 font-h5 bricolage_grotesque_head pb-4 relative 1004px:text-p1 1004px:pb-2 792px:text-p2 792px:pb-1">
                    {bottomDataContent[ind].percName2}{" "}
                    {startCount && (
                      <CountUp
                        start={counterVal.counterVal2}
                        end={bottomDataContent[ind].percVal2}
                        duration={2}
                        suffix="%"
                        separator=""
                      />
                    )}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}

export default WhyChoose1Content;