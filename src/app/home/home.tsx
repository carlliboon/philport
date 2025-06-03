/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { NavHeaderMenus } from "@/components/layout";
import { FooterMenus } from "@/components/layout";
import { HeroSection } from "./components/HeroSection";
import { TrustedBy } from "./components/TrustedBy";
import { HowWeHelp } from "./components/HowWeHelp";
import { ServicesOverview } from "./components/ServicesOverview";
import { Testimonials } from "./components/Testimonials";
import { stats } from "@/data/stats";
import { HowItWorks } from "./components/HowItWorks";
import { CallToAction } from "./components/CallToAction";
import dynamic from "next/dynamic";
import { ScrollToTop } from "@/components/common";
import { reviews } from "@/data/reviews";

export const metadata = {
  title: "PhilPort - Your Trusted Partner for E-commerce Store Success",
  description:
    "PhilPort provides specialized Shopify and e-commerce support services—covering store setup, theme customization, app integrations, and virtual assistance—to help merchants scale faster and boost conversions.",
};

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [clientReviews, setReviews] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Memoize the sliced reviews
  const visibleReviews = useMemo(() => {
    return clientReviews.slice(0, visibleCount);
  }, [clientReviews, visibleCount]);

  const StatsCounter = dynamic(
    () =>
      import("@/components/common/StatsCounter").then(
        (mod) => mod.StatsCounter
      ),
    {
      ssr: false,
      loading: () => (
        <div className="text-center text-sm text-muted-foreground">
          Loading statistics...
        </div>
      ),
    }
  );

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />
        <main className="flex-1">
          <HeroSection />
          <TrustedBy />
          <HowWeHelp />
          <ServicesOverview />
          <Testimonials
            reviews={reviews}
            loading={loading}
            handleLoadMore={handleLoadMore}
            visibleCount={visibleCount}
            totalCount={clientReviews.length}
          />
          <StatsCounter stats={stats} />
          <HowItWorks />
          <CallToAction />
        </main>
        <FooterMenus />
        <ScrollToTop />
      </div>
    </>
  );
}
