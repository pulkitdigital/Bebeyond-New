// import React from "react";
// import Home from "./home/page";
// import Script from "next/script";

// export const metadata = {
//   title:
//     "Digital Marketing Agency in Prayagraj | BeBeyond Digital Solutions",
//   description:
//     // "BeBeyond Digital Solutions is a digital marketing agency in Prayagraj offering SEO, social media, Meta ads and web development for local businesses.",
//     "BeBeyond Digital Solutions is Prayagraj's leading digital marketing agency. We help businesses grow with SEO, social media, Meta ads & web development. Get a free audit today.",
// };

// function App() {
//   const localBusinessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: "BeBeyond Digital Solutions",
//     url: "https://www.bebeyond.digital",
//     telephone: ["+919918671867", "+919026861110"],
//     email: "info@bebeyond.digital",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "Chamber 6, 4th Floor, Sangam Place, Civil Lines",
//       addressLocality: "Prayagraj",
//       addressRegion: "Uttar Pradesh",
//       postalCode: "211001",
//       addressCountry: "IN",
//     },
//     areaServed: ["Prayagraj", "Allahabad", "Lucknow", "Varanasi"],
//     serviceType: [
//       "SEO",
//       "Social Media Marketing",
//       "Meta Ads",
//       "Web Development",
//       "Branding",
//     ],
//   };

//   return (
//     <>
//       <Script
//         id="microsoft-clarity"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","omzrv3f4lg");`,
//         }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
//       />
//       <Home />
//     </>
//   );
// }
// export default App;










import React from "react";
import Home from "./home/page";
import Script from "next/script";

export const metadata = {
  title: "Digital Marketing Agency in Prayagraj | BeBeyond Digital Solutions",
  description:
    "BeBeyond Digital Solutions is Prayagraj's leading digital marketing agency. We help businesses grow with SEO, social media, Meta ads & web development. Get a free audit today.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BeBeyond Digital Solutions",
  url: "https://www.bebeyond.digital",
  logo: "https://www.bebeyond.digital/logo.png",
  image: "https://www.bebeyond.digital/og-image.jpg",
  description:
    "BeBeyond Digital Solutions is a full-service digital marketing agency in Prayagraj offering SEO, social media marketing, Meta Ads, web development, and branding.",
  telephone: ["+919918671867", "+919026861110"],
  email: "info@bebeyond.digital",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chamber 6, 4th Floor, Sangam Place, Civil Lines",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.4358",
    longitude: "81.8463",
  },
  areaServed: ["Prayagraj", "Allahabad", "Varanasi", "Lucknow", "Uttar Pradesh"],
  serviceType: [
    "SEO Services",
    "Social Media Marketing",
    "Meta Ads Management",
    "Web Development",
    "Branding",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.instagram.com/bebeyonddigitalsolutions/",
    "https://www.facebook.com/bebeyonddigital",
  ],
};

const homepageFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our packages start from ₹8,000/month for social media management and go up to ₹50,000+/month for full-funnel campaigns including ads, SEO, and web. We offer custom quotes based on your goals and budget — book a free call to get a proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients start seeing measurable improvements in rankings and traffic within 3–6 months. Local SEO results in Prayagraj can come faster — sometimes within 6–8 weeks — especially if your Google Business Profile is optimised.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside Prayagraj?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While we are based in Prayagraj, we work with clients across Uttar Pradesh, Varanasi, Lucknow, and pan-India. All our work is delivered digitally, so location is never a barrier.",
      },
    },
    {
      "@type": "Question",
      name: "What makes BeBeyond different from other digital marketing agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are one of the few agencies in Prayagraj that provides end-to-end digital marketing under one roof — SEO, social media, paid ads, web development, and branding — with full transparency and a dedicated account manager for every client.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with BeBeyond Digital Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click Book Your Free Digital Audit on this page, fill in a short form, and we will schedule a 30-minute strategy call within 24 hours. No commitment required.",
      },
    },
  ],
};

function App() {
  return (
    <>
      {/* Microsoft Clarity */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","omzrv3f4lg");`,
        }}
      />

      {/* LocalBusiness Schema */}
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Homepage FAQ Schema */}
      <Script
        id="schema-faq-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQSchema) }}
      />

      <Home />
    </>
  );
}

export default App;