"use client";
import React from "react";
import "./style.css";
import { GrMapLocation, GrMailOption, GrPhone } from "react-icons/gr";
import ContactUs2Form from "./contact_us2_form";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function ContactUs2() {
  return (
    <main className=" w-full items-center justify-center flex">
      <div className="contact-us-2-container max-w-1600px w-full items-center justify-center flex relative">
        <Image
          width={300}
          height={150}
          priority={true}
          alt="map img"
          title="Map Pattern Image"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-2/5 left-0 top-0"
        />
        <Image
          width={300}
          height={150}
          priority={true}
          title="Map Pattern Image"
          alt="map img"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-2/5 left-0 bottom-0"
        />
        <Image
          width={300}
          height={150}
          priority={true}
          title="Map Pattern Image"
          alt="map img"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-2/5"
        />
        <Image
          width={300}
          height={150}
          priority={true}
          title="Map Pattern Image"
          alt="map img"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-2/5 right-0 top-0"
        />
        <Image
          width={300}
          height={150}
          priority={true}
          title="Map Pattern Image"
          alt="map img"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-2/5 right-0 bottom-0"
        />
        <div className="contact-us-2 w-88% flex items-start justify-between py-16 z-10 596px:items-start 466px:flex-col-reverse 466px:items-center 466px:justify-start 466px:gap-16 ">
          <div className="get-in-touch-div-of-contact-us-2 w-48% flex items-start justify-center flex-col gap-4 466px:w-full">
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="h2-div-for-get-in-touch-div-of-contact-us-2 text-center"
            >
              <span className="span-for-h2-div-for-get-in-touch-div-of-contact-us-2"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                Get In Touch
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 relative 1004px:text-h3 1004px:leading-h3 828px:text-start 792px:text-h4"
            >
              Have Any Questions?
            </motion.h3>
            <motion.p
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" text-p1 font-p1 text-color_gray  public_sans_body 1004px:text-p2 792px:text-p3"
            >
              Get in touch to discuss your employee wellbeing needs today.
              Please give us a call, drop us an email or fill out the contact
              form.
            </motion.p>
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="location-div-of-get-in-touch-div-of-contact-us-2  flex items-center justify-start w-full  gap-4 1004px:gap-2"
            >
              <div className="left-div-of-location-div-of-get-in-touch-div-of-contact-us-2 bg-color_linear_for_h2 flex items-center justify-center h-16 w-16 text-white text-h4 1004px:h-14 1004px:w-14 792px:h-12 792px:w-12 792px:text-h5new">
                <GrMapLocation />
              </div>
              <div className="right-div-of-location-div-of-get-in-touch-div-of-contact-us-2 public_sans_body font-p1 text-p1 text-color_gray flex items-start justify-center flex-col 1004px:text-p2 792px:text-p3">
                <Link
                  href="https://maps.app.goo.gl/Ho1RHwKr1gCLWqFx7"
                  title="Google Map Link"
                  target="blank"
                  className=" hover:underline"
                >Chamber 6, 4th Floor, Sangam Place <br />(Opposite K K Sales), Civil Lines, <br />Prayagraj, Uttar Pradesh - 211001</Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="email-div-of-get-in-touch-div-of-contact-us-2  flex items-center justify-start w-full  gap-4 1004px:gap-2"
            >
              <div className="left-div-of-email-div-of-get-in-touch-div-of-contact-us-2 bg-color_linear_for_h2 flex items-center justify-center h-16 w-16 text-white text-h4 1004px:h-14 1004px:w-14 792px:h-12 792px:w-12 792px:text-h5new">
                <GrMailOption />
              </div>
              <div className="right-div-of-email-div-of-get-in-touch-div-of-contact-us-2 public_sans_body font-p1 text-p1 text-color_gray flex items-start justify-center flex-col 1004px:text-p2 792px:text-p3">
                <Link
                  href="mailto:info@bebeyond.digital"
                  title="Email Link"
                  className=" hover:underline"
                >
                  info@bebeyond.digital
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="number-div-of-get-in-touch-div-of-contact-us-2  flex items-center justify-start w-full  gap-4 1004px:gap-2"
            >
              <div className="left-div-of-number-div-of-get-in-touch-div-of-contact-us-2 bg-color_linear_for_h2 flex items-center justify-center h-16 w-16 text-white text-h4 1004px:h-14 1004px:w-14 792px:h-12 792px:w-12 792px:text-h5new">
                <GrPhone />
              </div>
              <div className="right-div-of-number-div-of-get-in-touch-div-of-contact-us-2 public_sans_body font-p1 text-p1 text-color_gray flex items-start justify-center flex-col 1004px:text-p2 792px:text-p3">
                <Link href="tel:+919918671867" title="Mobile Number" className=" hover:underline">
                  +91 99 1867 1867
                </Link>
                <Link href="tel:+919026861110" title="Mobile Number" className=" hover:underline">
                  +91 90 2686 1110
                </Link>
              </div>
            </motion.div>
          </div>
          <ContactUs2Form />
        </div>
      </div>
    </main>
  );
}

export default ContactUs2;
