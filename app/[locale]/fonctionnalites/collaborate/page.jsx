import React from "react";
import Hero from "@/components/view4sight/collaborate/Hero";
import Features from "@/components/view4sight/collaborate/Features";
import Cta from "@/components/view4sight/collaborate/Cta";

export const metadata = {
  title: "Collaborate - View4Sight",
  description: "Work together in real-time from anywhere in the world.",
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