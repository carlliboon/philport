import { Star } from "lucide-react";

interface TestimonialCardProps {
  title: string;
  quote: string;
  author: string;
  role: string;
  featured?: boolean;
}

export const TestimonialCard = ({
  title,
  quote,
  author,
  role,
  featured = false,
}: TestimonialCardProps) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-lg ${
        featured ? "bg-emerald-50 border-emerald-200" : "bg-muted/20 border"
      } border shadow-sm`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
      </div>
      <p className="italic mb-4">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
