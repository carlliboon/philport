"use client";

import Link from "next/link";
import { ShoppingBag, CheckCircle2, Upload, X, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NavHeaderMenus } from "@/components/layout";
import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import { handleFileUpload } from "@/hooks/uploadHandler";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/constants";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

export default function CareerApplicationPage() {
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [isDraggingResume, setIsDraggingResume] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string[]>([]);
  const phoneInputRef = useRef(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const primaryIdInputRef = useRef<HTMLInputElement>(null);
  const [primaryIdUrl, setPrimaryIdUrl] = useState("");
  const [primaryFileName, setPrimaryFileName] = useState("");
  const [primaryUploading, setPrimaryUploading] = useState(false);
  const [primaryUploadError, setPrimaryUploadError] = useState("");
  const [primaryUploadProgress, setPrimaryUploadProgress] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDraggingPrimary, setIsDraggingPrimary] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);

  const [gender, setGender] = useState("");

  // this code is used to initialize the phone input
  type ExtendedOptions = Parameters<typeof intlTelInput>[1] & {
    utilsScript?: string;
  };

  // It sets the initial country automatically based on the user's IP address (using ipinfo.io).
  // The utilsScript is required for formatting and validation features of intl-tel-input.
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumeUrl) {
      alert("Please upload your resume (PDF, max 2MB).");
      return;
    }
    if (!primaryIdUrl) {
      alert("Please upload your primary ID photo (JPG/JPEG, max 2MB).");
      return;
    }

    const form = new FormData(e.currentTarget);

    const payload = {
      first_name: form.get("first-name"),
      last_name: form.get("last-name"),
      phone_number: (phoneInputRef.current as HTMLInputElement | null)?.value || "",
      gender: gender,
      email: form.get("email"),
      street_address: `${form.get("street-address") || ""} ${form.get("city") || ""} ${form.get("state") || ""} ${form.get("zip-code") || ""} ${form.get("country") || ""}`.trim(),
      skills: selectedSkill.join(", "),
      shopify_url: form.get("store-url"),
      additional_info: form.get("additional-info"),
      resume: resumeUrl,
      primary_id_photo: primaryIdUrl,
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setDialogOpen(true);
        e.currentTarget.reset();
        setSelectedSkill([]);
        setResumeUrl("");
        setResumeFileName("");
        setPrimaryIdUrl("");
        setPrimaryFileName("");
      } else {
        let errMsg = "Submission failed.";
        try {
          const err = await res.json();
          errMsg = err.message || errMsg;
        } catch {
          // If response is not JSON, keep default message
        }
        alert(errMsg);
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  // Delete a previously uploaded file via the server-side API route so that the
  // service-role key (which has delete permissions) is never exposed to the
  // browser.
  const removeSupabaseFile = async (bucket: string, publicUrl: string) => {
    if (!publicUrl) return;

    // Extract the object path inside the bucket from the public URL.
    const idx = publicUrl.indexOf(`/${bucket}/`);
    if (idx === -1) return;
    const path = decodeURIComponent(publicUrl.slice(idx + bucket.length + 2));

    const res = await fetch("/api/delete-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bucket, path }),
    });

    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.error("Failed to delete file:", await res.text());
    }
  };

  const showResumeProgress = uploading || (uploadProgress > 0 && uploadProgress < 100);
  const showPrimaryProgress = primaryUploading || (primaryUploadProgress > 0 && primaryUploadProgress < 100);

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeaderMenus />
      <main className="flex-1 bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"> Careers </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> Join Our{" "} <span className="text-emerald-600">PhilPort</span> Team </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Apply for a career opportunity with our team and help e-commerce
              store owners succeed with their online businesses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="w-full lg:w-1/3 space-y-4">
                <h2 className="text-2xl font-bold">Why Join Us</h2>
                <p className="text-muted-foreground"> Be part of a team that&apos;s dedicated to helping Shopify merchants grow and succeed in the e-commerce space. </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Flexible Work Environment</h3>
                      <p className="text-sm text-muted-foreground"> Remote-friendly positions with flexible scheduling </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Growth Opportunities</h3>
                      <p className="text-sm text-muted-foreground"> Continuous learning and career advancement </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Competitive Benefits</h3>
                      <p className="text-sm text-muted-foreground"> Comprehensive benefits package for team members </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Collaborative Culture</h3>
                      <p className="text-sm text-muted-foreground"> Work with a team of passionate PhilPort experts </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Make an Impact</h3>
                      <p className="text-sm text-muted-foreground"> Help merchants achieve their business goals </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3">
                <Card className="border-emerald-100 shadow-md">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold"> Career Application </CardTitle>
                    <CardDescription> Submit your application to join our team of Shopify experts </CardDescription>
                  </CardHeader>
                  <form
                    onSubmit={handleSubmit}
                  >
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium"> Personal Information </h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name"> First name </Label>
                            <Input id="first-name" name="first-name" placeholder="John" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name"> Last name </Label>
                            <Input id="last-name" name="last-name" placeholder="Doe" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          </div>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="space-y-2 w-1/2">
                            <Label htmlFor="first-name"> Phone # </Label>
                            <input type="tel" id="phone-number" ref={phoneInputRef}
                              className="rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 w-full"
                            />
                          </div>
                          <div className="space-y-2 w-1/2">
                            <Label htmlFor="gender"> Gender </Label>
                            <Select value={gender} onValueChange={setGender}>
                              <SelectTrigger> <SelectValue placeholder="Gender" /> </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male"> Male </SelectItem>
                                <SelectItem value="female"> Female </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email"> Email </Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" className="border-emerald-200 focus-visible:ring-emerald-600" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="street-address"> Street Address </Label>
                          <Input id="street-address" name="street-address" className="border-emerald-200 focus-visible:ring-emerald-600" />
                        </div>
                        <div className="flex gap-2">
                          <div className="space-y-2 w-full">
                            <Label htmlFor="city"> City </Label>
                            <Input id="city" name="city" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          </div>
                          <div className="space-y-2 w-full">
                            <Label htmlFor="state"> State </Label>
                            <Input id="state" name="state" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="space-y-2 w-full">
                            <Label htmlFor="country"> Country </Label>
                            <Input id="country" name="country" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          </div>
                          <div className="space-y-2 ">
                            <Label htmlFor="zip-code"> Zip Code </Label>
                            <Input id="zip-code" name="zip-code" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium"> Documents </h3>

                        {/* Resume/CV */}
                        <div className="space-y-2">
                          <Label htmlFor="resume"> Resume/CV </Label>
                          <div className={`border-2 rounded-md p-6 flex flex-col items-center justify-center transition-colors relative ${
                            isDraggingResume
                              ? "border-emerald-500 bg-emerald-50 border-dashed"
                              : uploading
                                ? "border-emerald-500 bg-emerald-50 border-dashed"
                                : resumeUrl
                                  ? "border-emerald-700 border-solid"
                                  : "border-emerald-200 bg-transparent border-dashed"
                          }`}
                            onDragOver={(e) => { e.preventDefault(); setIsDraggingResume(true); }}
                            onDragLeave={() => setIsDraggingResume(false)}
                            onDrop={(e) => { e.preventDefault(); setIsDraggingResume(false);
                              const file = e.dataTransfer.files?.[0];
                              if (file && resumeInputRef.current) {
                                const dt = new DataTransfer();
                                dt.items.add(file);
                                resumeInputRef.current.files = dt.files;
                                resumeInputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
                              }
                            }}>
                            {resumeUrl && (
                              <div className="absolute top-2 left-2 text-xs text-emerald-700 truncate max-w-[75%]">{resumeFileName}</div>
                            )}
                            {resumeUrl && (
                              <button type="button" className="cursor-pointer absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={async () => { await removeSupabaseFile("resume", resumeUrl); setResumeUrl(""); setResumeFileName(""); setUploadProgress(0); if(resumeInputRef.current) resumeInputRef.current.value = ""; }}><X className="h-4 w-4"/></button>) }
                            <Upload className="h-8 w-8 text-emerald-600 mb-2" />
                            <p className="text-sm text-muteds-foreground mb-2"> Drag and drop your resume/CV here, or click to browse </p>
                            <Button type="button" variant="outline" size="sm" onClick={() => resumeInputRef.current?.click()}> Browse Files </Button>
                            <input type="file" accept="application/pdf" ref={resumeInputRef} className="hidden" id="resume"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                if (file.type !== "application/pdf") { setUploadError("Only PDF files are allowed."); return; }
                                if (file.size > 2 * 1024 * 1024) { setUploadError("File must be less than 2 MB."); return; }
                                setResumeUrl("");
                                setResumeFileName("");
                                handleFileUpload({ e, bucket: "resume", prefix: "resume", setFileName: setResumeFileName, setUploading, setUploadError, setFileUrl: setResumeUrl, setUploadProgress });
                              }}
                            />
                            {(uploadProgress > 0 || uploading || showResumeProgress) && <div className="flex pt-3 w-full align-baseline items-center gap-2">
                              <Progress className="text-emerald-600" value={uploadProgress} />
                              { uploading && <Loader2 className="h-5 w-5 text-emerald-600 animate-spin"/> }
                              { uploadError && <span className="text-red-600 text-xs">{uploadError}</span> }
                            </div>}
                          </div>
                        </div>

                        {/* Primary ID Photo */}
                        <div className="space-y-2">
                          <Label htmlFor="id-photo"> Photo of Primary ID </Label>
                          <div className={`border-2 rounded-md p-6 flex flex-col items-center justify-center transition-colors relative ${
                            isDraggingPrimary
                              ? "border-emerald-500 bg-emerald-50 border-dashed"
                              : primaryUploading
                                ? "border-emerald-500 bg-emerald-50 border-dashed"
                                : primaryIdUrl
                                  ? "border-emerald-700 border-solid"
                                  : "border-emerald-200 bg-transparent border-dashed"
                          }`}
                          >
                            {primaryIdUrl && (
                              <div className="absolute top-2 left-2 text-xs text-emerald-700 truncate max-w-[75%]">{primaryFileName}</div>
                            )}
                            {primaryIdUrl && (
                              <button type="button" className="cursor-pointer absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={async () => { await removeSupabaseFile("primary-id", primaryIdUrl); setPrimaryIdUrl(""); setPrimaryFileName(""); setPrimaryUploadProgress(0); if(primaryIdInputRef.current) primaryIdInputRef.current.value = ""; }}><X className="h-4 w-4"/></button>) }
                            <Upload className="h-8 w-8 text-emerald-600 mb-2" />
                            <p className="text-sm text-muted-foreground mb-2"> Upload a clear JPG/JPEG photo of your primary ID </p>
                            <Button variant="outline" size="sm" type="button" onClick={() => primaryIdInputRef.current?.click()}> Browse Files </Button>
                            <input type="file" accept="image/jpeg" ref={primaryIdInputRef} className="hidden" id="id-photo"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                if (!["image/jpeg", "image/jpg", "image/pjpeg"].includes(file.type)) {
                                  setPrimaryUploadError("Only JPG/JPEG images are allowed.");
                                  return;
                                }
                                if (file.size > 2 * 1024 * 1024) {
                                  setPrimaryUploadError("File must be less than 2 MB.");
                                  return;
                                }
                                setPrimaryIdUrl("");
                                setPrimaryFileName("");
                                handleFileUpload({ e, bucket: "primary-id", prefix: "primary-id", setFileName: setPrimaryFileName, setUploading: setPrimaryUploading, setUploadError: setPrimaryUploadError, setFileUrl: setPrimaryIdUrl, setUploadProgress: setPrimaryUploadProgress });
                              }}
                            />
                            {showPrimaryProgress && <div className="flex pt-3 w-full align-baseline items-center gap-2">
                              <Progress className="text-emerald-600" value={primaryUploadProgress} />
                              { primaryUploading && <Loader2 className="h-5 w-5 text-emerald-600 animate-spin"/> }
                              { primaryUploadError && <span className="text-red-600 text-xs">{primaryUploadError}</span> }
                            </div>}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium"> Skills & Experience </h3>
                        <div className="space-y-2">
                          <Label htmlFor="skills">Select Your Skills</Label>
                          <Select onValueChange={(value) => setSelectedSkill((prev) => [...prev, value]) }>
                            <SelectTrigger className="border-emerald-200 focus:ring-emerald-600">
                              <SelectValue placeholder="Select your skills" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={skills.customerSupport}> {skills.customerSupport} </SelectItem>
                              <SelectItem value={skills.shopifyAdmin}> {skills.shopifyAdmin} </SelectItem>
                              <SelectItem value={skills.shopifyThemeDevelopment}> {skills.shopifyThemeDevelopment} </SelectItem>
                              <SelectItem value={skills.shopifyAppDevelopment}> {skills.shopifyAppDevelopment} </SelectItem>
                              <SelectItem value={skills.graphicDesign}> {skills.graphicDesign} </SelectItem>
                              <SelectItem value={skills.contentWriting}> {skills.contentWriting} </SelectItem>
                              <SelectItem value={skills.digitalMarketing}> {skills.digitalMarketing} </SelectItem>
                              <SelectItem value={skills.projectManagement}> {skills.projectManagement} </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {selectedSkill.length > 0 && <div className="flex flex-wrap gap-1">
                          {selectedSkill.map((skill) => {
                            return (
                              <span key={skill} className="flex items-center align-baseline gap-1 text-xs border rounded-lg px-2 py-1">
                                {skill}
                                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedSkill(selectedSkill.filter((s) => s !== skill))}/>
                              </span>
                            );
                          })}
                        </div>}
                        <div className="space-y-2">
                          <Label htmlFor="store-url"> Shopify Store URL (if applicable) </Label>
                          <Input id="store-url" name="store-url" placeholder="yourstore.myshopify.com" className="border-emerald-200 focus-visible:ring-emerald-600" />
                          <p className="text-xs text-muted-foreground"> If you have experience with your own Shopify store, please provide the URL </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="additional-info"> Additional Information </Label>
                          <Textarea id="additional-info" name="additional-info" placeholder="Tell us about your experience with Shopify and why you want to join our team"
                            className="min-h-[120px] border-emerald-200 focus-visible:ring-emerald-600"
                          />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          I agree to the{" "}
                          <Link href="#" className="text-emerald-600 hover:text-emerald-700"> terms of service </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-emerald-600 hover:text-emerald-700"> privacy policy </Link>
                        </label>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 mt-5">
                      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700"> Submit Application </Button>
                    </CardFooter>
                  </form>
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
            <p className="text-sm text-muted-foreground"> © {new Date().getFullYear()} PhilPort. All rights reserved. </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-600"> Terms </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-600"> Privacy </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-emerald-600"> Help </Link>
          </div>
        </div>
      </footer>
      { /* Success dialog */ }
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Application Received</AlertDialogTitle>
            <AlertDialogDescription>
              We have received your application. We will send you an email once it is approved or if we need more information.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
