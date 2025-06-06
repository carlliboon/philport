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
    default: "PhilPort",
    template: "%s | PhilPort",
  },
  description:
    "PhilPort offers professional Shopify and e-commerce support—including store setup, theme customization, app integrations, and virtual assistance—to help online retailers boost conversions and scale with confidence.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PhilPort offers professional Shopify and e-commerce support—including store setup, theme customization, app integrations, and virtual assistance—to help online retailers boost conversions and scale with confidence."
        />
        <meta name="keywords" content="Shopify support, e-commerce optimization, Shopify virtual assistant, Shopify theme customization, Shopify expert services, e-commerce store management, online store help" />
        <meta property="og:title" content="PhilPort - Expert E-commerce Support Services" />
        <meta
          property="og:description"
          content="PhilPort offers professional Shopify and e-commerce support—including store setup, theme customization, app integrations, and virtual assistance—to help online retailers boost conversions and scale with confidence."
        />
        <meta
          property="og:image"
          content="https://www.philport.com/logo.png"
        />
        <meta property="og:url" content="https://www.philport.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PhilPort - Expert E-commerce Support Services" />
        <meta name="twitter:description" content="PhilPort offers professional Shopify and e-commerce support—including store setup, theme customization, app integrations, and virtual assistance—to help online retailers boost conversions and scale with confidence." />
        <meta name="twitter:image" content="https://www.philport.com/logo.png" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.philport.com" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PhilPort",
              url: "https://www.philport.com",
              logo: "https://www.philport.com/logo.png",
              description: "Expert e-commerce support services for Shopify stores",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US"
              },
              sameAs: [
                "https://twitter.com/philport",
                "https://linkedin.com/company/philport"
              ]
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
