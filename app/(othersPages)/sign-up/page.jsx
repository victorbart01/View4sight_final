import Signup from "@/components/otherPages/Signup";
export const metadata = {
  title: "Créer un compte | View4Sight - Essai Gratuit",
  description: "Créez votre compte View4Sight et commencez votre essai gratuit. Visualisez et partagez vos données 3D sans logiciel lourd. 150GB de stockage inclus. Hébergement français, conforme GDPR.",
};
export default function SignupPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <Signup />
        </div>
      </div>
    </>
  );
}
