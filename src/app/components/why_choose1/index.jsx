// import React from "react";
// import "./style.css";
// import WhyChoose1Counter from "./why_choose1_counter";
// import WhyChoose1Content from "./why_choose1_content";
// import Image from "next/image";
// import WhyChoose1BrandSlider from "./why_choose1_brand_swiper";
// import { motion } from "framer-motion";

// function WhyChoose1({ _p, _d, _mW_p, _mW_p2, _mW_p3, _mW_p4 }) {
//   return (
//     <main className=" w-full flex items-center justify-center relative overflow-hidden bg-color_navy">
//       <div className="why-choose-1-container max-w-1600px w-full flex items-center justify-center relative">
//         <Image
//           width={500}
//           height={100}
//           priority={true}
//           title="Light Map Background Pattern"
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
//           className=" absolute w-1/2 top-0 left-0"
//           alt="Map Pattern Light Image"
//         />
//         <Image
//           width={500}
//           height={100}
//           priority={true}
//           title="Light Map Background Pattern"
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
//           className=" absolute w-1/2 top-0 right-0"
//           alt="Map Pattern Light Image"
//         />
//         <Image
//           width={500}
//           height={100}
//           priority={true}
//           title="Light Map Background Pattern"
//           src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png"
//           className=" absolute w-1/2 bottom-0 left-0"
//           alt="Map Pattern Light Image"
//         />

//         <div className="why-choose-1 w-88% flex items-center justify-start flex-col pt-16">
//           <div className="top-div-of-why-choose-1 w-full flex items-center justify-center flex-col gap-7">
//             <motion.div
//               initial={{ opacity: 0, y: "50%" }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//               }}
//               viewport={{ once: true }}
//               className="h2-div-for-why-choose-1 text-center"
//             >
//               <span className="span-for-h2-div-for-why-choose-1"></span>
//               <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
//                 Why Choose Us!
//               </h2>
//             </motion.div>
//             <motion.h3
//               initial={{ y: "50%", opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{
//                 duration: 0.5,
//               }}
//               viewport={{ once: true }}
//               className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 text-white 1004px:text-h3 792px:text-h4 792px:leading-h3"
//             >
//               We Are A Digital Agency With{" "}
//               <br className=" block 444px:hidden" />
//               Added Value For Your Business!
//             </motion.h3>
//           </div>
//           <div className="bottom-div-of-why-choose-1 w-full flex items-center justify-center relative h-[400px] mt-28 1004px:mt-0 662px:flex-col 662px:h-auto">
//             <div className="left-div-of-bottom-div-of-why-choose-1 w-48% flex items-center justify-center absolute left-0 bottom-0 662px:static 662px:w-full 662px:my-6">
//               <WhyChoose1Counter />
//             </div>
//             <div className="right-div-of-bottom-div-of-why-choose-1 w-48% flex items-center justify-center absolute right-0 bottom-0 662px:w-full 662px:static">
//               <WhyChoose1Content />
//             </div>
//           </div>
//           <WhyChoose1BrandSlider
//             _p={_p}
//             _d={_d}
//             _mW_p={_mW_p}
//             _mW_p2={_mW_p2}
//             _mW_p3={_mW_p3}
//             _mW_p4={_mW_p4}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default WhyChoose1;
















import React from "react";
import "./style.css";
import WhyChoose1Counter from "./why_choose1_counter";
import WhyChoose1Content from "./why_choose1_content";
import Image from "next/image";
import WhyChoose1BrandSlider from "./why_choose1_brand_swiper";
import { motion } from "framer-motion";

function WhyChoose1({ _p, _d, _mW_p, _mW_p2, _mW_p3, _mW_p4 }) {
  return (
    <main className="w-full flex items-center justify-center relative overflow-hidden bg-color_navy">
      <div className="why-choose-1-container max-w-1600px w-full flex items-center justify-center relative">
        <Image width={500} height={100} priority={true} title="Light Map Background Pattern" src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png" className="absolute w-1/2 top-0 left-0" alt="Map Pattern Light Image" />
        <Image width={500} height={100} priority={true} title="Light Map Background Pattern" src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png" className="absolute w-1/2 top-0 right-0" alt="Map Pattern Light Image" />
        <Image width={500} height={100} priority={true} title="Light Map Background Pattern" src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern-light.png" className="absolute w-1/2 bottom-0 left-0" alt="Map Pattern Light Image" />


        <div className="why-choose-1 w-88% flex flex-col items-center justify-start pt-16 gap-12 relative">
          {/* ── ROW 0: Heading ── */}
          <div className="top-div-of-why-choose-1 w-full flex items-center justify-center flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h2-div-for-why-choose-1 text-center"
            >
              <span className="span-for-h2-div-for-why-choose-1"></span>
              <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                Why Choose Us!
              </h2>
            </motion.div>
            
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 text-white 1004px:text-h3 792px:text-h4 792px:leading-h3"
            >
              {/* OLD: We Are A Digital Agency With Added Value For Your Business! */}
              We&apos;re Not Just Another Agency —{" "}
              <br className="block 444px:hidden" />
              We&apos;re Your Growth Partner
            </motion.h3>
          </div>

          {/* ── ROW 1: Counters full width ── */}
          <motion.div
            initial={{ y: "30%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <WhyChoose1Counter />
          </motion.div>

          {/* ── ROW 2: Bullets LEFT + Tabs RIGHT ── */}
          <div className="w-full flex items-start justify-between gap-8 pb-0 662px:flex-col">

            {/* LEFT — Bullet Points */}
            <motion.ul
              initial={{ x: "-18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-48% flex flex-col gap-5 662px:w-full"
            >
              {[
                {
                  title: "Local Expertise",
                  desc: "We understand the Prayagraj market, its seasonality, its customers, and its competition better than any agency operating from Delhi or Mumbai.",
                },
                {
                  title: "Full-Funnel Thinking",
                  desc: "We don&apos;t just run ads or just do SEO. We build a complete digital system where every channel supports the others.",
                },
                {
                  title: "Transparent Reporting",
                  desc: "Every client gets monthly reports in plain language — no jargon, no vanity metrics, just results that matter.",
                },
                {
                  title: "Dedicated Account Manager",
                  desc: "One point of contact who knows your business and is available on WhatsApp.",
                },
                {
                  title: "Result-First Contracts",
                  desc: "We work on deliverables, not just retainers. You know exactly what you&apos;re paying for.",
                },
              ].map((item, ind) => (
                <li key={ind} className="flex items-start gap-3 text-white public_sans_body">
                  <span className="mt-[6px] min-w-[8px] h-2 w-2 rounded-full bg-color_orange shrink-0"></span>
                  <span className="text-p1 font-p1 1004px:text-p2 792px:text-p3">
                    <span className="bricolage_grotesque_head text-white">
                      {item.title}:{" "}
                    </span>
                    {item.desc}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* RIGHT — Tabs (WhyChoose1Content) */}
            <motion.div
              initial={{ x: "18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-48% 662px:w-full h-full"
            >
              <WhyChoose1Content />
            </motion.div>

          </div>

          <WhyChoose1BrandSlider
            _p={_p}
            _d={_d}
            _mW_p={_mW_p}
            _mW_p2={_mW_p2}
            _mW_p3={_mW_p3}
            _mW_p4={_mW_p4}
          />
        </div>
      </div>
    </main>
  );
}

export default WhyChoose1;


