"use client";
import React from "react";

function PricingSection({ pricing, slug }) {

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-70% flex flex-col gap-4 bg-color_navy rounded-[12px] px-6 py-5 500px:w-full 500px:px-4">
      <h4 className="text-h4 font-h4 bricolage_grotesque_head text-white relative pb-2 1004px:text-h5 792px:text-p1">
        Pricing
        <span className="w-1/3 h-1 bg-color_orange absolute bottom-0 left-0 1004px:h-[2px] 792px:h-[1.5px]"></span>
      </h4>
      <p className="text-p1 font-p1 text-white/80 public_sans_body 1004px:text-p2 792px:text-p3">
        {pricing.summary}
      </p>
      <button
        onClick={handleContactScroll}
        className="bricolage_grotesque_head font-h5 text-h5 bg-color_orange px-6 py-3 text-white
        relative z-0 flex items-center justify-center overflow-hidden self-start
        1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2 rounded-md
        before:absolute before:inset-0 before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%]
        before:bg-color_blue before:transition-transform before:duration-700
        hover:before:translate-x-[0%] hover:before:translate-y-[0%]
        active:scale-75 active:transition-all active:duration-700"
      >
        {pricing.ctaLabel}
      </button>
    </div>
  );
}

export default PricingSection;