"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaSyncAlt } from "react-icons/fa";

const proofItems = [
  { icon: <FaRocket className="text-white text-xl" />, text: "50+ Businesses Grown" },
  { icon: <FaCalendarAlt className="text-white text-xl" />, text: "5+ Years Experience" },
  { icon: <FaMapMarkerAlt className="text-white text-xl" />, text: "Prayagraj's Trusted Digital Partner" },
  { icon: <FaSyncAlt className="text-white text-xl" />, text: "360° Digital Solutions" },
];

function WhyChoose1SocialProofBar() {
  return (
    <div className="w-full overflow-hidden bg-color_navy border-t border-b border-white/10">
      <div className="relative flex">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-color_navy to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-color_navy to-transparent pointer-events-none" />

        {/* Scrolling track — duplicated for seamless loop */}
        <motion.div
          className="flex items-center gap-0 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...proofItems, ...proofItems].map((item, ind) => (
            <React.Fragment key={ind}>
              <div className="flex items-center gap-3 px-8 py-4">
                {item.icon}
                <span className="bricolage_grotesque_head text-p2 font-p2 text-white tracking-wide whitespace-nowrap">
                  {item.text}
                </span>
              </div>
              {/* Divider dot */}
              <span className="text-white/30 text-lg select-none">•</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChoose1SocialProofBar;