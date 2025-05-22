/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon: React.ReactNode;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  featured = false,
}) => {
  return (
    <Card
      className={`flex flex-col h-full ${
        featured ? "border-emerald-200 shadow-lg" : ""
      }`}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <div className="flex flex-col">
            <CardTitle>{title}</CardTitle>
            {featured && (
              <Badge className="w-fit mt-1 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                Most Popular
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features?.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {features ? (
          <Button
            className={`w-full ${
              featured
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            Learn More
          </Button>
        ) : (
          <div className="mt-auto">
            <Link
              href="/services"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
