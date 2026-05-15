// import React from "react";
// import Image from "next/image";
// import { FaQuoteRight } from "react-icons/fa6";

// function BlogInfo1({ blogInfoData }) {
//   return (
//     <>
//       {blogInfoData && (
//         <main className=" w-full flex items-center justify-center bg-color_creame">
//           <div className="info-container max-w-1600px w-full flex items-center justify-center">
//             <div className="info w-88% flex items-center justify-cente flex-col py-16 relative">
//               <div className=" w-3/4 flex items-center justify-between flex-wrap gap-y-8 500px:w-full">
//                 {/* <Image
//                   width={500}
//                   height={250}
//                   alt="img"
//                   className=" w-full "
//                   priority={true}
//                   src={blogInfoData._img}
//                 /> */}
//                 {blogInfoData._newH4_1 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_1}
//                     </h3>
//                     <>
//                       {blogInfoData._newp1.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_2 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_2}
//                     </h3>
//                     <>
//                       {blogInfoData._newp2.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_3 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_3}
//                     </h3>
//                     <>
//                       {blogInfoData._newp3.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_4 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_4}
//                     </h3>
//                     <>
//                       {blogInfoData._newp4.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 <Image
//                   width={300}
//                   height={150}
//                   className=" w-48%"
//                   alt="img"
//                   priority={true}
//                   src={blogInfoData._img2}
//                 />
//                 <Image
//                   width={300}
//                   height={150}
//                   className=" w-48% " 
//                   alt="img"
//                   priority={true}
//                   src={blogInfoData._img3}
//                 />

//                 {blogInfoData._newH4_5 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_5}
//                     </h3>
//                     <>
//                       {blogInfoData._newp5.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_6 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_6}
//                     </h3>
//                     <>
//                       {blogInfoData._newp6.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_7 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_7}
//                     </h3>
//                     <>
//                       {blogInfoData._newp7.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_8 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_8}
//                     </h3>
//                     <>
//                       {blogInfoData._newp8.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 <div className=" w-full flex items-start justify-center flex-col p-8 bg-white border-l-[3px] border-color_orange 792px:py-6 792px:pl-8 792px:pr-6 ">
//                   <span className=" text-color_orange text-h2 leading-none flex items-center justify-center flex-col mb-4 1004px:text-h3 792px:text-h4">
//                     <FaQuoteRight />
//                   </span>
//                   <h4 className=" text-h4 font-h4 bricolage_grotesque_head w-4/5 1004px:text-h5new 792px:text-p2">
//                     {blogInfoData._metaDes}
//                   </h4>
//                   {/* <p className=" text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
//                     - Winston Churchill.
//                   </p> */}
//                 </div>
//                 {blogInfoData._newH4_9 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_9}
//                     </h3>
//                     <>
//                       {blogInfoData._newp9.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_10 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_10}
//                     </h3>
//                     <>
//                       {blogInfoData._newp10.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_11 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_11}
//                     </h3>
//                     <>
//                       {blogInfoData._newp11.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_12 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_12}
//                     </h3>
//                     <>
//                       {blogInfoData._newp12.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}

//                 {blogInfoData._newH4_13 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_13}
//                     </h3>
//                     <>
//                       {blogInfoData._newp13.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_14 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_14}
//                     </h3>
//                     <>
//                       {blogInfoData._newp14.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                       {blogInfoData._newH4_15 && (
//                         <>
//                           <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                             {blogInfoData._newH4_15}
//                           </h3>
//                           <>
//                             {blogInfoData._newp15.map((para, ind) => {
//                               return (
//                                 <p
//                                   key={ind}
//                                   className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                                 >
//                                   {para}
//                                 </p>
//                               );
//                             })}
//                           </>
//                         </>
//                       )}{" "}
//                     </>
//                   </>
//                 )}
//                 {blogInfoData._newH4_16 && (
//                   <>
//                     <h3 className=" w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
//                       {blogInfoData._newH4_16}
//                     </h3>
//                     <>
//                       {blogInfoData._newp16.map((para, ind) => {
//                         return (
//                           <p
//                             key={ind}
//                             className="  w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
//                           >
//                             {para}
//                           </p>
//                         );
//                       })}
//                     </>
//                   </>
//                 )}

