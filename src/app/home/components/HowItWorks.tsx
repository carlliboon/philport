import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, Rocket } from "lucide-react";
import Link from "next/link";

export const HowItWorks = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Simple Process, Exceptional Results
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Getting started with our Shopify support services is easy.
            Here&apos;s how it works:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <div className="relative flex flex-col items-center text-center p-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              1
            </div>
            <div className="p-3 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 mt-4">
              <Calendar
                className="h-8 w-8 text-emerald-600"
                aria-label="Calendar icon representing a free consultation meeting"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Consultation</h3>
            <p className="text-muted-foreground">
              We start with a free consultation to understand your Shopify
              store&apos;s specific needs and challenges.
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center p-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              2
            </div>
            <div className="p-3 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 mt-4">
              <FileText
                className="h-8 w-8 text-emerald-600"
                aria-label="Checklist icon representing a tailored support plan"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Plan</h3>
            <p className="text-muted-foreground">
              We create a tailored support plan based on your specific
              requirements and budget.
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center p-6">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              3
            </div>
            <div className="p-3 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 mt-4">
              <Rocket
                className="h-8 w-8 text-emerald-600"
                aria-label="Rocket icon symbolizing fast implementation and onboarding"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Implementation</h3>
            <p className="text-muted-foreground">
              Our team seamlessly integrates with your business and begins
              providing support right away.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="https://cal.com/carl-michael/shopify-support-pro">
              Schedule Your Free Consultation{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
