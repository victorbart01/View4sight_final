import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs";

export const generateMetadata = pageMetadata("blogArticle");

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