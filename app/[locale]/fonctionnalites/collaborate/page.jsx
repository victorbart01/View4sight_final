import React from "react";
import Hero from "@/components/view4sight/collaborate/Hero";
import Features from "@/components/view4sight/collaborate/Features";
import Cta from "@/components/view4sight/collaborate/Cta";

export const metadata = {
  title: "Collaborer - View4Sight | Collaboration 3D en temps réel",
  description: "Fini les emails, les photos et les versions qui se croisent. Une scène unique et des commentaires centralisés pour travailler plus vite, sans confusion.",
};

export default function CollaboratePage({ params }) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams?.locale || 'en';
  
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 