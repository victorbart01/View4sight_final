"use client";
import { useEffect } from "react";

export default function ZohoChat() {
  useEffect(() => {
    // Configuration Zoho SalesIQ avec le code fourni
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      ready: function() {
        // Configuration pour View4Sight
        if (window.$zoho.salesiq.chat) {
          window.$zoho.salesiq.chat.title("Support View4Sight");
          window.$zoho.salesiq.chat.questions([
            "Comment puis-je télécharger mes données 3D ?",
            "Quels formats de fichiers sont supportés ?",
            "Comment partager mes projets avec mes clients ?",
            "Problème technique avec la visualisation",
            "Questions sur les tarifs et abonnements"
          ]);
          
          // Personnalisation du style
          window.$zoho.salesiq.chat.color("#FE552E"); // Couleur View4Sight
          window.$zoho.salesiq.chat.department("Support Technique");
          
          // Message de bienvenue
          window.$zoho.salesiq.chat.greeting("Bonjour ! Comment pouvons-nous vous aider avec View4Sight ?");
        }
      }
    };

    // Charger le script Zoho avec votre widget code spécifique
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.src = "https://salesiq.zohopublic.com/widget?wc=siq581f11cec9d52e3822e00e4234e434a2b3de5d7a91c08980d9a861fcd50098dc";
    
    // Vérifier si le script n'est pas déjà chargé
    if (!document.getElementById("zsiqscript")) {
      document.head.appendChild(script);
    }

    // Nettoyage
    return () => {
      const existingScript = document.getElementById("zsiqscript");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // Ce composant n'a pas de rendu visuel
} 