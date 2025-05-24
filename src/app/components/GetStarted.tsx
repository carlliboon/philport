import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CalCom from "./CalCom";

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

      <div className="flex flex-row flex-wrap justify-center gap-2 pt-4">
        <Button
          asChild
          className="bg-emerald-600 hover:bg-emerald-700 text-sm font-medium px-4 py-2 flex-1 max-w-[200px]"
        >
          <span className="cursor-pointer">
            <CalCom btnTitle={scheduleBtnText} />
          </span>
        </Button>
        {hasViewOurServices && (
          <Button
            asChild
            variant="outline"
            className="text-sm font-medium px-4 py-2 flex-1 max-w-[200px]"
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
