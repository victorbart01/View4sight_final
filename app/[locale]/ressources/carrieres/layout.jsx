import View4SightHeader from "@/components/view4sight/Header";
import View4SightFooter from "@/components/view4sight/Footer";

export default function CarrieresLayout({ children }) {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <View4SightHeader />
      <div id="wrapper" className="wrap">
        {children}
      </div>
      <View4SightFooter />
    </div>
  );
} 