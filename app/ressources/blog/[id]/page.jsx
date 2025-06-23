import View4SightHeader from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import { allBlogs } from "@/data/blogs";

export const metadata = {
  title: "Blog Article - View4Sight",
  description: "Read the latest insights on 3D visualization and surveying workflows.",
};

export default async function BlogDetailsPage(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <View4SightHeader />
        <div id="wrapper" className="wrap" style={{ marginTop: "80px" }}>
          <BlogDetails1 blogItem={blogItem} />
          <Newsletter />
        </div>
        <View4SightFooter />
      </div>
    </>
  );
} 