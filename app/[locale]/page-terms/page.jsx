import { pageMetadata } from "@/lib/pageMetadata";
import React from "react";
import Terms from "@/components/view4sight/Terms";

export const generateMetadata = pageMetadata("terms");

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#0E0E0F', minHeight: '100vh' }}>
      <Terms />
    </div>
  );
} 