import React from "react";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title: "Blog Article - View4Sight",
  description: "Read the latest insights on 3D visualization and surveying workflows.",
};

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  
  return (
    <>
      <BlogDetails1 blogItem={blogItem} />
      <Newsletter />
    </>
  );
} 