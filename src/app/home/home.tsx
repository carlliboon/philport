"use client";

import type React from "react";
import { useMemo, useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
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

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

export const metadata = {
  title: "Shopify Support Pro - Your Trusted Partner for Shopify Store Success",
  description:
    "Shopify Support Pro offers expert assistance for your Shopify store, ensuring smooth operations and enhanced performance.",
};

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [clientReviews, setReviews] = useState<Review[]>([]);
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

  useEffect(() => {
    const authenticateAndFetch = async () => {
      setLoading(true);
      try {
        await signInAnonymously(auth);
        const reviewsCollection = collection(db, "reviews");
        const querySnapshot = await getDocs(reviewsCollection);

        // Map the data to the `Review` type
        const reviewsData: Review[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: Number(data.id),
            name: data.name ?? "Unknown", // Default value if missing
            rating: data.rating ?? 0, // Default value if missing
            review: data.review ?? "No review provided", // Default value if missing
          };
        });

        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      } finally {
        setLoading(false);
      }
    };

    authenticateAndFetch();
  }, []);

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
