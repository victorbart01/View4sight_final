import Newsletter from "@/components/view4sight/blog/Newsletter";
import Blogs2 from "@/components/view4sight/blog/Blogs2";

export const metadata = {
  title: "Blog - View4Sight | Insights on 3D Data Visualization",
  description: "Latest articles, insights and best practices for 3D point cloud visualization, geospatial data management, and surveying workflows.",
};

export default function BlogPage() {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <Blogs2 />
        <Newsletter />
      </div>
    </>
  );
} 