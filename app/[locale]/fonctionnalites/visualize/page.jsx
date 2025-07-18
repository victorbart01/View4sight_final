import React from "react";
import Hero from "@/components/view4sight/visualize/Hero";
import Features from "@/components/view4sight/visualize/Features";
import Cta from "@/components/view4sight/visualize/Cta";

export const metadata = {
  title: "Visualize - View4Sight",
  description: "Navigate massive 3D datasets like a desktop app, directly in your browser.",
};

export default function VisualizePage({ params }) {
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