"use client";

import React from "react";
import Header2 from "../components/header2";
import OurBlogs2 from "../components/our_blogs2";

const BlogClient = ({ posts }) => {
  return (
    <div>
      <Header2 h_1="Blog" />
      <OurBlogs2 />

      <section className="hidden" aria-hidden="true">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogClient;
