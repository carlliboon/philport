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

interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  createdAt: Timestamp;
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
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"reviews" | "customers">(
    "reviews"
  );
  const router = useRouter();
  const reviewsPerPage = 5;

  const reviewsRef = collection(db, "reviews");
  const customersRef = collection(db, "customers");

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

  // Fetch Customers
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const q = query(customersRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedCustomers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Customer[];
      setCustomers(fetchedCustomers);
      toast(
        <div>
          <strong>Customers loaded:</strong> Successfully loaded{" "}
          {fetchedCustomers.length} customers
        </div>
      );
    } catch (error) {
      console.error("Error fetching customers:", error);
      toast(
        <div>
          <strong>Error:</strong> Failed to load customers
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
    if (activeTab === "reviews") {
      fetchReviews();
    } else {
      fetchCustomers();
    }
  }, [activeTab]);

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
            className={`justify-start ${activeTab === "reviews" ? "bg-emerald-50 text-emerald-700" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            <Star className="mr-2 h-4 w-4" />
            Reviews
          </Button>
          <Button
            variant="ghost"
            className={`justify-start ${activeTab === "customers" ? "bg-emerald-50 text-emerald-700" : ""}`}
            onClick={() => setActiveTab("customers")}
          >
            <Users className="mr-2 h-4 w-4" />
            Customers
          </Button>
          <Button variant="ghost" className="justify-start" asChild>
            <a href="#" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </a>
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full"
            onClick={handleLogout}
          >
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span className="text-red-500 hover:text-red-600">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === "reviews" ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Reviews</h1>
                <Dialog
                  open={isAddDialogOpen}
                  onOpenChange={setIsAddDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Review
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Review</DialogTitle>
                      <DialogDescription>
                        Add a new review to the system.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(addReview)}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="rating"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rating</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select rating" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map((rating) => (
                                    <SelectItem
                                      key={rating}
                                      value={rating.toString()}
                                    >
                                      {rating} Stars
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="review"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Review</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Add Review</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3">Name</th>
                          <th className="px-6 py-3">Rating</th>
                          <th className="px-6 py-3">Review</th>
                          <th className="px-6 py-3">Date</th>
                          <th className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentReviews.map((review) => (
                          <tr key={review.id} className="bg-white border-b">
                            <td className="px-6 py-4">{review.name}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                  />
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4">{review.review}</td>
                            <td className="px-6 py-4">
                              {review.createdAt?.toDate().toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleEditReview(review)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <Trash className="h-4 w-4 text-red-500" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        Delete Review
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Are you sure you want to delete this
                                        review? This action cannot be undone.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>
                                        Cancel
                                      </AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() =>
                                          deleteReview(review.id.toString())
                                        }
                                      >
                                        Delete
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center py-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => paginate(currentPage - 1)}
                          className={
                            currentPage === 1
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                      {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index + 1}>
                          <PaginationLink
                            onClick={() => paginate(index + 1)}
                            isActive={currentPage === index + 1}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => paginate(currentPage + 1)}
                          className={
                            currentPage === totalPages
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              </Card>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Customers</h1>
              </div>

              <Card>
                <CardContent className="p-0">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3">Name</th>
                          <th className="px-6 py-3">Email</th>
                          <th className="px-6 py-3">Phone</th>
                          <th className="px-6 py-3">Joined Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((customer) => (
                          <tr key={customer.id} className="bg-white border-b">
                            <td className="px-6 py-4">{customer.name}</td>
                            <td className="px-6 py-4">{customer.email}</td>
                            <td className="px-6 py-4">
                              {customer.phone || "N/A"}
                            </td>
                            <td className="px-6 py-4">
                              {customer.createdAt.toDate().toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>

      {/* Edit Review Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Review</DialogTitle>
            <DialogDescription>
              Edit the review details below.
            </DialogDescription>
          </DialogHeader>
          <Form {...editForm}>
            <form
              onSubmit={editForm.handleSubmit(submitEditReview)}
              className="space-y-4"
            >
              <FormField
                control={editForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <SelectItem key={rating} value={rating.toString()}>
                            {rating} Stars
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editForm.control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  );
}

export const dynamic = "force-dynamic";
