import { TestimonialCard } from "@/components/common/TestimonialCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";

interface TestimonialsProps {
  reviews: {
    id: number;
    name: string;
    review: string;
    rating: number;
  }[];
  loading: boolean;
  handleLoadMore: () => void;
  visibleCount: number;
  totalCount: number;
}

export const Testimonials = ({
  reviews,
  loading,
  handleLoadMore,
  visibleCount,
  totalCount,
}: TestimonialsProps) => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Hear from Shopify store owners who have transformed their businesses
            with our support services.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {reviews.slice(0, visibleCount).map((review) => (
              <TestimonialCard
                key={review.id}
                quote={review.review}
                author={review.name}
                role={`Rating: ${review.rating}/5`}
              />
            ))}
          </div>
        )}
        {visibleCount < totalCount && (
          <div className="flex justify-center mt-8">
            <Button variant="outline" onClick={handleLoadMore}>
              Read More Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
