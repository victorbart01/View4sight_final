import { polar } from "@/lib/polar";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Testing checkout creation...");
    
    // Test avec le Team Monthly Plan (bb0aa3d0-61f9-426f-9005-277f2ab44700)
    const checkout = await polar.checkouts.create({
      products: ["bb0aa3d0-61f9-426f-9005-277f2ab44700"],
      successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?checkout_id={CHECKOUT_ID}&plan=Team&billing=monthly`,
      metadata: {
        plan_name: "Team",
        billing_cycle: "monthly",
        source: "test_api"
      }
    });
    
    return NextResponse.json({
      success: true,
      message: "Checkout created successfully",
      checkoutId: checkout.id,
      checkoutUrl: checkout.url,
      productId: "bb0aa3d0-61f9-426f-9005-277f2ab44700"
    });
  } catch (error) {
    console.error("Checkout creation error:", error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      productId: "bb0aa3d0-61f9-426f-9005-277f2ab44700",
      suggestion: "Vérifiez que le produit existe dans votre organisation Polar sandbox"
    }, { status: 500 });
  }
} 