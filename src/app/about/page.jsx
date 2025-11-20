"use client";
import Header2 from "@/app/components/header2";
import React from "react";
import OurTeamMember1 from "../components/our_team_member1";
import AboutUs1 from "../components/about_us1";
import WhyChoose1 from "../components/why_choose1";
import ClientsTestimonials1 from "../components/clients_testimonials1";
import ContactUs1 from "../components/contact_us1";
import ExtraBenifits from "../components/extra_benifits";
import VisionMission from "../components/vision_mission";
import AboutFounder from "../components/about_founder";
function About() {
  
  return (
    <>
      <Header2 h_1="About" /> 
      <AboutUs1 />
      <VisionMission/>
      {/* <ClientsTestimonials1 /> */}
      <ExtraBenifits/>
      <AboutFounder/>
      <WhyChoose1 _p="pt-20" _d="hidden" />
      <OurTeamMember1 _pb1="pb-32" _mWpb1="1004px:pb-24" />
      {/* <ContactUs1 _d="hidden" _d2="hidden" _pt="pt-0" /> */}
    </>
  );
}
export default About;
