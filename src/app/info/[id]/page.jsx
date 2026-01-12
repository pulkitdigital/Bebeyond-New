// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import { services2 } from "../../data/Services";
// import { projects2 } from "../../data/Projects";
// import { blogs2 } from "../../data/Blogs";
// import Header3 from "@/app/components/header3";
// import ServiceInfo1 from "@/app/components/service_info1";
// import BlogInfo1 from "@/app/components/blog_info1";
// import ProjectInfo1 from "@/app/components/project_info1";
// import { useAppContext } from "@/context";
// function FullInfo({ params }) {
//   const { setLoaderToggel } = useAppContext();
//   const paramData = useMemo(
//     () => (params ? params.id.split("-") : ["home", "info", 0]),
//     [params]
//   );
//   const [infoData, setInfoData] = useState(null);

//   useEffect(() => {
//     setInfoData(
//       paramData[1] === "service_info"
//         ? services2[+paramData[2] - 1]
//         : paramData[1] === "project_info" && paramData[3]
//         ? projects2.filter((project) => project.forBrand === paramData[3])[
//             +paramData[2] - 1
//           ]
//         : paramData[1] === "blog_info"
//         ? blogs2[+paramData[2] - 1]
//         : paramData[1] === "project_info"
//         ? projects2[+paramData[2] - 1]
//         : null
//     );
//   }, [paramData]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoaderToggel(false);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       {paramData[1] === "blog_info" ? (
//         <Header3
//           _dynamic1={paramData[0]}
//           _dynamic2={paramData[1]}
//           infoData2={infoData}
//         />
//       ) : (
//         <Header3
//           _dynamic1={paramData[0]}
//           _dynamic2={paramData[1]}
//           infoData2={null}
//         />
//       )}
//       {paramData[1] === "service_info" ? (
//         <ServiceInfo1 serviceInfoData={infoData} />
//       ) : (
//         ""
//       )}
//       {paramData[1] === "blog_info" ? (
//         <BlogInfo1 blogInfoData={infoData} />
//       ) : (
//         ""
//       )}
//       {paramData[1] === "project_info" ? (
//         <ProjectInfo1 projectInfoData={infoData} />
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// export default FullInfo;





// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import { services2 } from "../../data/Services";
// import { projects2 } from "../../data/Projects";
// import { blogs2 } from "../../data/Blogs";
// import Header3 from "@/app/components/header3";
// import ServiceInfo1 from "@/app/components/service_info1";
// import BlogInfo1 from "@/app/components/blog_info1";
// import ProjectInfo1 from "@/app/components/project_info1";
// import { useAppContext } from "@/context";

// function FullInfo({ params }) {
//   const { setLoaderToggel } = useAppContext();

//   const paramData = useMemo(
//     () => (params ? params.id.split("-") : []),
//     [params]
//   );

//   const [infoData, setInfoData] = useState(null);

//   useEffect(() => {
//     // ✅ NEW: detect slug (last part of URL)
//     const slug = paramData[paramData.length - 1];

//     // ✅ BLOG BY SLUG
//     const blog = blogs2.find((b) => b.slug === slug);
//     if (blog) {
//       setInfoData(blog);
//       return;
//     }

//     // ✅ SERVICE BY SLUG
//     const service = services2.find((s) => s.slug === slug);
//     if (service) {
//       setInfoData(service);
//       return;
//     }

//     // ✅ PROJECT BY SLUG
//     const project = projects2.find((p) => p.slug === slug);
//     if (project) {
//       setInfoData(project);
//       return;
//     }

//     setInfoData(null);
//   }, [paramData]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoaderToggel(false);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       <Header3 infoData2={infoData} />

//       {infoData && blogs2.some((b) => b.slug === infoData.slug) && (
//         <BlogInfo1 blogInfoData={infoData} />
//       )}

//       {infoData && services2.some((s) => s.slug === infoData.slug) && (
//         <ServiceInfo1 serviceInfoData={infoData} />
//       )}

//       {infoData && projects2.some((p) => p.slug === infoData.slug) && (
//         <ProjectInfo1 projectInfoData={infoData} />
//       )}
//     </>
//   );
// }

// export default FullInfo;














"use client";
import React, { useEffect, useState } from "react";
import { services2 } from "../../data/Services";
import { projects2 } from "../../data/Projects";
import { blogs2 } from "../../data/Blogs";
import Header3 from "@/app/components/header3";
import ServiceInfo1 from "@/app/components/service_info1";
import BlogInfo1 from "@/app/components/blog_info1";
import ProjectInfo1 from "@/app/components/project_info1";
import { useAppContext } from "@/context";

function FullInfo({ params }) {
  const { setLoaderToggel } = useAppContext();
  const [infoData, setInfoData] = useState(null);
  const [pageType, setPageType] = useState(null); // "service_info" | "blog_info" | "project_info" | null

  useEffect(() => {
    const id = params?.id ?? "";
    const parts = id.split("-");

    let type = null;
    let data = null;

    const isLegacyPattern =
      parts.length >= 3 &&
      (parts[1] === "service_info" ||
        parts[1] === "blog_info" ||
        parts[1] === "project_info");

    if (isLegacyPattern) {
      // ---------- OLD URL PATTERN: home-service_info-2 / blog-blog_info-11 ----------
      type = parts[1];

      if (type === "service_info") {
        data = services2[Number(parts[2]) - 1] ?? null;
      } else if (type === "blog_info") {
        data = blogs2[Number(parts[2]) - 1] ?? null;
      } else if (type === "project_info" && parts[3]) {
        data =
          projects2.filter((project) => project.forBrand === parts[3])[
            Number(parts[2]) - 1
          ] ?? null;
      } else if (type === "project_info") {
        data = projects2[Number(parts[2]) - 1] ?? null;
      }
    } else {
      // ---------- NEW PATTERN: /info/<slug> (blogs only) ----------
      type = "blog_info";
      data = blogs2.find((b) => b.slug === id) ?? null;
    }

    setPageType(type);
    setInfoData(data);
  }, [params]);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoaderToggel(false);
    }, 2000);
    return () => clearTimeout(t);
  }, [setLoaderToggel]);

  return (
    <>
      {pageType === "blog_info" ? (
        <Header3
          _dynamic1="blog"
          _dynamic2="blog_info"
          infoData2={infoData}
        />
      ) : (
        <Header3
          _dynamic1="home"
          _dynamic2={pageType || "info"}
          infoData2={null}
        />
      )}

      {pageType === "service_info" && infoData && (
        <ServiceInfo1 serviceInfoData={infoData} />
      )}

      {pageType === "blog_info" && infoData && (
        <BlogInfo1 blogInfoData={infoData} />
      )}

      {pageType === "project_info" && infoData && (
        <ProjectInfo1 projectInfoData={infoData} />
      )}
    </>
  );
}

export default FullInfo;
