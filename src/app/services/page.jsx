// import React from "react";
// import ServicesClient from "./ServicesClient";

// export const metadata = {
//   title: "Digital Marketing Services in Prayagraj | BeBeyond",
//   description:
//     "Explore BeBeyond's digital marketing services in Prayagraj — SEO, paid ads, social media management, branding & web development.",
// };

// const services = [
//   {
//     slug: "seo",
//     title: "SEO Services",
//     description:
//       "Technical SEO, on-page optimization, local SEO, and content strategy to grow qualified organic leads.",
//   },
//   {
//     slug: "social-media-marketing",
//     title: "Social Media Marketing",
//     description:
//       "Instagram, Facebook, and LinkedIn growth campaigns with content planning, creatives, and reporting.",
//   },
//   {
//     slug: "meta-ads",
//     title: "Meta Ads",
//     description:
//       "Performance-focused Facebook and Instagram ads with audience targeting, creative testing, and ROAS tracking.",
//   },
//   {
//     slug: "web-development",
//     title: "Web Development",
//     description:
//       "Fast, conversion-focused websites and landing pages built for local businesses and service brands.",
//   },
//   {
//     slug: "branding",
//     title: "Branding",
//     description:
//       "Brand identity, visual systems, and positioning to create a consistent and memorable business presence.",
//   },
// ];

// const Services = () => {
//   return <ServicesClient services={services} />;
// };

// export default Services;













import React from "react";
import ServicesClient from "./ServicesClient";
import Script from "next/script";

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

const seoFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to work in Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO in Prayagraj typically shows measurable results in 2–4 months. National or competitive campaigns may take 6–12 months. SEO is a long-term investment that compounds over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is SEO worth it for small businesses in UP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Small local businesses benefit the most from local SEO because the competition is low and customers are actively searching for nearby providers. A business in Prayagraj ranking #1 on Google Maps can generate significant footfall and enquiries with zero ongoing ad spend.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee first-page rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No ethical SEO agency can guarantee specific rankings — Google's algorithm changes daily and no one controls it. What we guarantee is implementing proven best practices, complete transparency, and measurable progress every month.",
      },
    },
  ],
};

const metaAdsFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I spend on Meta Ads to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Prayagraj local businesses, a starting budget of ₹10,000–₹15,000/month in ad spend is enough to generate meaningful data and early leads. We recommend a combined management fee + ad spend budget of ₹20,000–₹30,000/month to start seeing strong, scalable results.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will I see results from Meta Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta Ads can generate leads within the first 48–72 hours of launch. However, the first 2–4 weeks are a learning phase where the algorithm optimises delivery. Month 2 onwards typically shows significantly better cost per lead.",
      },
    },
  ],
};

const Services = () => {
  return (
    <>
      <Script
        id="schema-faq-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoFAQSchema) }}
      />
      <Script
        id="schema-faq-meta-ads"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metaAdsFAQSchema) }}
      />
      <ServicesClient services={services} />
    </>
  );
};

export default Services;