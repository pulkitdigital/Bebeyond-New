"use client";
import { useEffect } from "react";
import { useAppContext } from "@/context";
import ServiceInfo1 from "../../components/service_info1";
import Header2 from "../../components/header2";
import ContactUs1 from "../../components/contact_us1";

export default function ServicePageClient({ serviceData }) {
  const { setLoaderToggel } = useAppContext();

  // ← Page load hone par loader band karo
  useEffect(() => {
    setLoaderToggel(false);
  }, []);

  if (!serviceData) return <div>Service not found</div>;

  return (
    <>
      <Header2 h_1={serviceData._h4} />
      <ServiceInfo1 serviceInfoData={serviceData} />
      <ContactUs1 id="contact" _d="flex" _d2="hidden" _pt="pt-20" _mW_pt="792px:pt-14" />
    </>
  );
}