import React from "react";
import "./style.css";
import Image from "next/image";
import ClientsTestimonials1Cards from "./clients_testimonials1_cards";
import { motion } from "framer-motion";
function ClientsTestimonials1() {
  return (
    <main className=" w-full flex items-center justify-center relative">
      <div className="clients-testimonials-1-container max-w-1600px w-full flex items-center justify-center relative">
        <Image
          width={100}
          height={100}
          priority={true}
          title="Dark Map Background Pattern"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-1/2 left-0 top-0"
          alt="Map Pattern Image"
        />
        <Image
          width={100}
          height={100}
          priority={true}
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          title="Dark Map Background Pattern"
          className=" absolute w-1/2 right-0 top-0"
          alt="Map Pattern Image"
        />
        <Image
          width={100}
          height={100}
          priority={true}
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          title="Dark Map Background Pattern"
          className=" absolute w-1/2 bottom-0 left-0"
          alt="Map Pattern Image"
        />
        <Image
          width={100}
          height={100}
          priority={true}
          title="Dark Map Background Pattern"
          src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
          className=" absolute w-1/2 bottom-0 right-0"
          alt="Map Pattern Image"
        />

        <div className="clients-testimonials-1 w-88% flex items-center justify-start flex-col py-16 gap-7">
          <div className="top-div-of-clients-testimonials-1 w-full flex items-center justify-center flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: "50%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="h2-div-for-clients-testimonials-1 text-center"
            >
              <span className="span-for-h2-div-for-clients-testimonials-1"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                Clients Testimonial
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head text-h2 font-h2 text-center leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4"
            >
              What Our Customers Tell About <br className=" 400px:hidden" />
              Our Service!{" "}
            </motion.h3>
          </div>
          <div className="bottom-div-of-clients-testimonials-1 w-full flex items-center justify-between 400px:relative ">
            <Image
              width={100}
              height={100}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-3/4 left-0 -top-[25%] hidden 400px:block"
              alt="Map Pattern Image"
            />
            <Image
              width={100}
              height={100}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-3/4 right-0 -top-[25%] hidden 400px:block"
              alt="Map Pattern Image"
            />
            <Image
              width={100}
              height={100}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-3/4 hidden 400px:block"
              alt="Map Pattern Image"
            />
            <Image
              width={100}
              height={100}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-3/4 -bottom-[25%] left-0 hidden 400px:block"
              alt="Map Pattern Image"
            />
            <Image
              width={100}
              height={100}
              priority={true}
              title="Dark Map Background Pattern"
              src="/BeB-Pattern Set/BeB-Pattern Set/Pattern/map-pattern.png"
              className=" absolute w-3/4 -bottom-[25%] right-0 hidden 400px:block"
              alt="Map Pattern Image"
            />
            <motion.div
              initial={{ x: "-18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="left-div-of-bottom-div-of-clients-testimonials-1 flex items-center justify-center relative w-1/4 h-500px 792px:w-[27%] 792px:h-[400px] 400px:hidden"
            >
              <Image
                width={100}
                height={100}
                priority={true}
                alt="Img"
                title="Client Testimonial Image 1"
                src="/testimonial_img_1.jpg"
                className=" h-71% w-48%  absolute left-0 rounded-top-left-50"
              />
              <Image
                width={100}
                height={100}
                priority={true}
                title="Client Testimonial Image 2"
                alt="Img"
                src="/testimonial_img_2.jpg"
                className=" h-25% w-48% absolute right-0 top-0 rounded-top-right-50"
              />
              <Image
                width={100}
                height={100}
                priority={true}
                alt="Img"
                title="Client Testimonial Image 3"
                src="/testimonial_img_3.jpg"
                className=" h-71% w-48% absolute right-0 bottom-0"
              />
            </motion.div>
            <ClientsTestimonials1Cards />
            <motion.div
              initial={{ x: "18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="right-div-of-bottom-div-of-clients-testimonials-1 flex items-center justify-center relative w-1/4 h-500px 792px:w-[27%] 792px:h-[400px] 400px:hidden"
            >
              <Image
                width={100}
                height={100}
                priority={true}
                alt="Img"
                title="Client Testimonial Image 1"
                src="/testimonial_img_1.jpg"
                className=" h-71% w-48%  absolute left-0 top-0"
              />
              <Image
                width={100}
                height={100}
                priority={true}
                alt="Img"
                title="Client Testimonial Image 2"
                src="/testimonial_img_2.jpg"
                className=" h-25%  w-48% absolute left-0 bottom-0 rounded-bottom-left-50"
              />
              <Image
                width={100}
                height={100}
                priority={true}
                alt="Img"
                title="Client Testimonial Image 3"
                src="/testimonial_img_3.jpg"
                className=" h-71% w-48% absolute right-0 rounded-top-right-50"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ClientsTestimonials1;
