"use client";

import Link from "next/link";
import { ShoppingBag, CheckCircle2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavHeaderMenus } from "../components/NavHeaderMenus";
import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";

export default function CareerApplicationPage() {
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const phoneInputRef = useRef(null);

  type ExtendedOptions = Parameters<typeof intlTelInput>[1] & {
    utilsScript?: string;
  };
  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
        initialCountry: "auto",
        geoIpLookup: function (success) {
          fetch("https://ipinfo.io?token=b223add1a27fbd")
            .then((resp) => resp.json())
            .then((resp) => success(resp.country))
            .catch(() => success("us"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      } as ExtendedOptions);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeaderMenus />
      <main className="flex-1 bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Careers
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join Our{" "}
              <span className="text-emerald-600">ShopifySupportPro</span> Team
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Apply for a career opportunity with our team and help Shopify
              store owners succeed with their online businesses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="w-full lg:w-1/3 space-y-4">
                <h2 className="text-2xl font-bold">Why Join Us</h2>
                <p className="text-muted-foreground">
                  Be part of a team that&apos;s dedicated to helping Shopify
                  merchants grow and succeed in the e-commerce space.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Flexible Work Environment</h3>
                      <p className="text-sm text-muted-foreground">
                        Remote-friendly positions with flexible scheduling
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Growth Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        Continuous learning and career advancement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Competitive Benefits</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive benefits package for team members
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Collaborative Culture</h3>
                      <p className="text-sm text-muted-foreground">
                        Work with a team of passionate Shopify experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Make an Impact</h3>
                      <p className="text-sm text-muted-foreground">
                        Help merchants achieve their business goals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <Card className="border-emerald-100 shadow-md">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">
                      Career Application
                    </CardTitle>
                    <CardDescription>
                      Submit your application to join our team of Shopify
                      experts
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input
                            id="first-name"
                            placeholder="John"
                            className="border-emerald-200 focus-visible:ring-emerald-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input
                            id="last-name"
                            placeholder="Doe"
                            className="border-emerald-200 focus-visible:ring-emerald-600"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Phone #</Label>
                        <input
                          type="tel"
                          id="phone-number"
                          ref={phoneInputRef}
                          className="w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="border-emerald-200 focus-visible:ring-emerald-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          className="border-emerald-200 focus-visible:ring-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Documents</h3>
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV</Label>
                        <div
                          className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center transition-colors ${
                            isDragging
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-emerald-200 bg-transparent"
                          }`}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={() => setIsDragging(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            const file = e.dataTransfer.files?.[0];
                            if (file) {
                              setResumeFileName(file.name);
                              if (resumeInputRef.current) {
                                // this is optional but keeps state consistent
                                const dataTransfer = new DataTransfer();
                                dataTransfer.items.add(file);
                                resumeInputRef.current.files =
                                  dataTransfer.files;
                              }
                            }
                          }}
                        >
                          <Upload className="h-8 w-8 text-emerald-600 mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Drag and drop your resume/CV here, or click to
                            browse
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => resumeInputRef.current?.click()}
                          >
                            Browse Files
                          </Button>
                          <input
                            type="file"
                            ref={resumeInputRef}
                            className="hidden"
                            id="resume"
                            onChange={(e) => {
                              if (e.target.files?.[0]) {
                                setResumeFileName(e.target.files[0].name);
                              }
                            }}
                          />
                          {resumeFileName && (
                            <p className="text-sm text-emerald-600 mt-2">
                              Selected file: {resumeFileName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="id-photo">Photo of Primary ID</Label>
                        <div className="border-2 border-dashed border-emerald-200 rounded-md p-6 flex flex-col items-center justify-center">
                          <Upload className="h-8 w-8 text-emerald-600 mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload a clear photo of your primary ID
                          </p>
                          <Button variant="outline" size="sm">
                            Browse Files
                          </Button>
                          <input type="file" className="hidden" id="id-photo" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Skills & Experience
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="skills">Select Your Skills</Label>
                        <Select>
                          <SelectTrigger className="border-emerald-200 focus:ring-emerald-600">
                            <SelectValue placeholder="Select your skills" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customer-support">
                              Customer Support
                            </SelectItem>
                            <SelectItem value="shopify-admin">
                              Shopify Admin
                            </SelectItem>
                            <SelectItem value="shopify-theme">
                              Shopify Theme Development
                            </SelectItem>
                            <SelectItem value="shopify-apps">
                              Shopify App Development
                            </SelectItem>
                            <SelectItem value="graphic-design">
                              Graphic Design
                            </SelectItem>
                            <SelectItem value="content-writing">
                              Content Writing
                            </SelectItem>
                            <SelectItem value="digital-marketing">
                              Digital Marketing
                            </SelectItem>
                            <SelectItem value="project-management">
                              Project Management
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="store-url">
                          Shopify Store URL (if applicable)
                        </Label>
                        <Input
                          id="store-url"
                          placeholder="yourstore.myshopify.com"
                          className="border-emerald-200 focus-visible:ring-emerald-600"
                        />
                        <p className="text-xs text-muted-foreground">
                          If you have experience with your own Shopify store,
                          please provide the URL
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additional-info">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additional-info"
                          placeholder="Tell us about your experience with Shopify and why you want to join our team"
                          className="min-h-[120px] border-emerald-200 focus-visible:ring-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link
                          href="#"
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          terms of service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="#"
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          privacy policy
                        </Link>
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Submit Application
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-emerald-600" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ShopifySupport. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
            >
              Help
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
