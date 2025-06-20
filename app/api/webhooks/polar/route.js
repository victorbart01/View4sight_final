// WEBHOOKS TEMPORARILY DISABLED FOR TESTING
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("Webhook received (but handling is disabled for testing)");
  return NextResponse.json({ message: "Webhook received but not processed" });
} 