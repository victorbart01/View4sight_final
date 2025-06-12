import Features from "@/components/view4sight/measure/Features";
import Hero from "@/components/view4sight/measure/Hero";
import Cta from "@/components/view4sight/measure/Cta";
import React from "react";

export const metadata = {
  title: "Measure Features - View4Sight | Survey-Grade Precision in Your Browser",
  description: "Professional measurement tools that work directly in your browser. Get centimeter accuracy without expensive desktop software.",
};

export default function MeasurePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 