"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We respond to all enquiries within 4 business hours. For urgent queries, WhatsApp us directly at +91 99186 71867 for a faster response.",
  },
  {
    q: "Is the free audit really free?",
    a: "Yes — completely. In our 30-minute call we review your website, social media presence, and local SEO, and share specific recommendations. There&apos;s no obligation to work with us afterwards.",
  },
  {
    q: "Do I need to visit your office to work with you?",
    a: "Not at all. Most of our clients communicate entirely via WhatsApp, email, and video calls. We onboard and manage clients remotely across India — though you&apos;re always welcome to visit us in Civil Lines if you prefer in-person meetings.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`faq-item w-full rounded-2xl border transition-all duration-300 cursor-pointer ${
        isOpen
          ? "border-color_orange bg-[rgba(255,255,255,0.05)]"
          : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.18)]"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-4 px-7 py-5">
        <h3
          className={`bricolage_grotesque_head text-p1 font-semibold leading-snug transition-colors duration-300 ${
            isOpen ? "text-color_orange" : "text-white"
          }`}
        >
          {faq.q}
        </h3>

        {/* Plus / Minus icon */}
        <div
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-color_orange border-color_orange"
              : "border-[rgba(255,255,255,0.2)] bg-transparent"
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-white flex items-center justify-center"
          >
            {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
          </motion.span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="public_sans_body text-[rgba(255,255,255,0.7)] text-p2 leading-relaxed px-7 pb-6">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQContact() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full flex items-center justify-center relative overflow-hidden bg-color_navy py-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-color_orange opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="w-88% max-w-[860px] flex flex-col items-center gap-12 relative">

        {/* ── Heading ── */}
        <div className="faq-heading w-full flex flex-col items-center gap-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h2-div-for-why-choose-1 text-center"
          >
            <span className="span-for-h2-div-for-why-choose-1"></span>
            <h2 className="bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
              Contact FAQ
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bricolage_grotesque_head text-h2 font-h2 leading-h2 text-white 1004px:text-h3 792px:text-h4 792px:leading-h3"
          >
            Before You{" "}
            <span className="text-transparent bg-clip-text bg-color_linear_for_h2">
              Reach Out
            </span>
          </motion.h3>
        </div>

        {/* ── FAQ Items ── */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p className="public_sans_body text-[rgba(255,255,255,0.55)] text-p2">
            Still have questions? We&apos;re happy to help.
          </p>
          <a
            href="https://wa.me/919918671867?text=Hi%2C%20I%20have%20a%20question%20for%20BeBeyond%20Digital%20Solutions."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white
              relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-color_orange
              before:transition-transform before:duration-700
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-75
              active:transition-all
              active:duration-700"
            >
              WhatsApp Us Directly
            </button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQContact;