import SimpleNotfound from "@/components/view4sight/SimpleNotfound";

export const metadata = {
  title: "Page introuvable - View4Sight",
  description: "La page que vous recherchez n'existe pas.",
};

export default function NotFoundPage() {
  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
      <div id="wrapper" className="wrap">
        <SimpleNotfound />
      </div>
    </div>
  );
}
