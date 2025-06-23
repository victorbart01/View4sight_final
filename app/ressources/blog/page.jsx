import View4SightHeader from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import Blogs2 from "@/components/view4sight/blog/Blogs2";

export const metadata = {
  title: "Blog - View4Sight | Insights on 3D Data Visualization",
  description: "Latest articles, insights and best practices for 3D point cloud visualization, geospatial data management, and surveying workflows.",
};

export default function BlogPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <View4SightHeader />
        <div id="wrapper" className="wrap" style={{ marginTop: "80px" }}>
          <Blogs2 />
          <Newsletter />
        </div>
        <View4SightFooter />
      </div>
    </>
  );
} 