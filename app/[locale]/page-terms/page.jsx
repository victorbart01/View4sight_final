import React from "react";
import Terms from "@/components/view4sight/Terms";

export const metadata = {
  title: "Terms of Service - View4Sight",
  description: "View4Sight terms of service and conditions of use.",
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#0E0E0F', minHeight: '100vh' }}>
      <Terms />
    </div>
  );
} 