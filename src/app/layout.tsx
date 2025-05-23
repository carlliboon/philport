import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shopify Support Pro",
    template: "%s | Shopify Support Pro",
  },
  description:
    "Shopify Support Pro offers expert assistance for your Shopify store, ensuring smooth operations and enhanced performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="We provide professional Shopify support services including setup, customization, and ongoing assistance to help your store succeed."
        />
        <meta property="og:title" content="Shopify Support Pro" />
        <meta
          property="og:description"
          content="Expert Shopify support services to grow your online store."
        />
        <meta
          property="og:image"
          content="https://shopifysupportpro.com/logo.png"
        />
        <meta property="og:url" content="https://shopifysupportpro.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shopify Support Pro",
              url: "https://shopifysupportpro.com",
              logo: "https://shopifysupportpro.com/logo.png",
            }),
          }}
        />
      </Head>
      <body>
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
