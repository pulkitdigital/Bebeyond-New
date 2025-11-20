import Image from "next/image";

function ServiceFeature({ serviceFeatures }) {
  return (
    <div className=" w-70% flex items-center justify-between flex-wrap gap-y-8 py-8 1004px:py-4 1004px:gap-y-4 792px:py-2 500px:w-full 500px:flex-col 500px:items-center 500px:justify-center 500px:p-0">
      {serviceFeatures &&
        serviceFeatures.map((data, ind) => {
          return (
            <div
              key={ind}
              className="w-48% flex items-start justify-between gap-4 500px:w-full 500px:justify-center"
            >
              <div className=" flex items-center justify-center w-[160px] text-color_orange 1004px:w-[151px] 792px:w-[142px]">
                <Image height={100} width={200} alt={data.featureIcon} title={data.featureName + " Page"} src={data.featureIcon} className=" w-full"/>
              </div>
              <div className="flex items-start justify-center flex-col gap-2">
                <h5 className="text-h4 font-h4 leading-none bricolage_grotesque_head 1004px:text-h5 792px:text-p1">
                  {data.featureName}
                </h5>
                <p className=" public_sans_body font-p1 text-p1 text-justify text-color_gray 1004px:text-p2 828px:text-start 792px:text-p3 500px:text-justify">
                  {data.featurePara}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ServiceFeature;
