import type { Metadata } from "next";
import Home from "./home/home";

export const metadata: Metadata = {
  title: { absolute: "PhilPort | Shopify & Ecommerce Support" },
  description:
    "Make room for growth with PhilPort. Hands-on Shopify expertise, customer support, virtual assistance, and creative services for your e-commerce business.",
  alternates: { canonical: "https://www.philport.com" },
};

export default function Page() {
  return <Home />;
}
