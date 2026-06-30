import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Privacy from "@/components/view4sight/Privacy";

export const generateMetadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#0E0E0F', minHeight: '100vh' }}>
      <Privacy />
    </div>
  );
} 