"use client";

import { useMemo, useState } from "react";
import { NavHeaderMenus } from "../../components/NavHeaderMenus";
import { FooterMenus } from "../../components/FooterMenus";
import { HeroSection } from "./HeroSection";
import { TrustedBy } from "./TrustedBy";
import { HowWeHelp } from "./HowWeHelp";
import { ServicesOverview } from "./ServicesOverview";
import { Testimonials } from "./Testimonials";
import { stats } from "@/util/stats";
import { HowItWorks } from "./HowItWorks";
import { CallToAction } from "./CallToAction";
import dynamic from "next/dynamic";
import { ScrollToTop } from "../../components/ScrollToTop";

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

interface Props {
  clientReviews: Review[];
  loading: boolean;
}

export default function HomeContent({ clientReviews, loading }: Props) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);

  const visibleReviews = useMemo(() => {
    return clientReviews.slice(0, visibleCount);
  }, [clientReviews, visibleCount]);

  const StatsCounter = dynamic(
    () =>
      import("../../components/StatsCounter").then((mod) => mod.StatsCounter),
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
  );
}