//                 {/* <div className=" w-full flex items-center justify-start gap-4 548px:gap-1">
//                   <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3 top-0 500px:px-2 ">
//                     Business
//                   </span>
//                   <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3  bottom-0 500px:px-2">
//                     Marketing
//                   </span>
//                   <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3  right-0 top-0 500px:px-2">
//                     Startup
//                   </span>
//                   <span className=" bricolage_grotesque_head text-p1 font-p1 bg-white py-1 px-4 flex items-center justify-center 1004px:text-p2 792px:text-p3  right-0 bottom-0 500px:px-2">
//                     Design
//                   </span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </main>
//       )}
//     </>
//   );
// }

// export default BlogInfo1;























import React from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";

// ─── Sub-components for new rich content blocks ───────────────────────────────

// Stat boxes — e.g. _statBoxes: [{ num: "₹8K", label: "Starting cost", color: "blue" }]
// color: "blue" | "green" | "amber" | "red"
function StatBoxes({ items }) {
  if (!items || !items.length) return null;
  const colorMap = {
    blue: "border-color_blue text-color_blue",
    green: "border-green-500 text-green-500",
    amber: "border-amber-500 text-amber-500",
    red: "border-red-500 text-red-500",
  };
  return (
    <div className="w-full grid grid-cols-4 gap-4 my-2 922px:grid-cols-2 500px:grid-cols-1">
      {items.map((item, i) => (
        <div
          key={i}
          className={`bg-white rounded-xl p-5 text-center border-t-4 shadow-sm ${
            colorMap[item.color] || colorMap["blue"]
          }`}
        >
          <div
            className={`bricolage_grotesque_head text-h3 font-h3 leading-none mb-1 1004px:text-h4 ${
              colorMap[item.color] || colorMap["blue"]
            }`}
          >
            {item.num}
          </div>
          <div className="public_sans_body text-p3 font-p3 text-color_gray leading-snug">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Callout box — e.g. _callout: { label: "Fix", text: "...", color: "green" }
// color: "blue" | "green" | "amber" | "red"
function Callout({ item }) {
  if (!item) return null;
  const colorMap = {
    blue: {
      border: "border-color_blue",
      bg: "bg-blue-50",
      label: "text-color_blue",
    },
    green: {
      border: "border-green-500",
      bg: "bg-green-50",
      label: "text-green-600",
    },
    amber: {
      border: "border-amber-500",
      bg: "bg-amber-50",
      label: "text-amber-600",
    },
    red: { border: "border-red-500", bg: "bg-red-50", label: "text-red-600" },
  };
  const c = colorMap[item.color] || colorMap["blue"];
  return (
    <div
      className={`w-full border-l-4 ${c.border} ${c.bg} rounded-r-xl p-5 my-2`}
    >
      {item.label && (
        <p
          className={`bricolage_grotesque_head text-p3 font-p3 uppercase tracking-widest mb-2 ${c.label}`}
        >
          {item.label}
        </p>
      )}
      <p className="public_sans_body text-p1 font-p1 text-color_gray 1004px:text-p2 792px:text-p3">
        {item.text}
      </p>
    </div>
  );
}

// Numbered steps — e.g. _steps: [{ title: "Step 1", desc: "..." }]
function Steps({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="w-full flex flex-col gap-4 my-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="min-w-9 min-h-9 w-9 h-9 rounded-full bg-color_blue flex items-center justify-center text-white bricolage_grotesque_head text-p2 font-p2 flex-shrink-0 mt-1">
            {i + 1}
          </div>
          <div>
            <p className="bricolage_grotesque_head text-p1 font-p1 mb-1 1004px:text-p2">
              {item.title}
            </p>
            <p className="public_sans_body text-p1 font-p1 text-color_gray 1004px:text-p2 792px:text-p3">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Simple table — e.g. _table: { heads: ["Col1","Col2"], rows: [["A","B"],["C","D"]] }
function Table({ item }) {
  if (!item) return null;
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-2">
      <table className="w-full text-p2 font-p2 public_sans_body border-collapse">
        <thead className="bg-color_navy text-white">
          <tr>
            {item.heads.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 text-p3 font-p3 uppercase tracking-wider whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {item.rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                ri % 2 === 1 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 text-color_gray align-top leading-snug"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Checklist — e.g. _checklist: ["Item 1", "Item 2"]
function Checklist({ items }) {
  if (!items || !items.length) return null;
  return (
    <ul className="w-full flex flex-col my-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-b-0 public_sans_body text-p1 font-p1 text-color_gray 1004px:text-p2 792px:text-p3"
        >
          <div className="min-w-5 min-h-5 w-5 h-5 rounded bg-color_blue flex items-center justify-center flex-shrink-0 mt-[2px]">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L4 7L10 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {item}
        </li>
      ))}
    </ul>
  );
}

// CTA Block — e.g. _cta: { title: "Ready?", text: "...", btnText: "Contact Us", btnHref: "/contact" }
function CtaBlock({ item }) {
  if (!item) return null;
  return (
    <div className="w-full rounded-2xl bg-color_navy p-8 text-center my-4 792px:p-6">
      <h4 className="bricolage_grotesque_head text-h4 font-h4 text-white mb-3 1004px:text-h5 792px:text-p1">
        {item.title}
      </h4>
      <p className="public_sans_body text-p1 font-p1 text-white/80 mb-6 1004px:text-p2 792px:text-p3">
        {item.text}
      </p>
      <a
        href={item.btnHref || "/contact"}
        className="inline-block bg-color_orange text-white bricolage_grotesque_head text-p1 font-p1 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity 1004px:text-p2"
      >
        {item.btnText || "Contact Us"} →
      </a>
    </div>
  );
}

// ─── Reusable section renderer ─────────────────────────────────────────────────
// Each section in _sections array:
// { h: "Heading", paras: ["..."], statBoxes: [...], callout: {...}, steps: [...], table: {...}, checklist: [...], cta: {...} }
function Section({ section, isFirst }) {
  return (
    <>
      {section.h && (
        <h3
          className={`w-full bricolage_grotesque_head leading-tight 1004px:text-h4 792px:text-h5 ${
            isFirst ? "text-h3 font-h3" : "text-h3 font-h3"
          }`}
        >
          {section.h}
        </h3>
      )}

      {section.paras &&
        section.paras.map((para, i) => (
          <p
            key={i}
            className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3"
          >
            {para}
          </p>
        ))}

      {section.statBoxes && <StatBoxes items={section.statBoxes} />}
      {section.callout && <Callout item={section.callout} />}
      {section.steps && <Steps items={section.steps} />}
      {section.table && <Table item={section.table} />}
      {section.checklist && <Checklist items={section.checklist} />}
      {section.cta && <CtaBlock item={section.cta} />}
    </>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
function BlogInfo1({ blogInfoData }) {
  // Determine rendering mode:
  // NEW mode  → blogInfoData._sections array exists
  // OLD mode  → blogInfoData._newH4_1 etc. (backward compatible)
  const isNewMode = Array.isArray(blogInfoData?._sections);

  return (
    <>
      {blogInfoData && (
        <main className="w-full flex items-center justify-center bg-color_creame">
          <div className="info-container max-w-1600px w-full flex items-center justify-center">
            <div className="info w-88% flex items-center justify-center flex-col py-16 relative">
              <div className="w-3/4 flex items-center justify-between flex-wrap gap-y-8 500px:w-full">

                {/* ── NEW MODE ── */}
                {isNewMode && (
                  <>
                    {blogInfoData._sections.map((section, i) => (
                      <Section key={i} section={section} isFirst={i === 0} />
                    ))}
                  </>
                )}

                {/* ── OLD MODE (fully preserved, unchanged) ── */}
                {!isNewMode && (
                  <>
                    {blogInfoData._newH4_1 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_1}
                        </h3>
                        {blogInfoData._newp1.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_2 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_2}
                        </h3>
                        {blogInfoData._newp2.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_3 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_3}
                        </h3>
                        {blogInfoData._newp3.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_4 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_4}
                        </h3>
                        {blogInfoData._newp4.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}

                    <Image
                      width={300}
                      height={150}
                      className="w-48%"
                      alt="img"
                      priority={true}
                      src={blogInfoData._img2}
                    />
                    <Image
                      width={300}
                      height={150}
                      className="w-48%"
                      alt="img"
                      priority={true}
                      src={blogInfoData._img3}
                    />

                    {blogInfoData._newH4_5 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_5}
                        </h3>
                        {blogInfoData._newp5.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_6 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_6}
                        </h3>
                        {blogInfoData._newp6.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_7 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_7}
                        </h3>
                        {blogInfoData._newp7.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_8 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_8}
                        </h3>
                        {blogInfoData._newp8.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}

                    <div className="w-full flex items-start justify-center flex-col p-8 bg-white border-l-[3px] border-color_orange 792px:py-6 792px:pl-8 792px:pr-6">
                      <span className="text-color_orange text-h2 leading-none flex items-center justify-center flex-col mb-4 1004px:text-h3 792px:text-h4">
                        <FaQuoteRight />
                      </span>
                      <h4 className="text-h4 font-h4 bricolage_grotesque_head w-4/5 1004px:text-h5new 792px:text-p2">
                        {blogInfoData._metaDes}
                      </h4>
                    </div>

                    {blogInfoData._newH4_9 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_9}
                        </h3>
                        {blogInfoData._newp9.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_10 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_10}
                        </h3>
                        {blogInfoData._newp10.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_11 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_11}
                        </h3>
                        {blogInfoData._newp11.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_12 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_12}
                        </h3>
                        {blogInfoData._newp12.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_13 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_13}
                        </h3>
                        {blogInfoData._newp13.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                    {blogInfoData._newH4_14 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_14}
                        </h3>
                        {blogInfoData._newp14.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                        {blogInfoData._newH4_15 && (
                          <>
                            <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                              {blogInfoData._newH4_15}
                            </h3>
                            {blogInfoData._newp15.map((para, ind) => (
                              <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                                {para}
                              </p>
                            ))}
                          </>
                        )}
                      </>
                    )}
                    {blogInfoData._newH4_16 && (
                      <>
                        <h3 className="w-full text-h3 font-h3 leading-none bricolage_grotesque_head 1004px:text-h4 792px:text-h5">
                          {blogInfoData._newH4_16}
                        </h3>
                        {blogInfoData._newp16.map((para, ind) => (
                          <p key={ind} className="w-full text-justify text-p1 font-p1 text-color_gray public_sans_body 1004px:text-p2 792px:text-p3">
                            {para}
                          </p>
                        ))}
                      </>
                    )}
                  </>
                )}

                {/* Quote box — shown in both modes for new blogs if _metaDes exists and NOT old mode */}
                {isNewMode && blogInfoData._metaDes && (
                  <div className="w-full flex items-start justify-center flex-col p-8 bg-white border-l-[3px] border-color_orange 792px:py-6 792px:pl-8 792px:pr-6">
                    <span className="text-color_orange text-h2 leading-none flex items-center justify-center flex-col mb-4 1004px:text-h3 792px:text-h4">
                      <FaQuoteRight />
                    </span>
                    <h4 className="text-h4 font-h4 bricolage_grotesque_head w-4/5 1004px:text-h5new 792px:text-p2">
                      {blogInfoData._metaDes}
                    </h4>
                  </div>
                )}

              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default BlogInfo1;