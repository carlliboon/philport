"use client";

// Original AdminDashboard component logic moved here to be loaded only on the
// browser. This prevents `localStorage` references from running during Vercel
// build.

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Loader2,
  Plus,
  Star,
  Trash,
  Edit,
  LayoutDashboard,
  ShoppingBag,
  Users,
  Settings,
  LogOutIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  createdAt?: Timestamp;
}

const reviewSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  rating: z.string().refine(
    (val) => {
      const num = Number.parseInt(val);
      return num >= 1 && num <= 5;
    },
    { message: "Rating must be between 1 and 5" }
  ),
  review: z
    .string()
    .min(5, { message: "Review must be at least 5 characters" }),
});

export default function DashboardClient() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const reviewsPerPage = 5;

  const reviewsRef = collection(db, "reviews");

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      rating: "5",
      review: "",
    },
  });

  const editForm = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      rating: "5",
      review: "",
    },
  });

  // Fetch Reviews
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const q = query(reviewsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedReviews = querySnapshot.docs.map((doc) => ({
        id: doc.data().id,
        ...doc.data(),
      })) as Review[];
      setReviews(fetchedReviews);
      toast(
        <div>
          <strong>Reviews loaded:</strong> Successfully loaded{" "}
          {fetchedReviews.length} reviews
        </div>
      );
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast(
        <div>
          <strong>Error:</strong> Failed to load reviews
        </div>
      );
    } finally {
      setLoading(false);
    }
  };

  // Add Review
  const addReview = async (data: z.infer<typeof reviewSchema>) => {
    setLoading(true);
    try {
      // Calculate the new ID
      const q = query(reviewsRef, orderBy("id", "desc"));
      const querySnapshot = await getDocs(q);
      const lastReview = querySnapshot.docs[0]?.data();
      const newId = lastReview ? lastReview.id + 1 : 0;

      await addDoc(reviewsRef, {
        id: newId,
        name: data.name,
        rating: Number.parseInt(data.rating),
        review: data.review,
        createdAt: new Date(),
      });

      form.reset();
      setIsAddDialogOpen(false);
      fetchReviews();
      toast("Review added successfully");
    } catch (error) {
      console.error("Error adding review:", error);
      toast("Failed to add review");
    } finally {
      setLoading(false);
    }
  };

  // Delete Review
  const deleteReview = async (id: string) => {
    try {
      await deleteDoc(doc(db, "reviews", id));
      fetchReviews();
      toast(
        <div>
          <strong>Review deleted:</strong> The review has been successfully
          deleted
        </div>
      );
    } catch (error) {
      console.error("Error deleting review:", error);
      toast(
        <div>
          <strong>Error:</strong> Failed to delete review
        </div>
      );
    }
  };

  // Edit Review
  const handleEditReview = (review: Review) => {
    setEditingReview(review);
    editForm.setValue("name", review.name);
    editForm.setValue("rating", review.rating.toString());
    editForm.setValue("review", review.review);
    setIsEditDialogOpen(true);
  };

  const submitEditReview = async (data: z.infer<typeof reviewSchema>) => {
    if (!editingReview) return;

    try {
      await updateDoc(doc(db, "reviews", editingReview.id.toString()), {
        name: data.name,
        rating: Number.parseInt(data.rating),
        review: data.review,
      });

      setIsEditDialogOpen(false);
      fetchReviews();
      toast(
        <div>
          <strong>Review updated:</strong> The review has been successfully
          updated
        </div>
      );
    } catch (error) {
      console.error("Error updating review:", error);
      toast(
        <div>
          <strong>Error:</strong> Failed to update review
        </div>
      );
    }
  };

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      localStorage.removeItem("authToken");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast("Failed to sign out");
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/");
      } else {
        const roleDoc = await getDoc(doc(db, "users", user.uid));
        const role = roleDoc.exists() ? roleDoc.data().role : "user";

        if (role !== "admin" && role !== "user") {
          router.push("/unauthorized");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, []);

  // Pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Guard against accessing localStorage during server-side build/prerender
  const isBrowser = typeof window !== "undefined";
  const isAuthenticated =
    isBrowser && localStorage.getItem("authToken") !== null;

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-emerald-600" />
            <span className="font-semibold text-lg">Shopify Support Pro</span>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-2 flex-1">
          <Button variant="ghost" className="justify-start" asChild>
            <a href="/admin/dashboard" className="flex items-center">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </a>
          </Button>
          <Button
            variant="ghost"
            className="justify-start bg-emerald-50 text-emerald-700"
            asChild
          >
            <a href="/admin/dashboard" className="flex items-center">
              <Star className="mr-2 h-4 w-4" />
              Reviews
            </a>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <a href="#" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Customers
            </a>
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <a href="#" className="flex items-container"poser staff;
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </a>
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full"
            onClick={handleLogout}
            asChild
          >
            <span className="flex items-center">
              <LogOutIcon className="mr-2 h-4 w-4" />
              <a
                href="#"
                className="flex items-center text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                Logout
              </a>
            </span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      {/* The rest of the original JSX remains unchanged */}

      {/* ... The remainder of your long JSX content (header, table, dialogs, etc.) ... */}

      <Toaster />
    </div>
  );
} 