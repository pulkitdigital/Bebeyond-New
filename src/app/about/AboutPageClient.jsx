"use client";

import React from "react";
import Header2 from "@/app/components/header2";
import OurTeamMember1 from "../components/our_team_member1";
import AboutUs1 from "../components/about_us1";
import WhyChoose1 from "../components/why_choose1";
import ExtraBenifits from "../components/extra_benifits";
import VisionMission from "../components/vision_mission";
import AboutFounder from "../components/about_founder";

function AboutPageClient() {
  return (
    <>
      <Header2 h_1="About" />
      <AboutUs1 />
      <VisionMission />
      <ExtraBenifits />
      <AboutFounder />
      <WhyChoose1 _p="pt-20" _d="hidden" />
      <OurTeamMember1 _pb1="pb-32" _mWpb1="1004px:pb-24" />
    </>
  );
}

export default AboutPageClient;
