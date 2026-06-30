import { pageMetadata } from "@/lib/pageMetadata";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import Blogs2 from "@/components/view4sight/blog/Blogs2";

export const generateMetadata = pageMetadata("blog");

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: "#0E0E0F" }}>
      <Blogs2 />
      <Newsletter />
    </div>
  );
} 