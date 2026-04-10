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
  const [pageType, setPageType] = useState(null);

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