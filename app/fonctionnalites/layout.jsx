import View4SightHeader from "@/components/view4sight/Header";
import Footer2 from "@/components/footers/Footer2";

export default function FonctionnalitesLayout({ children }) {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <View4SightHeader />
      <div id="wrapper" className="wrap">
        {children}
      </div>
      <Footer2 />
    </div>
  );
} 