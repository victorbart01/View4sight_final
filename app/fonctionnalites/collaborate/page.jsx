import Features from "@/components/view4sight/collaborate/Features";
import Hero from "@/components/view4sight/collaborate/Hero";
import Cta from "@/components/view4sight/collaborate/Cta";
import React from "react";

export const metadata = {
  title: "Collaborate Features - View4Sight | Real-Time 3D Collaboration From Anywhere",
  description: "Your entire team can measure, annotate, and review the same 3D data simultaneously. No more version conflicts or email attachments.",
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