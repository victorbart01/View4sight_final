import View4SightHeader from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";
import Newsletter from "@/components/view4sight/blog/Newsletter";
import BreadCumb from "@/components/view4sight/blog/BreadCumb";
import Blogs2 from "@/components/view4sight/blog/Blogs2";

export const metadata = {
  title: "Blog Category - View4Sight",
  description: "Browse articles by category on View4Sight blog.",
};

export default async function BlogCategoryPage(props) {
  const params = await props.params;
  const category = params.category;
  
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <View4SightHeader />
        <div id="wrapper" className="wrap" style={{ marginTop: "80px" }}>
          <BreadCumb category={category} />
          <Blogs2 />
          <Newsletter />
        </div>
        <View4SightFooter />
      </div>
    </>
  );
} 