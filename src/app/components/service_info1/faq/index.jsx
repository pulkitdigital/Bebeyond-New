import { useState } from "react";
const Accordion = ({ serviceInfoData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex items-start justify-start flex-col gap-4 px-8 py-6 rounded-md bg-white 662px:p-4 538px:p-2">
      <h4 className=" text-h4 font-h4 leading-none bricolage_grotesque_head relative pb-2 1004px:text-h5 1004px:pb-1 792px:text-p2">
        FAQ
        <span className=" w-1/3 h-1 bg-color_orange absolute bottom-0 left-0 1004px:h-[2px] 792px:h-[1.5px]"></span>
      </h4>
      {serviceInfoData.faq.map((item, index) => (
        <div
          key={index}
          className=" w-full flex items-center justify-start flex-col"
        >
          <div
            onClick={() => toggleAccordion(index)}
            className=" select-none cursor-pointer flex justify-between items-center w-full bricolage_grotesque_head text-p1 font-p1 1004px:text-p2 1004px:gap-1 792px:text-p3"
          >
            {item.ques}
            <span className="text-2xl text-color_orange 1004px:text-xl 792px:text-lg">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>

          <p
            className={`overflow-hidden pt-2 ${
              activeIndex === index
                ? "max-h-screen  duration-500 "
                : "max-h-0 duration-250 "
            } text-color_gray public_sans_body text-p1 font-p1 border-t-[1.5px] border-color_blue transition-all ease-in-out 1004px:text-p2 792px:text-p3 792px:border-t`}
          >
            {item.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
