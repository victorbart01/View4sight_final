import SignIn from "@/components/otherPages/SignIn";
export const metadata = {
  title: "Se connecter | View4Sight - Visualisation 3D et Géospatiale",
  description: "Connectez-vous à votre compte View4Sight pour accéder à vos projets 3D, partager des données géospatiales et collaborer avec votre équipe. Plateforme française de visualisation sans logiciel CAD.",
};
export default function SigninPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <SignIn />
        </div>
      </div>
    </>
  );
}
