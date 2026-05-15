import React from "react";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Digital Marketing Blog | BeBeyond Digital Solutions",
  description:
    "Digital marketing tips, SEO guides, and growth strategies for businesses in Prayagraj and across India — by BeBeyond Digital Solutions.",
};

const posts = [
  {
    slug: "digital-marketing-cost-small-business-india",
    title: "How Much Does Digital Marketing Cost for Small Businesses in India?",
    description:
      "A practical pricing guide covering SEO, social media, paid ads, and website support for local businesses.",
  },
  {
    slug: "seo-vs-meta-ads-prayagraj",
    title: "SEO vs Meta Ads: Which Is Better for Businesses in Prayagraj?",
    description:
      "A comparison of long-term SEO growth versus faster paid ad outcomes based on goals and budget.",
  },
  {
    slug: "digital-marketing-mistakes-up",
    title: "Top 10 Digital Marketing Mistakes Local Businesses in UP Make",
    description:
      "Common campaign and website mistakes that reduce lead quality, and how to fix them quickly.",
  },
];

const Blog = () => {
  return <BlogClient posts={posts} />;
};

export default Blog;
