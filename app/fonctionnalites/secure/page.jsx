import Features from "@/components/view4sight/secure/Features";
import Hero from "@/components/view4sight/secure/Hero";
import Cta from "@/components/view4sight/secure/Cta";
import React from "react";

export const metadata = {
  title: "Secure Features - View4Sight | French Data Sovereignty & Enterprise Security",
  description: "Enterprise-grade security with French data hosting. Complete control over your sensitive project data, unlike American cloud providers.",
};

export default function SecurePage() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
    </>
  );
} 