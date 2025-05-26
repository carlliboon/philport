"use client";

export { default } from "./DashboardClient";

// Disable static prerender to avoid Firebase during build
export const dynamic = "force-dynamic";
