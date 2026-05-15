// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import OurServices2Cards from "./our_services2_cards";
// import "./style.css";
// function OurServices2() {
//   return (
//     <main
//       id="all-services"
//       className=" w-full flex items-center justify-center bg-color_creame relative overflow-hidden"
//     >
//       <div className="our-services-2-container max-w-1600px w-full flex items-center justify-center relative">
//         <div className="our-services-2 w-88% flex items-center justify-center flex-col gap-7 pt-16 pb-32 792px:pb-24">
//           <motion.div
//             initial={{ opacity: 0, y: "50%" }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//             }}
//             viewport={{ once: true }}
//             className="h2-div-for-our-services-2 text-center"
//           >
//             <span className="span-for-h2-div-for-our-services-2"></span>
//             <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
//               Our Services
//             </h2>
//           </motion.div>
//           <motion.h3
//             initial={{ opacity: 0, y: "50%" }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.5,
//             }}
//             viewport={{ once: true }}
//             className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 792px:text-h4"
//           >
//             Fueling Digital Success with
//             <br />
//             Comprehensive Services
//             {/* Start Your Digital Business
//             <br />
//             With Be Beyond! */}
//           </motion.h3>
//           <OurServices2Cards />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default OurServices2;






"use client";
import React from "react";
import { motion } from "framer-motion";
import OurServices2Cards from "./our_services2_cards";
import "./style.css";

function OurServices2() {
  return (
    <main
      id="all-services"
      className="w-full flex items-center justify-center bg-color_creame relative overflow-hidden"
    >
      <div className="our-services-2-container max-w-1600px w-full flex items-center justify-center relative">
        <div className="our-services-2 w-88% flex items-center justify-center flex-col gap-7 pt-16 pb-32 792px:pb-24">
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h2-div-for-our-services-2 text-center"
          >
            <span className="span-for-h2-div-for-our-services-2"></span>
            <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Our Services
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: "50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 792px:text-h4"
          >
            Fueling Digital Success with
            <br />
            Comprehensive Services
          </motion.h3>

          <OurServices2Cards />
        </div>
      </div>
    </main>
  );
}

export default OurServices2;