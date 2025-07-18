import React from "react";
import Terms from "@/components/view4sight/Terms";

export const metadata = {
  title: "Conditions Générales d'Utilisation - View4Sight",
  description: "Conditions générales d'utilisation du service View4Sight fourni par INTEGRAL4. Plateforme collaborative pour la visualisation et le partage de données 3D.",
};

export default function page() {
  return (
    <div style={{ backgroundColor: '#0E0E0F', minHeight: '100vh' }}>
      <Terms />
    </div>
  );
} 