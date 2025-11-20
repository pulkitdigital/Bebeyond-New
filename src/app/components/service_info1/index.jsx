import React from "react";
import Image from "next/image";
import Accordion from "./faq";
import ServicesIncludes from "./sevices_includes";
import ServiceFeature from "./service_feature";
import CustomerBenifits from "./customer_benifits";
function ServiceInfo1({ serviceInfoData }) {
  return (
    <>
      {serviceInfoData && (
        <main className=" w-full flex items-center justify-center bg-color_creame">
          <div className="info-container max-w-1600px w-full flex items-center justify-center">
            <div className="info w-88% flex items-start justify-cente flex-col gap-8 py-16 relative 500px:items-center">
              <>
                {/* <Image
                  width={1000}
                  height={500}
                  priority={true}
                  alt="img"
                  className=" w-70% h-450px 792px:h-340px 500px:w-full 500px:h-250px"
                  src={serviceInfoData._img}
                /> */}
                <div className=" pl-6 absolute right-0 w-30% flex items-start justify-start flex-col gap-8 h-full 500px:hidden">
                  <ServicesIncludes serviceUse={serviceInfoData.serviceUse} _sIncludesH="Services Include" />
                  <Accordion serviceInfoData={serviceInfoData} />
                </div>
                <h3 className=" w-70% text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5 500px:w-full">
                  {serviceInfoData._h4}
                </h3>
                <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                  {serviceInfoData._newp1}
                </p>
                {serviceInfoData._newp2 && (
                  <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                    {serviceInfoData._newp2}
                  </p>
                )}
                <ServiceFeature serviceFeatures={serviceInfoData.serviceFeatures} />
                {serviceInfoData._newp3 && (
                  <p className="w-70% text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3 500px:w-full">
                    {serviceInfoData._newp3}
                  </p>
                )}
                <CustomerBenifits _img1={serviceInfoData._img} serviceInfoData={serviceInfoData} />
                <div className=" hidden w-full 500px:flex items-start justify-center flex-col gap-8 ">
                  <ServicesIncludes serviceUse={serviceInfoData.serviceUse} _sIncludesH="Services Use" />
                  <Accordion serviceInfoData={serviceInfoData}/>
                </div>
              </>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default ServiceInfo1;
