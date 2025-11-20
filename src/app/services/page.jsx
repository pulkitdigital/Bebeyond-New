"use client"
import React  from "react";
import Header2 from "../components/header2";
import OurServices2 from "../components/our_services2";
import OurProjects2 from "../components/our_projects2";
import ContactUs1 from "../components/contact_us1";

const Services = () => {
  

  return (
    <>
      <Header2 h_1="Services" />
      <OurServices2 />
      <OurProjects2 />
      <ContactUs1 _d="flex" _d2="hidden"  _pt="pt-20" _mW_pt="792px:pt-14"/>
    </>
  );
};

export default Services;
