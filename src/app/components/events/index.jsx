import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import EventSwiper from "./events_slider";
function Events() {
  return (
    <main className=" w-full flex items-center justify-center relative bg-color_creame">
      <div className="events-container max-w-1600px w-full flex items-center justify-center relative">
        <div
          className={`events w-88% flex items-center justify-center flex-col py-16 gap-4 `}
        >
          <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="h2-div-for-events text-center"
          >
            <span className="span-for-h2-div-for-events"></span>
            <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Events
            </h2>
          </motion.div>
          <motion.h3
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 792px:text-h4"
          >
            Festive Moments
            {/* Our Memories, Events
            <br />
            And Parties. */}
          </motion.h3>
          <EventSwiper />
        </div>
      </div>
    </main>
  );
}

export default Events;
