import Header from "@/components/view4sight/Header";
import Features from "@/components/view4sight/visualize/Features";
import Hero from "@/components/view4sight/visualize/Hero";
import Cta from "@/components/view4sight/visualize/Cta";
import View4SightFooter from "@/components/view4sight/Footer";
import React from "react";

export const metadata = {
  title: "Visualize Features - View4Sight | Navigate Massive 3D Datasets Like a Desktop App",
  description: "Stream gigabyte point clouds smoothly in any browser. No plugins, no downloads, no performance compromises.",
};

export default function VisualizePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Cta />
        </div>
        <View4SightFooter />
      </div>
    </>
  );
} 