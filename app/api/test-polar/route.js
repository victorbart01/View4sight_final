import { polar } from "@/lib/polar";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Testing Polar configuration...");
    console.log("Token present:", !!process.env.POLAR_ACCESS_TOKEN);
    console.log("Server:", process.env.POLAR_SERVER);
    
    // Test simple avec la nouvelle API Polar
    const products = await polar.products.list({
      limit: 10
    });
    
    console.log("Products found:", products.items?.length);
    
    return NextResponse.json({
      success: true,
      message: "Polar configuration OK",
      server: process.env.POLAR_SERVER,
      productCount: products.items?.length || 0,
      products: products.items?.map(product => ({
        id: product.id,
        name: product.name,
        type: product.type,
        prices: product.prices?.map(price => ({
          id: price.id,
          amount: price.price_amount,
          currency: price.price_currency,
          recurring: price.recurring_interval
        }))
      })) || []
    });
  } catch (error) {
    console.error("Polar error:", error);
    
    // Diagnostic détaillé pour debug
    let errorDetails = {
      success: false,
      error: error.message,
      hasToken: !!process.env.POLAR_ACCESS_TOKEN,
      tokenLength: process.env.POLAR_ACCESS_TOKEN?.length || 0,
      server: process.env.POLAR_SERVER,
    };

    // Vérification du type d'erreur selon la doc Polar
    if (error.message?.includes('401') || error.message?.includes('invalid_token')) {
      errorDetails.diagnosis = "Token invalide ou expiré";
      errorDetails.solution = "Créez un nouveau token sur https://sandbox.polar.sh";
    } else if (error.message?.includes('403')) {
      errorDetails.diagnosis = "Permissions insuffisantes";
      errorDetails.solution = "Vérifiez les scopes du token (products:read requis)";
    } else if (error.message?.includes('404')) {
      errorDetails.diagnosis = "Endpoint non trouvé";
      errorDetails.solution = "Vérifiez l'URL de l'API (sandbox vs production)";
    }
    
    return NextResponse.json(errorDetails, { status: 500 });
  }
}