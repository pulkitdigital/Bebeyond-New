import React from "react";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Digital Marketing Services in Prayagraj | BeBeyond",
  description:
    "Explore BeBeyond's digital marketing services in Prayagraj — SEO, paid ads, social media management, branding & web development.",
};

const services = [
  {
    slug: "seo",
    title: "SEO Services",
    description:
      "Technical SEO, on-page optimization, local SEO, and content strategy to grow qualified organic leads.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Instagram, Facebook, and LinkedIn growth campaigns with content planning, creatives, and reporting.",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description:
      "Performance-focused Facebook and Instagram ads with audience targeting, creative testing, and ROAS tracking.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Fast, conversion-focused websites and landing pages built for local businesses and service brands.",
  },
  {
    slug: "branding",
    title: "Branding",
    description:
      "Brand identity, visual systems, and positioning to create a consistent and memorable business presence.",
  },
];

const Services = () => {
  return <ServicesClient services={services} />;
};

export default Services;
