import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GetStartedProps {
  title: string;
  description: string;
  scheduleBtnText: string;
  hasViewOurServices?: boolean;
  hasEmailUs?: boolean;
}

export const GetStarted: React.FC<GetStartedProps> = ({
  title,
  description,
  scheduleBtnText,
  hasViewOurServices = true,
  hasEmailUs = true,
}) => {
  const alignmentClass = hasViewOurServices
    ? "text-left items-start"
    : "text-center items-center";

  return (
    <div className={`flex flex-col space-y-4 ${alignmentClass}`}>
      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
        Get Started
      </Badge>

      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="max-w-[700px] text-muted-foreground md:text-xl">
        {description}
      </p>

      <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
        <Button
          asChild
          className="w-full min-[400px]:w-auto bg-emerald-600 hover:bg-emerald-700"
          size="lg"
        >
          <Link href="https://cal.com/carl-michael/shopify-support-pro">
            {scheduleBtnText}
          </Link>
        </Button>

        {hasViewOurServices && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full min-[400px]:w-auto"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        )}
      </div>

      {hasEmailUs && (
        <p className="text-xs text-muted-foreground">
          Or email us at{" "}
          <span className="font-medium">support@shopifysupport.com</span>
        </p>
      )}
    </div>
  );
};
