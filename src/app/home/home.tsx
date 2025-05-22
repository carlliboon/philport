import type React from "react";
import { useMemo, useState } from "react";
import { NavHeaderMenus } from "../components/NavHeaderMenus";
import { FooterMenus } from "../components/FooterMenus";
import { HeroSection } from "./components/HeroSection";
import { TrustedBy } from "./components/TrustedBy";
import { HowWeHelp } from "./components/HowWeHelp";
import { ServicesOverview } from "./components/ServicesOverview";
import { Testimonials } from "./components/Testimonials";
import { stats } from "@/util/stats";
import { HowItWorks } from "./components/HowItWorks";
import { CallToAction } from "./components/CallToAction";
import dynamic from "next/dynamic";
import { ScrollToTop } from "../components/ScrollToTop";

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

interface HomeProps {
  clientReviews: Review[];
  loading: boolean;
}

export const metadata = {
  title: "Shopify Support Pro - Your Trusted Partner for Shopify Store Success",
  description:
    "Shopify Support Pro offers expert assistance for your Shopify store, ensuring smooth operations and enhanced performance.",
};

export default function HomePage({ clientReviews, loading }: HomeProps) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // Memoize the sliced reviews
  const visibleReviews = useMemo(() => {
    return clientReviews.slice(0, visibleCount);
  }, [clientReviews, visibleCount]);

  const StatsCounter = dynamic(
    () => import("../components/StatsCounter").then((mod) => mod.StatsCounter),
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
      <title>
        Shopify Support Pro - Your Trusted Partner for Shopify Store Success
      </title>
      <meta
        name="description"
        content="Shopify Support Pro offers expert assistance for your Shopify store, ensuring smooth operations and enhanced performance."
      />

      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />
        <main className="flex-1">
          <HeroSection />
          <TrustedBy />
          <HowWeHelp />
          <ServicesOverview />
          <Testimonials
            reviews={visibleReviews}
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
