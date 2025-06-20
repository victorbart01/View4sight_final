import { polar } from "@/lib/polar";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Debug des variables d'environnement
    console.log("=== DEBUG INFO ===");
    console.log("Has token:", !!process.env.POLAR_ACCESS_TOKEN);
    console.log("Token length:", process.env.POLAR_ACCESS_TOKEN?.length || 0);
    console.log("Server config:", process.env.POLAR_SERVER);
    console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
    
    const { productId, planName, isYearly } = await request.json();
    console.log("Received data:", { productId, planName, isYearly });

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    console.log("Creating checkout for product:", productId);

    // Create checkout session with Polar
    const checkout = await polar.checkouts.create({
      products: [productId],
      successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/confirmation?checkout_id={CHECKOUT_ID}&plan=${planName}&billing=${isYearly ? "yearly" : "monthly"}`,
      metadata: {
        plan_name: planName,
        billing_cycle: isYearly ? "yearly" : "monthly",
        source: "view4sight_website"
      }
    });

    console.log("Checkout created successfully:", checkout.id);
    return NextResponse.json({ checkoutUrl: checkout.url });
  } catch (error) {
    console.error("=== ERROR DETAILS ===");
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Full error:", error);
    
    // Check if it's an authentication error
    if (error.message?.includes('401') || error.message?.includes('invalid_token')) {
      return NextResponse.json(
        { 
          error: "Authentication failed - check your Polar access token",
          details: error.message,
          hasToken: !!process.env.POLAR_ACCESS_TOKEN,
          tokenLength: process.env.POLAR_ACCESS_TOKEN?.length || 0,
          suggestion: "Make sure your .env.local file exists and contains a valid POLAR_ACCESS_TOKEN"
        },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { 
        error: "Failed to create checkout session",
        details: error.message,
        hasToken: !!process.env.POLAR_ACCESS_TOKEN,
        productId: productId
      },
      { status: 500 }
    );
  }
} 