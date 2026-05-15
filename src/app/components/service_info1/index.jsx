// import React from "react";
// import Image from "next/image";
// import Accordion from "./faq";
// import ServicesIncludes from "./sevices_includes";
// import ServiceFeature from "./service_feature";
// import CustomerBenifits from "./customer_benifits";
// function ServiceInfo1({ serviceInfoData }) {
//   return (
//     <>
//       {serviceInfoData && (
//         <main className=" w-full flex items-center justify-center bg-color_creame">
//           <div className="info-container max-w-1600px w-full flex items-center justify-center">
//             <div className="info w-88% flex items-start justify-cente flex-col gap-8 py-16 relative 500px:items-center">
//               <>
//                 {/* <Image
//                   width={1000}
//                   height={500}
//                   priority={true}
//                   alt="img"
//                   className=" w-70% h-450px 792px:h-340px 500px:w-full 500px:h-250px"
//                   src={serviceInfoData._img}
//                 /> */}
//                 <div className=" pl-6 absolute right-0 w-30% flex items-start justify-start flex-col gap-8 h-full 500px:hidden">
//                   <ServicesIncludes serviceUse={serviceInfoData.serviceUse} _sIncludesH="Services Include" />
//                   <Accordion serviceInfoData={serviceInfoData} />
//                 </div>
//                 <h3 className=" w-70% text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5 500px:w-full">
//                   {serviceInfoData._h4}
//                 </h3>
//                 <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
//                   {serviceInfoData._newp1}
//                 </p>
//                 {serviceInfoData._newp2 && (
//                   <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
//                     {serviceInfoData._newp2}
//                   </p>
//                 )}
//                 <ServiceFeature serviceFeatures={serviceInfoData.serviceFeatures} />
//                 {serviceInfoData._newp3 && (
//                   <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
//                     {serviceInfoData._newp3}
//                   </p>
//                 )}
//                 <CustomerBenifits _img1={serviceInfoData._img} serviceInfoData={serviceInfoData} />
//                 <div className=" hidden w-full 500px:flex items-start justify-center flex-col gap-8 ">
//                   <ServicesIncludes serviceUse={serviceInfoData.serviceUse} _sIncludesH="Services Use" />
//                   <Accordion serviceInfoData={serviceInfoData}/>
//                 </div>
//               </>
//             </div>
//           </div>
//         </main>
//       )}
//     </>
//   );
// }

// export default ServiceInfo1;

// ServiceInfo1.jsx
"use client";
import React from "react";
import Image from "next/image";
import Accordion from "./faq";
import ServicesIncludes from "./sevices_includes";
import ServiceFeature from "./service_feature";
import CustomerBenifits from "./customer_benifits";
import ProcessSteps from "./process_steps";
import WhatWeBuild from "./what_we_build";
import Platforms from "./platforms";
import WhatsIncluded from "./whats_included";
import PricingSection from "./pricing_section";

function ServiceInfo1({ serviceInfoData }) {
  return (
    <>
      {serviceInfoData && (
        <main className="w-full flex items-center justify-center bg-color_creame">
          <div className="info-container max-w-1600px w-full flex items-center justify-center">
            <div className="info w-88% flex items-start justify-center flex-col gap-8 py-16 relative 500px:items-center">
              {/* ── Sticky Sidebar ── */}
              {/* <div className="pl-6 absolute right-0 w-30% flex items-start justify-start flex-col gap-8 h-full 500px:hidden"> */}
              {/* ── Sticky Sidebar ── */}
              <div className="pl-6 absolute right-0 w-30% flex items-start justify-start flex-col gap-8 h-full 500px:hidden pt-8">
                <ServicesIncludes
                  serviceUse={serviceInfoData.serviceUse}
                  _sIncludesH="Services Include"
                />
                <Accordion serviceInfoData={serviceInfoData} />
              </div>

              {/* ── Title ── */}
              <h3 className="w-70% text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5 500px:w-full">
                {serviceInfoData._h4}
              </h3>

              {/* ── About Paragraphs ── */}
              <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                {serviceInfoData._newp1}
              </p>
              {serviceInfoData._newp2 && (
                <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                  {serviceInfoData._newp2}
                </p>
              )}

              {/* ── What We Build (Web Dev & Video) ── */}
              {serviceInfoData.whatWeBuild && (
                <WhatWeBuild whatWeBuild={serviceInfoData.whatWeBuild} />
              )}

              {/* ── Platforms (Social Media) ── */}
              {serviceInfoData.platforms && (
                <Platforms platforms={serviceInfoData.platforms} />
              )}

              {/* ── Service Features ── */}
              <ServiceFeature
                serviceFeatures={serviceInfoData.serviceFeatures}
              />

              {/* ── Process Steps (SEO, Meta Ads, Social, Video) ── */}
              {serviceInfoData.processSteps && (
                <ProcessSteps processSteps={serviceInfoData.processSteps} />
              )}

              {serviceInfoData._newp3 && (
                <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                  {serviceInfoData._newp3}
                </p>
              )}

              {/* ── Dev Standards (Web Dev only) ── */}
              {serviceInfoData.devStandards && (
                <div className="w-70% flex flex-col gap-3 500px:w-full">
                  <h4 className="text-h4 font-h4 bricolage_grotesque_head 1004px:text-h5 792px:text-p1">
                    Our Development Standards
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {serviceInfoData.devStandards.map((item, ind) => (
                      <li
                        key={ind}
                        className="flex items-start gap-2 text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
                      >
                        <span className="text-color_orange mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── What's Included ── */}
              {serviceInfoData.whatsIncluded && (
                <WhatsIncluded whatsIncluded={serviceInfoData.whatsIncluded} />
              )}

              {/* ── Pricing ── */}
              {serviceInfoData.pricing && (
                <PricingSection
                  pricing={serviceInfoData.pricing}
                  slug={serviceInfoData.slug}
                />
              )}

              {/* ── Customer Benefits ── */}
              <CustomerBenifits
                _img1={serviceInfoData._img}
                serviceInfoData={serviceInfoData}
              />

              {/* ── Mobile Sidebar ── */}
              <div className="hidden w-full 500px:flex items-start justify-center flex-col gap-8">
                <ServicesIncludes
                  serviceUse={serviceInfoData.serviceUse}
                  _sIncludesH="Services Use"
                />
                <Accordion serviceInfoData={serviceInfoData} />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default ServiceInfo1;
