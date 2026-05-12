import React from "react";
import Home from "./home/page";
import Script from "next/script";

export const metadata = {
  title:
    "Digital Marketing Agency in Prayagraj | BeBeyond Digital Solutions",
  description:
    "BeBeyond Digital Solutions is a digital marketing agency in Prayagraj offering SEO, social media, Meta ads and web development for local businesses.",
};

function App() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BeBeyond Digital Solutions",
    url: "https://www.bebeyond.digital",
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
    areaServed: ["Prayagraj", "Allahabad", "Lucknow", "Varanasi"],
    serviceType: [
      "SEO",
      "Social Media Marketing",
      "Meta Ads",
      "Web Development",
      "Branding",
    ],
  };

  return (
    <>
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","omzrv3f4lg");`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Home />
    </>
  );
}
export default App;
