"use client";

import Home from "../app/home/home";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";

// Define the Review type
interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

export default function Page() {
  // Explicitly type the state as an array of `Review` objects
  const [clientReviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

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

  return <Home clientReviews={clientReviews} loading={loading} />;
}
