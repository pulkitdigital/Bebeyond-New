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
              The Story Behind BeBeyond Digital Solutions
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
                src="/team/pulkit-sir.webp"
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
              className="right-div-of-second-div-of-top-div-of-about-founder  flex items-center h-full w-[62%] justify-start flex-col gap-5 500px:gap-4 absolute right-0 1400px:w-[62%] 1200px:w-[60%] 1004px:w-[54%] 900px:w-[45%] 690px:w-full 690px:static"
            >
              <h4
                className={` underline underline-offset-2 w-full text-h4 font-h4 leading-h3 bricolage_grotesque_head text-center 1004px:text-h5 1004px:leading-h5 792px:text-p1 text-color_orange`}
              >
                <p>Pulkit Singhal</p>
                <p>Founder, BeBeyond Digital Solutions</p>
              </h4>
              <p className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 ">
                <p>
                  My journey in digital marketing began at a leading ed-tech
                  company, where I gained hands-on experience in strategies that
                  drive real business growth. This foundation helped me
                  understand not just the theory of marketing, but the practical
                  execution behind campaigns that truly deliver results. Over
                  time, I expanded into creative storytelling through motion
                  graphics, visual content, and customer-focused communication
                  that builds genuine connections.
                </p>
                <p>
                  As my experience grew, I developed expertise in managing
                  Shopify stores end-to-end, ensuring smooth customer journeys
                  from browsing to checkout. Alongside e-commerce, I worked
                  extensively on email, SMS, and WhatsApp campaigns, learning
                  how the right message at the right time can turn attention
                  into trust and conversions. This blend of creativity,
                  strategy, and execution became the core of my approach to
                  digital marketing.
                </p>
                <p>
                  In 2024, I founded BeBeyond Digital Solutions with a simple
                  vision — to help brands grow through creative, reliable, and
                  meaningful marketing. At BeBeyond, we work as an extension of
                  your team, understanding your story, your goals, and the
                  emotions behind your brand, then transforming them into
                  communication that truly connects with your audience and
                  drives measurable impact.
                </p>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutFounder;
