"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { Timestamp } from "firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
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
  LogOut,
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

export default function AdminDashboard() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  useEffect(() => {
    fetchReviews();
  }, []);

  // Pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            <a href="#" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </a>
          </Button>
        </div>
        <div className="p-4 border-t">
          <Button variant="ghost" className="justify-start w-full" asChild>
            <a
              href="#"
              className="flex items-center text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </a>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Reviews Management</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="mr-2 h-4 w-4" /> Add Review
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Review</DialogTitle>
                <DialogDescription>
                  Add a new customer review. Click save when you&apos;re done.
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
                        <FormLabel>Customer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                              <SelectValue placeholder="Select a rating" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 Star</SelectItem>
                            <SelectItem value="2">2 Stars</SelectItem>
                            <SelectItem value="3">3 Stars</SelectItem>
                            <SelectItem value="4">4 Stars</SelectItem>
                            <SelectItem value="5">5 Stars</SelectItem>
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
                        <FormLabel>Review Text</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write the review here..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    {loading && (
                      <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Save Review
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
              <CardDescription>
                Manage and moderate customer reviews for your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
                </div>
              ) : reviews.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No reviews found. Add your first review to get started.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentReviews.map((review) => (
                    <div
                      key={review.id}
                      className="border rounded-lg p-4 bg-white"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{review.name}</h3>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">
                            {review.createdAt?.toDate().toLocaleDateString() ||
                              "No date"}
                          </p>
                          <p className="mt-2">{review.review}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleEditReview(review)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="icon"
                                className="text-red-500 hover:text-red-600"
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete the review from your
                                  database.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    deleteReview(review.id.toString())
                                  }
                                  className="bg-red-500 hover:bg-red-600"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              {reviews.length > reviewsPerPage && (
                <Pagination className="w-full">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          onClick={() => paginate(i + 1)}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          paginate(Math.min(totalPages, currentPage + 1))
                        }
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Review</DialogTitle>
            <DialogDescription>
              Make changes to the review. Click save when you&apos;re done.
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
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                          <SelectValue placeholder="Select a rating" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 Star</SelectItem>
                        <SelectItem value="2">2 Stars</SelectItem>
                        <SelectItem value="3">3 Stars</SelectItem>
                        <SelectItem value="4">4 Stars</SelectItem>
                        <SelectItem value="5">5 Stars</SelectItem>
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
                    <FormLabel>Review Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write the review here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  );
}
