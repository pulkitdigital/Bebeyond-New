import React from "react";
import ContactPageClient from "./ContactPageClient";
import Script from "next/script";

export const metadata = {
  title: "Contact BeBeyond Digital Solutions | Digital Marketing Agency Prayagraj",
  description:
    "Get in touch with BeBeyond Digital Solutions in Prayagraj. Call, WhatsApp, or fill in our contact form to book a free digital marketing audit for your business.",
};

const contactFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will you respond to my enquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We respond to all enquiries within 4 business hours. For urgent queries, WhatsApp us directly at +91 99186 71867 for a faster response.",
      },
    },
    {
      "@type": "Question",
      name: "Is the free audit really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — completely. In our 30-minute call we review your website, social media presence, and local SEO, and share specific recommendations. There's no obligation to work with us afterwards.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to visit your office to work with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Most of our clients communicate entirely via WhatsApp, email, and video calls. We onboard and manage clients remotely across India — though you're always welcome to visit us in Civil Lines if you prefer in-person meetings.",
      },
    },
  ],
};

function Contact() {
  return (
    <>
      <Script
        id="schema-faq-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFAQSchema) }}
      />
      <ContactPageClient />
    </>
  );
}

export default Contact;