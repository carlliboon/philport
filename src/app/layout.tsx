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
    "PhilPort offers expert assistance for your e-commerce store, ensuring smooth operations and enhanced performance.",
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
        <meta
          name="description"
          content="We provide professional e-commerce support services including setup, customization, and ongoing assistance to help your store succeed."
        />
        <meta property="og:title" content="PhilPort" />
        <meta
          property="og:description"
          content="Expert e-commerce support services to grow your online store."
        />
        <meta
          property="og:image"
          content="https://philport.com/logo.png"
        />
        <meta property="og:url" content="https://philport.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PhilPort",
              url: "https://philport.com",
              logo: "https://philport.com/logo.png",
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
