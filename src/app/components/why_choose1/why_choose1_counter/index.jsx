// "use client";
// import React, { useState } from "react";
// import CountUp from "react-countup";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import "./style.css";
// function WhyChoose1Counter() {
//   const [counterCon, setCounterCon] = useState(false);
//   function handleCounter() {
//     setCounterCon(true);
//   }
//   const [counterData] = useState([
//     {
//       _icon: "/BeB_Icon Set/BeB_Icon Set/Values/Impact.svg",
//       img_title: "Impact Icon",
//       _num: 100,
//       _span: `Project Done`,
//     },
//     {
//       _icon: "/BeB_Icon Set/BeB_Icon Set/Values/Innovation.svg",
//       img_title: "Innovation Icon",
//       _num: 20,
//       _span: "Expert Teams",
//     },
//     {
//       _icon: "/BeB_Icon Set/BeB_Icon Set/Set/Cutomer Review.svg",
//       img_title: "Customer Review Icon",
//       _num: 100,
//       _span: "Satisfied Clients",
//     },
//     {
//       _icon: "/BeB_Icon Set/BeB_Icon Set/Values/Integrity.svg",
//       img_title: "Integrity Icon",
//       _num: 20,
//       _span: "Achievement",
//     },
//   ]);
//   return (
//     <div className="why-choose-1-counter-container w-full flex items-center justify-center ">
//       <div className="why-choose-1-counter w-full flex flex-row items-center justify-start flex-wrap 662px:justify-center">
//         {counterData &&
//           counterData.map((data, ind) => {
//             return (
//               <motion.div
//                 initial={{ y: "18%", opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{
//                   duration: 0.5,
//                 }}
//                 viewport={{ once: true }}
//                 className={`counter-div-of-why-choose-1-counter${
//                   ind + 1
//                 } w-1/2 h-52 flex items-center justify-start gap-4 1004px:h-44 662px:justify-center 662px:h-auto 662px:py-4 662px:flex-col 662px:gap-1`}
//                 key={ind}
//               >
//                 <div className="icon-div-of-counter-div-of-why-choose-1-counter flex justify-start items-center w-1/4 h-16 1004px:w-1/5 1004px:h-12 662px:justify-center">
//                   <Image
//                     width={100}
//                     height={100}
//                     priority={true}
//                     src={data._icon}
//                     title={data.img_title}
//                     className=" w-full h-full"
//                     alt="icon"
//                   />
//                 </div>
//                 <motion.div
//                   whileInView={handleCounter}
//                   className="counter-of-counter-div-of-why-choose-1-counter bricolage_grotesque_head
//                 flex flex-col items-start justify-center w-2/3 text-white 662px:w-full 662px:items-center"
//                 >
//                   {counterCon ? (
//                     <CountUp
//                       start={0}
//                       end={data._num}
//                       duration={2}
//                       suffix="+"
//                       separator=""
//                       className=" text-h2 font-h2 leading-none 1004px:text-h3 792px:text-h4"
//                     />
//                   ) : (
//                     <span className=" text-h2 font-h2 1004px:text-h3 leading-none 792px:text-h4">
//                       0+
//                     </span>
//                   )}
//                   <span className="text-h5 font-h5 1004px:text-p1 906px:text-p2 792px:text-p3">
//                     {data._span}
//                   </span>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default WhyChoose1Counter;






















"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import "./style.css";

function WhyChoose1Counter() {
  const [counterCon, setCounterCon] = useState(false);

  function handleCounter() {
    setCounterCon(true);
  }

  const [counterData] = useState([
    {
      _icon: "/BeB_Icon Set/BeB_Icon Set/Values/Impact.svg",
      img_title: "Impact Icon",
      _num: 100,
      _span: "Project Done",
    },
    {
      _icon: "/BeB_Icon Set/BeB_Icon Set/Values/Innovation.svg",
      img_title: "Innovation Icon",
      _num: 20,
      _span: "Expert Teams",
    },
    {
      _icon: "/BeB_Icon Set/BeB_Icon Set/Set/Cutomer Review.svg",
      img_title: "Customer Review Icon",
      _num: 100,
      _span: "Satisfied Clients",
    },
    {
      _icon: "/BeB_Icon Set/BeB_Icon Set/Values/Integrity.svg",
      img_title: "Integrity Icon",
      _num: 20,
      _span: "Achievement",
    },
  ]);

  return (
    <div className="w-full grid grid-cols-4 gap-4 662px:grid-cols-2">
      {counterData.map((data, ind) => (
        <motion.div
          key={ind}
          initial={{ y: "18%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: ind * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start gap-3 bg-white/5 rounded-[12px] px-4 py-5 662px:justify-center"
        >
          <div className="flex justify-center items-center w-12 h-12 shrink-0 1004px:w-10 1004px:h-10">
            <Image
              width={100}
              height={100}
              priority={true}
              src={data._icon}
              title={data.img_title}
              className="w-full h-full"
              alt={data.img_title}
            />
          </div>
          <motion.div
            whileInView={handleCounter}
            className="bricolage_grotesque_head flex flex-col items-start justify-center text-white"
          >
            {counterCon ? (
              <CountUp
                start={0}
                end={data._num}
                duration={2}
                suffix="+"
                separator=""
                className="text-h2 font-h2 leading-none 1004px:text-h3 792px:text-h4"
              />
            ) : (
              <span className="text-h2 font-h2 leading-none 1004px:text-h3 792px:text-h4">
                0+
              </span>
            )}
            <span className="text-p1 font-p1 text-white/70 1004px:text-p2 792px:text-p3">
              {data._span}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default WhyChoose1Counter;