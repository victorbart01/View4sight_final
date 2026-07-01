import { Polar } from "@polar-sh/sdk";

// Lazy singleton: the Polar client is built on first use, NOT at module import.
// Building it at import ran during `next build` ("Collecting page data") and could
// crash the whole build with "Invalid URL" when POLAR_SERVER was missing or malformed.
// Deferring construction to request time keeps the build safe.
let client;

export function getPolar() {
  if (!client) {
    const server =
      process.env.POLAR_SERVER?.trim() === "production" ? "production" : "sandbox";
    client = new Polar({
      accessToken: process.env.POLAR_ACCESS_TOKEN,
      server,
    });
  }
  return client;
}
