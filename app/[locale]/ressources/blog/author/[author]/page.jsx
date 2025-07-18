import React from "react";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import BreadCumb from "@/components/view4sight/blog/BreadCumb";
import Blogs2 from "@/components/view4sight/blog/Blogs2";

export const metadata = {
  title: "Blog Author - View4Sight",
  description: "Browse articles by author on View4Sight blog.",
};

export default async function BlogAuthorPage({ params }) {
  const resolvedParams = await params;
  const author = resolvedParams.author;
  
  return (
    <>
      <BreadCumb category={`Author: ${author}`} />
      <Blogs2 />
      <Newsletter />
    </>
  );
} 