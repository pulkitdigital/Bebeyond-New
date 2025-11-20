import React from "react";
import "./style.css";
import Image from "next/image";
import { motion } from "framer-motion";
function AboutFounder() {
  return (
    <main className=" w-full flex items-center justify-center relative overflow-hidden">
      <div className="about-founder-container max-w-1600px w-full flex items-center justify-center relative">
        <div
          className={`about-founder w-88% flex items-center justify-start flex-col  gap-16 792px:gap-12 relative pt-16 792px:pt-12 690px:gap-6 690px:py-12`}
        >
          <div className="top-div-of-about-founder flex flex-col items-center justify-center gap-4 w-full">
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              viewport={{ once: true }}
              className="h2-div-for-about-founder text-center"
            >
              <span className="span-for-h2-div-for-about-founder"></span>
              <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
                About Founder
              </h2>
            </motion.div>
            <motion.h3
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              viewport={{ once: true }}
              className=" bricolage_grotesque_head text-center text-h2 font-h2 leading-h2 1004px:text-h3 1004px:leading-h3 792px:text-h4"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </motion.h3>
          </div>
          <div className="second-div-of-top-div-of-about-founder flex items-start justify-center w-full min-h-[400px] relative mb-16 1300px:min-h-[440px] 1200px:min-h-[480px] 1100px:min-h-[560px] 1004px:min-h-[480px] 900px:min-h-[560px] 792px:min-h-[520px] 690px:min-h-0 690px:mb-0">
            <motion.div
              initial={{ x: "-18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              viewport={{ once: true }}
              className="left-div-of-second-div-of-top-div-of-about-founder w-[400px] h-[400px] flex items-center justify-center absolute left-0 1300px:w-[360px] 1300px:h-[360px] 1100px:top-16 1004px:top-20 900px:top-24 792px:w-[320px] 792px:h-[320px] 792px:top-40 690px:hidden"
            >
              <div className="bg-orange-div-of-left-div-of-second-div-of-top-div-of-about-founder bg-[rgba(33,157,188,0.40)] h-full w-full rounded-50% absolute "></div>
            </motion.div>
            <motion.div
              initial={{ x: "-18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              viewport={{ once: true }}
              className="img-div-of-second-div-of-top-div-of-about-founder absolute -bottom-16 left-7  flex items-center justify-center h-[120%] 1300px:left-0 1200px:h-full 1100px:h-[80%] 1004px:h-full 900px:h-[80%] 792px:h-[70%] 690px:hidden"
            >
              <Image
                width={500}
                height={1000}
                priority={true}
                src="/pulkit-sir-img1.png"
                className=" h-full w-full"
                alt="img"
                title="Founder Image"
              />
            </motion.div>
            <motion.div
              initial={{ x: "18%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0,
              }}
              viewport={{ once: true }}
              className="right-div-of-second-div-of-top-div-of-about-founder  flex items-center h-full w-[62%] justify-start flex-col gap-8 500px:gap-4 absolute right-0 1400px:w-[58%] 1200px:w-[54%] 1004px:w-[50%] 900px:w-[46%] 690px:w-full 690px:static"
            >
              <h4
                className={` underline underline-offset-2 w-full text-h4 font-h4 leading-h3 bricolage_grotesque_head text-center 1004px:text-h5 1004px:leading-h5 792px:text-p1 text-color_orange`}
              >
                Lorem ipsum dolor sit.
              </h4>
              <p className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perspiciatis quia. Dolores perferendis, vero enim minus cum quas accusamus dolorem. Molestiae nam dolorem eius neque porro voluptatem fugit harum suscipit. Quas est dolorem facilis fuga, magnam quisquam sapiente atque molestiae earum exercitationem eum suscipit quidem voluptatibus minus nam sed nesciunt voluptas natus labore deleniti, neque odio error. Non, fugiat sunt! Corporis accusantium vitae aut quidem vero perferendis voluptate praesentium nemo laboriosam, repellendus corrupti eaque ratione maiores, ipsa atque aliquam dolorum tempore, non iste eos repudiandae quia amet. Maxime perspiciatis expedita dolor? Distinctio sint ab earum libero blanditiis culpa, voluptate illum ratione. Sequi, repellat officiis. Et expedita repudiandae officiis ex totam ea ad deleniti saepe, iure reiciendis neque aut facere beatae repellendus perspiciatis itaque nobis! Neque quo dolorum architecto necessitatibus. Eligendi incidunt amet delectus fuga similique omnis aut, doloribus obcaecati id at facilis autem quod nesciunt assumenda deleniti corrupti quaerat repellat ut exercitationem placeat esse sed dolorum. Sapiente dolorum officiis impedit.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutFounder;
