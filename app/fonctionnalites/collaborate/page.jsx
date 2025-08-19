import Features from "@/components/view4sight/collaborate/Features";
import Hero from "@/components/view4sight/collaborate/Hero";
import Cta from "@/components/view4sight/collaborate/Cta";
import React from "react";

export const metadata = {
  title: "Collaborer - View4Sight | Collaboration 3D en temps réel",
  description: "Fini les emails, les photos et les versions qui se croisent. Une scène unique et des commentaires centralisés pour travailler plus vite, sans confusion.",
};

export default function CollaboratePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 