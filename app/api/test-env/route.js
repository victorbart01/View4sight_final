import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasToken: !!process.env.POLAR_ACCESS_TOKEN,
    tokenPrefix: process.env.POLAR_ACCESS_TOKEN?.substring(0, 15) + "...",
    tokenLength: process.env.POLAR_ACCESS_TOKEN?.length || 0,
    server: process.env.POLAR_SERVER,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    nodeEnv: process.env.NODE_ENV,
    allEnvKeys: Object.keys(process.env).filter(key => key.includes('POLAR')),
  });
} 