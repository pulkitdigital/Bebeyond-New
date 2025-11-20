import React from "react";
import "./style.css";
import OurTeamMember1Swiper from "./our_team_member1_swiper";
import { motion } from "framer-motion";
function OurTeamMember1({_pb1,_mWpb1}) {
  return (
    <main className=" w-full flex items-center justify-center relative">
      <div className="our-team-member-1-container max-w-1600px w-full flex items-center justify-center relative">
        <div className={`our-team-member-1 w-88% flex items-center justify-center ${_pb1} flex-col pt-16 gap-4 ${_mWpb1}`}>
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: .5,
            }}
            viewport={{ once: true }}
          className="h2-div-for-our-team-member-1 text-center">
            <span className="span-for-h2-div-for-our-team-member-1"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Our Team Members
            </h2>
          </motion.div>
          <motion.h3 
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: .5,
            }}
            viewport={{ once: true }}
          className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 792px:text-h4">
            Meet the minds behind
            <br />
            our digital magic
            {/* Meet Our Experienced
            <br />
            Professionals! */}
          </motion.h3>
          <OurTeamMember1Swiper />
        </div>
      </div>
    </main>
  );
}

export default OurTeamMember1;
