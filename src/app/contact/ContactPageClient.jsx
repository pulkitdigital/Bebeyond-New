"use client";

import React from "react";
import Header2 from "@/app/components/header2";
import Map1 from "../components/map1";
import ContactUs2 from "../components/contact_us2";
import FAQ from "../components/faq_contact"
function ContactPageClient() {
  return (
    <>
      <Header2 h_1="Contact" />
      <ContactUs2 />
      <FAQ />
      <Map1 />
    </>
  );
}

export default ContactPageClient;
